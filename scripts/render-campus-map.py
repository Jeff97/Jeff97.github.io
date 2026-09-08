"""Render the home-page map from an OSM XML extract (stdlib only).

Usage: python3 scripts/render-campus-map.py extract.osm images/scut-wushan-map.svg
Data and building-identification sources: images/scut-wushan-map.source.md.
"""
import math
import sys
import xml.etree.ElementTree as ET
from pathlib import Path

root = ET.parse(sys.argv[1]).getroot()
nodes = {n.get('id'): (float(n.get('lon')), float(n.get('lat')))
         for n in root.findall('node')}
ways = {w.get('id'): w for w in root.findall('way')}

def points(way):
    return [nodes[n.get('ref')] for n in way.findall('nd')]

# OSM calls this building 土交学院; Amap identifies the same footprint as 交通大楼.
building_id = '365994297'
polygon = points(ways[building_id])
# Polygon area centroid, avoiding the duplicated closing vertex bias.
cross = [a[0]*b[1] - b[0]*a[1] for a, b in zip(polygon, polygon[1:])]
area2 = sum(cross)
lon, lat = [sum((a[i]+b[i])*c for a, b, c in zip(polygon, polygon[1:], cross))
            / (3*area2) for i in (0, 1)]
width, height = 600, 640
anchor_x, anchor_y = .62, .43
span_lon = .0054
span_lat = span_lon * math.cos(math.radians(lat)) * height / width
west, north = lon - anchor_x * span_lon, lat + anchor_y * span_lat

def project(point):
    x, y = point
    return (x-west)/span_lon*width, (north-y)/span_lat*height

def path(ps):
    return 'M' + ' L'.join(f'{x:.2f},{y:.2f}' for x, y in map(project, ps))

land, buildings, road_edges, roads, highlight = [], [], [], [], []
for way_id, way in ways.items():
    tags = {t.get('k'): t.get('v') for t in way.findall('tag')}
    ps = points(way)
    if len(ps) < 2:
        continue
    coords = [project(p) for p in ps]
    if max(p[0] for p in coords) < 0 or min(p[0] for p in coords) > width or max(p[1] for p in coords) < 0 or min(p[1] for p in coords) > height:
        continue
    d = path(ps)
    fill = None
    if tags.get('natural') == 'water' or tags.get('leisure') == 'swimming_pool':
        fill = '#9fd3e5'
    elif tags.get('landuse') in ('forest', 'grass', 'meadow', 'flowerbed') or tags.get('natural') == 'wood' or tags.get('leisure') in ('park', 'garden'):
        fill = '#c4dfb8'
    elif tags.get('leisure') in ('pitch', 'sports_centre'):
        fill = '#b3d4ad'
    elif tags.get('leisure') == 'track':
        fill = '#e6b9a5'
    elif tags.get('landuse') == 'residential':
        fill = '#e7edef'
    if fill:
        land.append(f'<path d="{d} Z" fill="{fill}"/>')
    if 'building' in tags:
        fill = '#e7d6b8' if tags['building'] == 'university' else '#cbdce7'
        buildings.append(f'<path d="{d} Z" fill="{fill}" stroke="#b6c5cb" stroke-width=".7"/>')
        if way_id == building_id:
            highlight.append(f'<path id="transportation-building" d="{d} Z" fill="#e7b68c" stroke="#b97849" stroke-width="1.5"/>')
    elif 'highway' in tags and tags['highway'] not in ('construction', 'proposed'):
        major = tags['highway'] in ('primary','secondary','tertiary','trunk','trunk_link','primary_link')
        size = 7 if major else 2.5
        road_edges.append(f'<path d="{d}" stroke="{"#d5b673" if major else "#d0d8d9"}" stroke-width="{size+2}"/>')
        roads.append(f'<path d="{d}" stroke="{"#f4d18a" if major else "#fffdf7"}" stroke-width="{size}"/>')
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}">
<title>Transportation Building, SCUT Wushan campus, Guangzhou</title>
<desc>Map data © OpenStreetMap contributors, ODbL. Building footprint 365994297, identified against Amap POI B00140NERY. Marker anchor: 62% 43%.</desc>
<rect width="{width}" height="{height}" fill="#f1f3e9"/>
<g stroke-linejoin="round" stroke-linecap="round">
{''.join(land + buildings)}
<g fill="none">{''.join(road_edges + roads)}</g>
{''.join(highlight)}
</g></svg>
'''
Path(sys.argv[2]).write_text(svg)
print(f'Building centroid (WGS84): {lon:.7f}, {lat:.7f}; SVG anchor: {project((lon, lat))}; rendered {len(buildings)} buildings')
