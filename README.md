# Picell3D

> Draw in 2D. Get 3D automatically.

A pixel art editor that generates 3D voxel objects in real time. Draw on a 2D canvas, watch it become a 3D model — export to PNG, OBJ, GLB, VOX, or JSON.

---

## Features

### Editor
- **6-view canvas** — Front, Back, Left, Right, Top, Bottom projections of the same voxel grid
- **Drawing tools** — Pencil, Eraser, Flood Fill
- **Layers** — multiple layers with visibility toggle and compositing
- **Depth control** — paint depth slider (1–9) with direction: Front / Both / Back
- **Depth numbers** — signed offset labels on each painted pixel (when zoom ≥ 10px)
- **Grid toggle** and adjustable zoom

### 3D Preview
- **Live real-time 3D** mesh built from voxel data
- **Orbit, pan, zoom** — hold Space to rotate in edit mode
- **3D direct editing** — paint/erase voxels by clicking in the 3D view (preview-only mode)
- **Post-processing** — UnrealBloomPass for glow effects

### Materials
Per-color material types applied to the 3D model:
- **Solid** — flat color, default
- **Emissive** — self-lit, subtle glow
- **Neon** — bright bloom effect
- **Metal** — metalness/roughness shading
- **Glass** — semi-transparent, see-through

### Import
- **Pixel art import** — converts any image to pixel art and paints it on the canvas; image colors are added to the palette automatically
- **Reference overlay** — import a semi-transparent reference image; drag to reposition, drag corners to resize, adjust opacity

### Export PNG
Opens a dialog with:
- View selection (Front, Back, Left, Right, Top, Bottom) — single or multiple
- Multiple views produce a **spritesheet** (views side by side, no gaps)
- Pixel scale: 4×, 8×, 16×, 32×
- Background: transparent or custom color
- Live preview before export

### Render Studio
Full-screen render page with:
- **Camera presets** — Isometric, Hero, Front, Top, Side, Dramatic
- **Lighting presets** — Studio, Outdoor, Neon, Dark
- **Background** — Transparent, Dark, Black, White, Custom color
- **Bloom intensity** control
- **Grid** toggle
- **Export formats:**
  - PNG — high-resolution screenshot at 512/1024/2048/4096px
  - OBJ + MTL — Wavefront, ready for Blender, Maya, Unity
  - GLB — glTF binary, universal 3D format
  - VOX — MagicaVoxel format
  - JSON — raw voxel data with material map

### Settings
- Display: depth labels, grid, view mode, zoom
- Canvas: width × height × depth with presets
- Painting: paint depth, direction
- Reset: clear canvas or reset all settings

### Themes
Synthwave · Steampunk · Cyberpunk · Blueprint · Watercolor

---

## Tech Stack

| Layer | Library |
|---|---|
| UI | React 18 + Tailwind CSS |
| State | Zustand v5 |
| 3D | Three.js r170 |
| Post-processing | EffectComposer + UnrealBloomPass |
| Controls | OrbitControls |
| Icons | Lucide React |
| Build | Vite |

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Voxel Grid

```
voxels[y][x][z]   — y=0 is top of canvas
UNIT = 0.1        — world units per voxel
Default: 32×32×5  — width × height × depth
```

All 6 views are projections of the same voxel grid. Editing from any view writes into the same data — side views only edit existing voxels, front/back can create new ones.

---

## Canvas Coordinates vs World Coordinates

| Axis | Canvas | World |
|---|---|---|
| X | left→right | left→right |
| Y | top→bottom (0=top) | bottom→top (0=bottom) |
| Z | near→far | near→far, centered at D/2 |

Depth labels on the canvas show signed offset from center (e.g. `0`, `−1`, `+1`).
