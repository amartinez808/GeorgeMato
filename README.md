# George Mato | The Luxury Group

> **The finest waterfront residences curated personally**

A sophisticated React application showcasing George Mato's luxury real estate consultancy, featuring cinematic video carousels, professional gallery presentations, and seamless client engagement tools.

## 🌊 Live Demo

**Production:** [Deploy URL] *(Vercel Auto-Deploy)*  
**Repository:** <https://github.com/amartinez808/GeorgeMato>

## ✨ Features

### 🎬 Cinematic Hero Experience

- **8-video carousel** with smooth transitions and auto-rotation
- **Premium 4K content** including UHD and custom GMvideo assets
- **Graceful fallback** for autoplay restrictions
- **8-second intervals** with optimized crossfade timing

### 🖼️ Professional Gallery

- **9 luxury properties** in clean grid layout
- **Full-width presentation** inspired by luxury real estate sites
- **Responsive design** (2-column desktop, 1-column mobile)
- **Hover effects** and elegant captions

### 👨‍💼 Professional Integration

- **LinkedIn profile integration** with direct links
- **Licensed broker credentials** prominently featured
- **30+ years experience** and **$15B+ sales volume** highlighted
- **6 professional achievements** showcase

### 🎨 Modern Design System

- **Luxury coastal aesthetic** with blues, greens, and elegant neutrals
- **Clean typography** using Inter font family
- **Smooth animations** and micro-interactions
- **Mobile-first responsive** design

## 🛠 Tech Stack

- **React 18** with functional components and hooks
- **Vite** for fast development and optimized builds
- **React Router** for seamless navigation
- **Modern CSS** with custom properties and grid layouts
- **Optimized assets** with multiple video formats

## 📁 Project Structure

```
GeorgeMato/
├── public/
│   ├── hero-1.mp4, hero-3.mp4          # Original hero videos
│   ├── GMvideo2.mp4 → GMvideo6.mp4      # Custom video content
│   ├── 15768406-uhd_4096_2160_24fps.mp4 # 4K UHD video
│   ├── GMphoto1.jpg → GMphoto5.jpg      # Gallery images
│   ├── george-mato.jpg                  # Professional headshot
│   └── ...other assets
├── src/
│   ├── pages/
│   │   ├── Home.jsx                     # Main landing page
│   │   └── About.jsx                    # Professional profile
│   ├── App.jsx                          # Root component
│   ├── App.css                          # Global styles
│   └── main.jsx                         # React entry point
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Development

### Prerequisites

- Node.js 16+
- npm or yarn

### Setup

```bash
# Clone repository
git clone https://github.com/amartinez808/GeorgeMato
cd GeorgeMato

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

### Build & Deploy

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Sections

### Hero Carousel

- 8 premium videos rotating every 8 seconds
- Smooth opacity transitions with cubic-bezier easing
- Mobile-optimized with touch interaction support

### Gallery

- Full-width layout inspired by luxury real estate sites
- Clean grid system with consistent aspect ratios
- Professional captions with gradient overlays

### About Page

- Comprehensive professional background
- Licensed broker credentials
- LinkedIn profile integration
- 6 achievement highlights

### Contact Integration

- Direct email consultation requests
- LinkedIn profile access
- Professional credential verification

## 🎨 Design Philosophy

**Tone:** Discreet, consultative, relationship-first  
**Aesthetic:** Coastal luxury with sophisticated minimalism  
**Typography:** Clean, readable, with generous whitespace  
**Color Palette:** Soft blues, earthy greens, elegant neutrals

## 📈 Performance Optimizations

- **Optimized video loading** with smart preloading
- **Responsive images** with appropriate sizing
- **CSS Grid** for efficient layouts
- **Smooth animations** with GPU acceleration
- **Mobile-first** responsive design

## 🔄 Recent Updates

### v2.0 - React Conversion & Enhancement

- ✅ Converted from static site to React application
- ✅ Added 8-video hero carousel with smooth transitions
- ✅ Integrated 9-photo professional gallery
- ✅ Added LinkedIn profile integration
- ✅ Enhanced professional credentials section
- ✅ Implemented luxury real estate design aesthetic
- ✅ Added mobile-responsive gallery layout

## 🚀 Deployment

### Vercel (Recommended)

1. Connect GitHub repository to Vercel
2. Framework: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Auto-deploy on push to main

### Manual Build

```bash
npm run build
# Deploy dist/ folder to your hosting provider
```

## 🤝 Professional Contact

**George Mato**  
Principal, The Luxury Group  
Licensed Real Estate Professional  
📧 <george@theluxurygrouprealestate.com>  
💼 [LinkedIn Profile](https://www.linkedin.com/in/georgemato/)

**Development Team**  
Antonio Martinez, RAD AI  
🌐 itsradai.com

---

*"In luxury real estate, the most important thing about sales isn't the property — it's the person... The most powerful sale isn't about closing a deal — it's about opening a relationship that lasts well beyond the contract."* — George Mato
