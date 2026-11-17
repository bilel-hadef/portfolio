# Portfolio

Personal portfolio website. Plain HTML/CSS/JS — no build step.

## Run locally

Just open `index.html` in a browser. (Or use VS Code's "Live Server" extension
for auto-reload.)

## Edit

- `index.html` — all the text content. Replace every "Your Name", "Project One",
  the contact links, and the resume bullets.
- `styles.css` — colors are the `--accent` etc. variables at the top.
- `assets/` — add `photo.jpg`, `project1.jpg`…`project3.jpg`, `resume.pdf`.

## Deploy to GitHub Pages

1. Create a repo on GitHub. If you name it `yourusername.github.io`, the site
   lives at `https://yourusername.github.io`. Any other name puts it at
   `https://yourusername.github.io/reponame`.
2. Push this folder:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/yourusername/REPO.git
   git push -u origin main
   ```
3. On GitHub: repo **Settings → Pages → Build and deployment**. Set
   **Source: Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
4. Wait ~1 minute, then visit the URL shown on that Pages settings screen.
