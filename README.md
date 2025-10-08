# GeorgeMato
George Mato's Luxury Real-estate website
George Mato — Luxury Waterfront Residences (Website)

A modern, minimal, high-end brochure site for George Mato | The Luxury Group Real Estate Consultants.
Focus: cinematic waterfront visuals, quiet luxury copy, and a streamlined contact path for UHNW buyers in Miami & Southwest Florida.

Tagline: The Finest Waterfront Residences Curated Personally.
Voice: discreet, data-led, relationship-first.

🔗 Live Demo

Production: Add your deployed URL here (Vercel or GitHub Pages)

Repo: https://github.com/amartinez808/GeorgeMato

✨ Highlights

Cinematic hero video rotator with graceful autoplay fallback

Luxury typography (Inter + Manrope), champagne-gold accent

Responsive gallery (Fisher Island, Estero Bay, Brickell, Naples)

“Quiet, data-led representation” Approach section

Lightweight vanilla HTML/CSS/JS (no build step), fast first paint

SEO + OpenGraph tags ready

🧭 Mission Statement (brand philosophy)

“In luxury real estate, the most important thing about sales isn’t the property — it’s the person… The most powerful sale isn’t about closing a deal — it’s about opening a relationship that lasts well beyond the contract.” — George Mato

This shapes site tone: connection, discretion, trust, and curation over volume.

🗂 Project Structure
.
├── index.html
├── hero-1.jpg
├── hero-2.jpg
├── hero-3.jpg
├── hero-1.mp4
├── hero-2.mp4
├── fisherIsland.avif
├── esteroBay.webp
└── (optional/media referenced in HTML)
    ├── miamiGolf.jpg / miamigolf2.mp4  ← replace (not pristine)
    └── naples.jpg                     ← add or remove reference


Note: index.html currently references miamigolf2.mp4 and naples.jpg. Replace with higher-end waterfront assets or update the markup to remove those entries.

🛠 Tech Stack

Pure HTML5/CSS3/JS

Google Fonts: Inter, Manrope

No frameworks, no bundlers — deploy anywhere

▶️ Local Development
# clone
git clone https://github.com/amartinez808/GeorgeMato
cd GeorgeMato

# open locally
# Option A: Quick Python server
python3 -m http.server 5173
# visit http://localhost:5173

# Option B: VS Code Live Server or any static server

🚀 Deploy
Option 1 — Vercel (recommended)

Import the repo in Vercel.

Framework preset: Other (static).

Output directory: / (root).

Deploy → add custom domain when ready.

Option 2 — GitHub Pages

Push to main.

Repo → Settings → Pages → Source: Deploy from a branch → Branch: main → / (root).

Save and wait for the Pages URL.

🧩 Key Files & What to Edit

index.html

Header brand line:
George Mato | The Luxury Group

Hero label & headline:

“Luxury condominium consultant”

“Waterfront residences, curated personally.”

Hero media (videos/images):
Replace the golf course clip with a pristine waterfront/skyline 4K loop.

CTA: mailto:workwith@itsradai.com (update to George’s final email when available).

Gallery images/captions: ensure only ultra-high-quality waterfront shots.

Approach section: keep “Quiet, data-led representation”; you can add years/revenue feats if desired.

SEO/OG: title/description/images are pre-filled; update og:image to your best hero still.

Assets

Keep only .jpg/.webp/.avif/.mp4 you actually use.

Replace miamigolf2.mp4 and any “not pristine” assets with cleaner, luxury visuals.

🎨 Content & Brand Notes

Tone: discreet, consultative, relationship-first.

Palette: ivory/white, deep navy overlays, champagne gold accent (--accent: #c6a869).

Typography: Large hero H1, generous whitespace, minimal UI chrome.

📈 Performance & UX

Videos are muted, playsinline, and rotate every ~5.2s with fade.

Autoplay gracefully requests a tap if blocked (mobile).

Images use object-fit: cover and hover scale for polish.

Consider serving hero videos in H.264 + HEVC/VP9 for broader compatibility.

✅ Roadmap / TODO

 Replace golf course media with pristine waterfront/skyline footage (4K loop, dusk or morning light).

 Verify/remove references to miamigolf2.mp4 and naples.jpg if not provided.

 Finalize contact email (e.g., george@…) and update CTAs.

 Add favicon and touch icons.

 Add Analytics (e.g., Plausible or GA4).

 Add Robots/Sitemap for SEO.

 Optional: Add /about page that presents the full mission statement elegantly.

 Optional: Add simple lead form (Formspree / Basin) with SPF/DKIM-ready email.

 Optional: Swap static gallery for a lightbox (still keep weight low).

🔒 Licensing

Code: MIT (or your preference).

Images/Videos: ensure proper license (Unsplash/Pexels/Adobe Stock). Replace placeholders with licensed assets before launch.

🤝 Credits

Copy & creative direction by Antonio (RAD AI) with guidance from George Mato.

UI/Code scaffolding by RAD AI.

📬 Contact

Antonio, RAD AI — itsradai.com

Project inquiries: add preferred email/phone

How to update this README

Create a new branch:

git checkout -b docs/readme-refresh


Replace the repo’s README.md with this content.

Commit & push:

git add README.md
git commit -m "docs: polish README with brand, deployment, and roadmap"
git push -u origin docs/readme-refresh
