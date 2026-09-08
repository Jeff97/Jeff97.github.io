# SCUT Wushan campus map

Map data: © OpenStreetMap contributors, https://www.openstreetmap.org/copyright (ODbL).
Attribution is displayed in the home-page footer, outside the introduction card.

Retrieved 2026-09-08:
https://www.openstreetmap.org/api/0.6/map?bbox=113.335,23.148,113.347,23.157

## Building identification

The previous marker (113.3432, 23.1515) was an approximate campus-vicinity point east of Wushan Road and was incorrect for the Transportation Building.

The corrected marker uses the area centroid of OSM building way 365994297 (named 土交学院): WGS84 longitude 113.3393910, latitude 23.1500949.
https://www.openstreetmap.org/way/365994297

Verified visually on 2026-09-08 against Amap's result “华南理工大学五山校区交通大楼”, POI B00140NERY, 五山路381号. The selected building outline is south of 道明游泳馆 and west of Wushan Road, matching the OSM footprint. This is a building-centre marker, not an entrance or survey measurement.
https://www.amap.com/search?query=华南理工大学交通大楼&city=440100

University campus-map reference (schematic; older building shapes):
https://sce.scut.edu.cn/_upload/article/files/47/ad/a0ecf2664efa85a186f88904e783/6f3db12d-c658-44b6-b960-0da068fe01b6.pdf

## Rendering and alignment

Run `python3 scripts/render-campus-map.py extract.osm images/scut-wushan-map.svg` using the downloaded OSM XML extract. The script renders available land, building, road, and water geometry with a soft color palette and highlights the Transportation Building.

The local projection corrects longitude scale with cos(latitude). The SVG retains its aspect ratio. Its building centroid is exactly at 62% x / 43% y. Both CSS background-position (with background-size: cover) and marker position use this anchor. This keeps the marker aligned with the building through desktop and mobile cropping without stretching the map. Update the script and CSS together if changing these percentages.

The click-through uses the Google Maps universal search URL (api=1), with the full building name and street address. It does not pass raw map coordinates between providers. Visitors do not request map tiles or load a map SDK.
