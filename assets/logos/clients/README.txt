Client logos  (rendered by the "Selected clients" strip on the home page)
========================================================================

Current files: maxeda.png, infrabel.png, atlas-copco.png, edmac.png, sprb.png
All are transparent PNGs, auto-cropped to content and normalised to 140px tall.

The strip renders each at 24px height as a muted monochrome silhouette
(grey in light mode, white in dark mode), brightening on hover. Source colour
and gradients are ignored, so a plain one-colour logo works best.

To replace one: drop in a new transparent PNG (or SVG) with the same filename.
If it has lots of empty margin, re-run the crop:

  python -c "from PIL import Image; \
  f='NAME.png'; im=Image.open(f).convert('RGBA'); \
  im=im.crop(im.getchannel('A').getbbox()); \
  h=140; im=im.resize((round(im.width*h/im.height),h)); \
  c=Image.new('RGBA',(im.width+20,h+20),(0,0,0,0)); c.paste(im,(10,10),im); c.save(f)"

Before publishing: confirm you may display these client names/logos publicly
(consulting engagements sometimes restrict this).
