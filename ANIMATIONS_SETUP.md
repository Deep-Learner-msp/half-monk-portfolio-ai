# 🎬 Animations Setup & Testing Guide

## ✅ What's Been Integrated

Your blog posts now include professional Manim animations! Here's what's set up:

### Blog Posts with Animations

| Blog Post | Animation | URL Path |
|-----------|-----------|----------|
| **IAM Threat Detection** | GNN Architecture Visualization | `/blog/003-iam-threat-detection` |
| **Voice AI Supply Chain** | Voice Pipeline & Edge Processing | `/blog/002-voice-enabled-supply-chain` |
| **Toolformer Research** | Self-Supervised Learning Process | `/blog/001-toolformer-research-annotation` |
| **AI Adversarial Defense** | Attack & Defense Layers | `/blog/004-ai-adversarial-defense` |

## 📁 Required Video Files

Make sure these videos and poster thumbnails are in your `public/animations/` directory:

```
public/
└── animations/
    ├── GNNIAMArchitecture.mp4          # IAM Threat Detection (2.3 MB)
    ├── GNNIAMArchitecture-poster.jpg   # Thumbnail (42 KB)
    ├── VoiceAIPipeline.mp4              # Voice AI Supply Chain (2.6 MB)
    ├── VoiceAIPipeline-poster.jpg       # Thumbnail (38 KB)
    ├── ToolformerLearning.mp4           # Toolformer Research (3.1 MB)
    ├── ToolformerLearning-poster.jpg    # Thumbnail (36 KB)
    ├── AdversarialDefense.mp4           # AI Adversarial Defense (2.4 MB)
    └── AdversarialDefense-poster.jpg    # Thumbnail (44 KB)
```

### Check if Videos and Posters Exist

```bash
# Run this command to verify:
ls -lh public/animations/

# You should see:
# - 4 MP4 video files (2.3-3.1 MB each)
# - 4 JPG poster thumbnails (36-44 KB each)
# If videos are missing, copy them from manim_animations/media/videos/
# If posters are missing, regenerate them using the command below
```

### Generate Poster Thumbnails

If you need to regenerate the poster thumbnails:

```bash
cd public/animations

# Generate all posters (extracts frame at 2 seconds from each video)
ffmpeg -i AdversarialDefense.mp4 -ss 00:00:02 -vframes 1 -q:v 2 -update 1 AdversarialDefense-poster.jpg -y
ffmpeg -i GNNIAMArchitecture.mp4 -ss 00:00:02 -vframes 1 -q:v 2 -update 1 GNNIAMArchitecture-poster.jpg -y
ffmpeg -i ToolformerLearning.mp4 -ss 00:00:02 -vframes 1 -q:v 2 -update 1 ToolformerLearning-poster.jpg -y
ffmpeg -i VoiceAIPipeline.mp4 -ss 00:00:02 -vframes 1 -q:v 2 -update 1 VoiceAIPipeline-poster.jpg -y
```

**What the poster does:**
- Shows a preview thumbnail before video loads
- Faster initial page load (thumbnails are ~40KB vs 2-3MB videos)
- Better user experience on slow connections
- Professional appearance with immediate visual feedback

## 🚀 Testing the Animations

### 1. Start Development Server

```bash
npm run dev
```

### 2. Navigate to Each Blog Post

Open these URLs in your browser:

- **IAM Threat Detection**: http://localhost:8080/blog/003-iam-threat-detection
- **Voice AI**: http://localhost:8080/blog/002-voice-enabled-supply-chain
- **Toolformer**: http://localhost:8080/blog/001-toolformer-research-annotation
- **Adversarial Defense**: http://localhost:8080/blog/004-ai-adversarial-defense

### 3. What to Check

For each blog post:

✅ **Animation loads properly** (no 404 errors)
✅ **Title and description display** correctly
✅ **Video plays** when clicking play button
✅ **Controls appear on hover** (play/pause/restart/fullscreen)
✅ **Animation loops** continuously
✅ **Responsive on mobile** (try different screen sizes)

## 🎨 Animation Placement

### Generic Blog Posts (BlogPost.tsx)
- Animations appear **after the "Approach" section**
- Shows right before the "Solution" section
- Perfect for visualizing the technical approach before implementation details

### AI Adversarial Defense (TechnicalBlogPost.tsx)
- Animation appears **after "Threat Landscape"**
- Shows before diving into defense architecture
- Demonstrates attacks and defenses visually

## 🔧 Customization

### Change Animation Settings

In `src/pages/BlogPost.tsx`, find the `animationConfig` object:

```typescript
const animationConfig = {
  '003-iam-threat-detection': {
    src: '/animations/GNNIAMArchitecture.mp4',
    title: 'Your Custom Title',
    description: 'Your custom description...',
  },
  // ...
};
```

### AnimationPlayer Component Props

```tsx
<AnimationPlayer
  src="/animations/YourVideo.mp4"     // Required: video path
  title="Animation Title"              // Required: shown above video
  description="Description text..."    // Optional: context for viewers
  autoplay={false}                     // Optional: auto-start (default: false)
  loop={true}                          // Optional: loop video (default: true)
  poster="/animations/poster.jpg"      // Optional: thumbnail before load
  className="custom-class"             // Optional: additional CSS classes
/>
```

## 🎯 Animation Content Overview

### 1. GNN IAM Architecture (60 seconds)
**For:** 003-iam-threat-detection

**Timeline:**
- 0:00-0:15 - Heterogeneous graph construction (Users, Roles, Resources)
- 0:15-0:35 - Graph Attention Network with attention weights
- 0:35-0:50 - Temporal evolution and anomaly detection
- 0:50-1:00 - Performance metrics (92% F1, 88% FPR reduction)

### 2. Voice AI Pipeline (50 seconds)
**For:** 002-voice-enabled-supply-chain

**Timeline:**
- 0:00-0:12 - Audio waveform noise cancellation
- 0:12-0:25 - BERT NLU processing (98.3% accuracy)
- 0:25-0:40 - Dialogue management and TMS/WMS integration
- 0:40-0:50 - Performance metrics (45% faster, <200ms latency)

### 3. Toolformer Learning (65 seconds)
**For:** 001-toolformer-research-annotation

**Timeline:**
- 0:00-0:10 - Problem demonstration (LLM can't do math)
- 0:10-0:40 - Self-supervised learning (Sample → Evaluate → Filter)
- 0:40-0:52 - Fine-tuning process
- 0:52-1:05 - Results and performance metrics

### 4. Adversarial Defense (55 seconds)
**For:** 004-ai-adversarial-defense

**Timeline:**
- 0:00-0:15 - Data poisoning attack demonstration
- 0:15-0:30 - 4-layer defense architecture
- 0:30-0:45 - Real-time attack detection
- 0:45-0:55 - Defense effectiveness metrics

## 🐛 Troubleshooting

### Animation Not Showing

**Check 1:** Verify file exists
```bash
ls public/animations/GNNIAMArchitecture.mp4
```

**Check 2:** Check browser console for errors
- Open DevTools (F12)
- Look for 404 errors or MIME type errors

**Check 3:** Verify file path in component
- Path should be `/animations/FileName.mp4` (starting with `/`)
- Case-sensitive on Linux/Mac

### Animation Shows Error Message

If you see "⚠ Animation could not be loaded":
1. The video file doesn't exist at the specified path
2. The video format is not supported (should be MP4/H.264)
3. File permissions issue (check file is readable)

### Video Doesn't Play

**Issue:** Video loads but won't play
- **Solution:** Check video codec - must be H.264 (most common)
- **Solution:** Try a different browser (Chrome, Firefox, Safari)
- **Solution:** Check browser autoplay policies (muted videos autoplay better)

### Performance Issues

**Issue:** Video loads slowly
- **Solution:** Compress videos (see manim_animations/INTEGRATION_GUIDE.md)
- **Solution:** Host on CDN for production
- **Solution:** Add poster images for faster initial load

## 📦 Production Deployment

### Before Deploying

1. **Verify all videos are in public/animations/**
   ```bash
   npm run build
   # Check dist/animations/ contains all videos
   ```

2. **Test production build locally**
   ```bash
   npm run preview
   ```

3. **Check video file sizes**
   ```bash
   du -h public/animations/*
   # Each should be 5-15 MB for optimal loading
   ```

### Optimization Tips

1. **Compress videos** (recommended for production):
   ```bash
   cd public/animations
   ffmpeg -i GNNIAMArchitecture.mp4 -c:v libx264 -crf 23 GNNIAMArchitecture_compressed.mp4
   ```

2. **Generate poster images**:
   ```bash
   ffmpeg -i GNNIAMArchitecture.mp4 -ss 00:00:02 -vframes 1 poster-gnn.jpg
   ```

3. **Consider CDN hosting** for better performance:
   - Upload videos to AWS S3 / Cloudflare R2
   - Update `src` paths in animationConfig
   - Enables global edge caching

## 🎓 Usage Examples

### Example 1: Add Animation to New Blog Post

1. Add video file to `public/animations/`
2. Update `animationConfig` in `BlogPost.tsx`:

```typescript
const animationConfig = {
  // ... existing entries ...
  '005-your-new-post': {
    src: '/animations/YourAnimation.mp4',
    title: 'Your Animation Title',
    description: 'Detailed description...',
  },
};
```

3. Animation automatically appears after "Approach" section

### Example 2: Multiple Animations in One Post

Modify `BlogPost.tsx` to add animations in multiple sections:

```tsx
{/* After Approach */}
{id === '003-iam-threat-detection' && (
  <AnimationPlayer
    src="/animations/GNNConstruction.mp4"
    title="Graph Construction"
  />
)}

{/* After Solution */}
{id === '003-iam-threat-detection' && (
  <AnimationPlayer
    src="/animations/GNNResults.mp4"
    title="Performance Results"
  />
)}
```

## 📊 Performance Metrics

After integration, your blog posts should have:

- ✅ **Loading Time:** <3 seconds on fast connection
- ✅ **Animation Start:** Immediate on play button click
- ✅ **Smooth Playback:** 60 FPS (if videos rendered at 60 FPS)
- ✅ **Mobile Friendly:** Responsive on all screen sizes
- ✅ **Accessibility:** Controls visible on hover/tap

## 🎉 Success Checklist

Before considering setup complete:

- [ ] All 4 video files in `public/animations/`
- [ ] Dev server running (`npm run dev`)
- [ ] Tested all 4 blog post URLs
- [ ] Animations load without errors
- [ ] Play/pause/restart controls work
- [ ] Videos loop continuously
- [ ] Tested on mobile device or responsive mode
- [ ] No console errors in browser DevTools

## 📞 Need Help?

If animations aren't working:

1. Check this guide's troubleshooting section
2. Review `manim_animations/INTEGRATION_GUIDE.md` for detailed setup
3. Verify video files exist and are accessible
4. Check browser console for specific error messages

---

**Last Updated:** December 2025
**Status:** ✅ Fully Integrated
