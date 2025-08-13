## 🗺 Roadmap

Planned enhancements for `expo-ios-ci-filters`:

### 🎭 New Filter Categories

- **Distortion Filters**
  - Bump Distortion
  - Twirl Distortion
  - Pinch Distortion
  - Hole Distortion

- **Convolution Filters**
  - Convolution 3×3 / 5×5
  - Emboss
  - Edge Detection
  - Sharpen Kernels

- **Perspective Filters**
  - `perspectiveRotateFilter`
    (simulate 3D rotation & skew on the image)

- **Tile Effect Filters**
  - Kaleidoscope
  - Op Tile
  - Sixfold / Eightfold Tile
  - Glitch-style Tiling

---

### 🖼 Image Rendering

- **Native `resizeMode` support** (`cover`, `contain`, `stretch`, `center`)
- Optimized GPU rendering pipeline for faster filter previews
- Ability to set background color when aspect ratio doesn’t match

---

### 🔮 Longer-Term Ideas

- Export final edited image with all filters applied
- Layer-based editing (stack multiple filters & reorder)
- Preset packs for quick looks
- Android-compatible filter implementation
