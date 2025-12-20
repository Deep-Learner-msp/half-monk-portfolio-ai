# Animation Integration Guide

This guide explains how to integrate the Manim animations into your blog posts.

## Quick Start

### 1. Render the Animations

```bash
cd manim_animations

# Install dependencies (first time only)
pip install -r requirements.txt

# Render all animations
./render_all.sh

# Or render individually
manim -pqh gnn_iam_architecture.py GNNIAMArchitecture
```

### 2. Copy Videos to Public Directory

```bash
# Create animations directory in public folder
mkdir -p ../public/animations

# Copy rendered videos
cp media/videos/gnn_iam_architecture/1080p60/GNNIAMArchitecture.mp4 ../public/animations/
cp media/videos/voice_ai_pipeline/1080p60/VoiceAIPipeline.mp4 ../public/animations/
cp media/videos/adversarial_defense/1080p60/AdversarialDefense.mp4 ../public/animations/
cp media/videos/toolformer/1080p60/ToolformerLearning.mp4 ../public/animations/
```

Or use this convenient script:
```bash
# Create a copy script
cat > copy_animations.sh << 'EOF'
#!/bin/bash
mkdir -p ../public/animations
find media/videos -name "*.mp4" -path "*/1080p60/*" -exec cp {} ../public/animations/ \;
echo "✓ Animations copied to public/animations/"
EOF

chmod +x copy_animations.sh
./copy_animations.sh
```

## Integration in Blog Posts

### Option 1: Using the AnimationPlayer Component (Recommended)

The `AnimationPlayer` component provides a beautiful, interactive video player with custom controls.

#### Step 1: Import the Component

In your blog post file (e.g., `TechnicalBlogPost.tsx` or a data-driven blog post renderer):

```tsx
import { AnimationPlayer } from '@/components/blog/AnimationPlayer';
```

#### Step 2: Add Animation to Your Content

```tsx
{/* In your blog post content */}
<section className="mb-12">
  <h2 className="text-3xl font-bold text-white mb-6">
    Graph Neural Network Architecture
  </h2>

  <AnimationPlayer
    src="/animations/GNNIAMArchitecture.mp4"
    title="Heterogeneous Graph Construction & GAT Attention"
    description="This animation demonstrates how Graph Neural Networks model complex identity relationships in IAM systems, showing graph construction, attention mechanisms, and temporal evolution."
    autoplay={false}
    loop={true}
  />

  <p className="text-gray-300 mt-6">
    The animation above visualizes the three key components...
  </p>
</section>
```

### Option 2: Direct Video Embed (Simple)

For a simpler implementation without custom controls:

```tsx
<video
  controls
  loop
  className="w-full rounded-xl border border-gray-700/50 shadow-2xl"
  poster="/animations/poster-gnn.jpg"
>
  <source src="/animations/GNNIAMArchitecture.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Option 3: Data-Driven Approach

If you're using the existing blog post data structure from `blogPosts.ts`, you can extend it to include animations:

```typescript
// In src/data/blogPosts.ts

export interface BlogPostContent {
  id: string;
  title: string;
  // ... existing fields ...
  animations?: {
    src: string;
    title: string;
    description: string;
    section: 'approach' | 'solution' | 'results';
  }[];
}

// Example usage:
export const blogPostsContent: Record<string, BlogPostContent> = {
  '003-iam-threat-detection': {
    id: '003-iam-threat-detection',
    title: 'Advanced IAM Threat Detection Using Graph Neural Networks',
    // ... other fields ...
    animations: [
      {
        src: '/animations/GNNIAMArchitecture.mp4',
        title: 'GNN Architecture Visualization',
        description: 'Complete visualization of heterogeneous graph construction, attention mechanisms, and temporal evolution',
        section: 'approach'
      }
    ]
  }
};
```

Then render in your component:

```tsx
{post.animations?.filter(anim => anim.section === 'approach').map((anim, index) => (
  <AnimationPlayer
    key={index}
    src={anim.src}
    title={anim.title}
    description={anim.description}
    autoplay={false}
    loop={true}
    className="mb-12"
  />
))}
```

## Animation Placement Recommendations

### 1. IAM Threat Detection Post
**Animation:** `GNNIAMArchitecture.mp4`
**Best placement:** After the "Approach" section introduction, before technical details
**Purpose:** Visualize heterogeneous graph construction and GAT mechanism

```tsx
<section className="mb-12">
  <h2>Our Approach</h2>
  <p>We implemented a graph neural network-based system...</p>

  <AnimationPlayer
    src="/animations/GNNIAMArchitecture.mp4"
    title="Graph Neural Network Architecture"
    description="Visualization of heterogeneous graph construction with users, roles, permissions, and resources, followed by Graph Attention Network processing and temporal evolution analysis"
    autoplay={false}
    loop={true}
    className="my-8"
  />

  <p>As shown in the animation above, the system processes...</p>
</section>
```

### 2. Voice AI Supply Chain Post
**Animation:** `VoiceAIPipeline.mp4`
**Best placement:** In the "Solution" section, before implementation details
**Purpose:** Show end-to-end voice processing pipeline

```tsx
<section className="mb-12">
  <h2>Solution Architecture</h2>

  <AnimationPlayer
    src="/animations/VoiceAIPipeline.mp4"
    title="Voice AI Processing Pipeline"
    description="Complete pipeline from audio input through Wav2Vec 2.0 speech recognition, BERT-based NLU, dialogue management, to TTS output"
    autoplay={false}
    loop={true}
    className="my-8"
  />

  <p>The pipeline consists of four main stages...</p>
</section>
```

### 3. AI Adversarial Defense Post
**Animation:** `AdversarialDefense.mp4`
**Best placement:** After problem overview, before defense strategies
**Purpose:** Demonstrate attack types and layered defense

```tsx
<section className="mb-12">
  <h2>Layered Defense Architecture</h2>

  <AnimationPlayer
    src="/animations/AdversarialDefense.mp4"
    title="Multi-Layered AI Defense System"
    description="Visualization of attack vectors (data poisoning, evasion) and four-layer defense architecture with real-time detection"
    autoplay={false}
    loop={true}
    className="my-8"
  />

  <p>Our defense system implements four critical layers...</p>
</section>
```

### 4. Toolformer Research Post
**Animation:** `ToolformerLearning.mp4`
**Best placement:** In "Approach" section explaining self-supervised learning
**Purpose:** Visualize the self-supervised learning process

```tsx
<section className="mb-12">
  <h2>Self-Supervised Learning Approach</h2>

  <AnimationPlayer
    src="/animations/ToolformerLearning.mp4"
    title="Toolformer Self-Supervised Learning"
    description="Step-by-step visualization of how Toolformer learns to use tools: sampling API calls, executing and evaluating them, filtering beneficial ones, and fine-tuning the model"
    autoplay={false}
    loop={true}
    className="my-8"
  />

  <p>The learning process consists of three stages...</p>
</section>
```

## Advanced: Lazy Loading Animations

For better performance, especially on mobile:

```tsx
import { useState, useEffect, useRef } from 'react';
import { AnimationPlayer } from '@/components/blog/AnimationPlayer';

const LazyAnimationPlayer = ({ src, ...props }) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {shouldLoad ? (
        <AnimationPlayer src={src} {...props} />
      ) : (
        <div className="w-full h-96 bg-gray-800 rounded-xl flex items-center justify-center">
          <p className="text-gray-400">Loading animation...</p>
        </div>
      )}
    </div>
  );
};
```

## Performance Optimization

### 1. Video Compression

Reduce file size while maintaining quality:

```bash
# Install ffmpeg if not already installed
brew install ffmpeg  # macOS
sudo apt install ffmpeg  # Ubuntu

# Compress video (recommended settings)
ffmpeg -i GNNIAMArchitecture.mp4 \
       -c:v libx264 \
       -crf 23 \
       -preset medium \
       -c:a aac \
       -b:a 128k \
       GNNIAMArchitecture_compressed.mp4
```

### 2. Generate Poster Images

Create poster frames for faster initial load:

```bash
# Extract a frame at 2 seconds as poster
ffmpeg -i GNNIAMArchitecture.mp4 \
       -ss 00:00:02 \
       -vframes 1 \
       poster-gnn.jpg
```

Then use in component:
```tsx
<AnimationPlayer
  src="/animations/GNNIAMArchitecture.mp4"
  poster="/animations/poster-gnn.jpg"
  // ...
/>
```

### 3. CDN Hosting (Production)

For production, host videos on a CDN:

**AWS S3 + CloudFront:**
```bash
# Upload to S3
aws s3 cp public/animations/ s3://your-bucket/animations/ --recursive

# Use CDN URL in component
<AnimationPlayer
  src="https://cdn.yourdomain.com/animations/GNNIAMArchitecture.mp4"
  // ...
/>
```

**Or use YouTube/Vimeo:**
```tsx
<iframe
  width="100%"
  height="500"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  className="rounded-xl"
></iframe>
```

## Testing

### 1. Local Testing

```bash
# Start dev server
npm run dev

# Navigate to blog post
# Check that video loads and plays correctly
```

### 2. Check File Paths

```bash
# Verify videos are in public directory
ls -lh public/animations/

# Should show:
# GNNIAMArchitecture.mp4
# VoiceAIPipeline.mp4
# AdversarialDefense.mp4
# ToolformerLearning.mp4
```

### 3. Test on Different Devices

- Desktop (Chrome, Firefox, Safari)
- Mobile (iOS Safari, Android Chrome)
- Tablet
- Check loading times and autoplay behavior

## Troubleshooting

### Video Not Loading
1. Check file path is correct (`/animations/...`)
2. Verify file exists in `public/animations/`
3. Check console for 404 errors
4. Ensure video format is MP4 (H.264 codec)

### Performance Issues
1. Compress videos (see Performance Optimization)
2. Use lazy loading
3. Add poster images
4. Consider hosting on CDN

### Autoplay Not Working
- Most browsers block autoplay with audio
- Use `muted` attribute for autoplay:
  ```tsx
  <video autoPlay muted loop>
  ```

## Summary Checklist

- [ ] Install Manim (`pip install manim`)
- [ ] Render animations (`./render_all.sh`)
- [ ] Copy videos to `public/animations/`
- [ ] Import `AnimationPlayer` component
- [ ] Add animations to blog posts
- [ ] Test on multiple devices
- [ ] Optimize for production (compression, CDN)

## Need Help?

- Manim Documentation: https://docs.manim.community/
- React Video Best Practices: https://web.dev/fast/#optimize-your-media
- Web Performance: https://web.dev/vitals/
