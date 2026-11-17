Tech-stack logos
================

These .svg files are REFERENCE COPIES. The site itself renders the icons from an
inline <svg> sprite near the top of index.html (each <symbol id="i-...">), so that
they show up when the page is opened directly from disk (file://) — browsers block
SVGs loaded as CSS mask/background from the local filesystem.

The sprite recolours each icon with fill:currentColor (muted grey, emerald on
hover, adapts to light/dark).

Real brand marks:
  Simple Icons (https://simpleicons.org, CC0):
    python  git  terraform  dbt  airflow  pandas  spark
    azure  azuredevops  powerautomate   (from an older Simple Icons release)
  Microsoft @fabric-msft/svg-icons (fabric_24_filled):
    fabric

Placeholder glyphs (no clean official monochrome SVG available):
  powerbi     bar-chart
  sqlserver   database  (labelled "SQL")
  code        </>  -> used for DAX and M (no brand logo exists)

To change an icon: edit the matching <symbol id="i-NAME"> path in index.html
(update this .svg file too if you want the reference to stay in sync).

Official Microsoft icons:
  https://learn.microsoft.com/power-platform/guidance/icons
  https://learn.microsoft.com/entra/architecture/architecture-icons
