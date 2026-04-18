"""Generate a Leaflet cluster map from location fields in _talks/*.md."""

from pathlib import Path

import getorg
from geopy.exc import GeocoderServiceError
from geopy.geocoders import Nominatim


def parse_front_matter(markdown_path):
    """Extract key-value pairs from YAML front matter without extra deps."""
    data = {}
    lines = markdown_path.read_text(encoding="utf-8").splitlines()

    if not lines or lines[0].strip() != "---":
        return data

    for line in lines[1:]:
        if line.strip() == "---":
            break
        if ":" not in line:
            continue

        key, value = line.split(":", 1)
        value = value.strip().strip('"').strip("'")
        data[key.strip()] = value

    return data


def collect_locations(talk_dir):
    """Collect unique non-empty locations from talk markdown files."""
    locations = []
    seen = set()

    for markdown_path in sorted(talk_dir.glob("*.md")):
        front_matter = parse_front_matter(markdown_path)
        location = front_matter.get("location", "").strip()

        if not location or location in seen:
            continue

        seen.add(location)
        locations.append(location)

    return locations


def geocode_locations(locations):
    geocoder = Nominatim(user_agent="academicpages-talkmap")
    location_dict = {}

    for location in locations:
        try:
            geocoded = geocoder.geocode(location)
        except GeocoderServiceError as exc:
            print(f"Failed to geocode '{location}': {exc}")
            continue

        if geocoded is None:
            print(f"Warning: no geocode result for '{location}'")
            continue

        location_dict[location] = geocoded
        print(f"{location}\n  {geocoded}")

    return location_dict


def main():
    repo_root = Path(__file__).resolve().parent
    talk_dir = repo_root / "_talks"
    output_dir = repo_root / "talkmap"

    if not talk_dir.exists():
        raise FileNotFoundError(f"Talk directory not found: {talk_dir}")

    locations = collect_locations(talk_dir)
    if not locations:
        raise RuntimeError("No talk locations found in _talks/*.md")

    location_dict = geocode_locations(locations)
    if not location_dict:
        raise RuntimeError("No valid geocoded locations were generated")

    output_dir.mkdir(parents=True, exist_ok=True)
    getorg.orgmap.create_map_obj()
    getorg.orgmap.output_html_cluster_map(
        location_dict,
        folder_name=str(output_dir),
        hashed_usernames=False,
    )

    print(f"Generated talkmap for {len(location_dict)} locations in {output_dir}")


if __name__ == "__main__":
    main()




