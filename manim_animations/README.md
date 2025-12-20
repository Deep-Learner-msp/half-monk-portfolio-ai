# Manim Animations for Technical Blog Posts

This directory contains Manim animation scripts for visualizing complex technical concepts in the blog posts.

## What is Manim?

Manim is a mathematical animation engine created by Grant Sanderson (3Blue1Brown) for creating explanatory videos programmatically. It allows you to create professional animations using Python code.

## Installation

### 1. Install Manim Community Edition

**macOS (recommended):**
```bash
brew install py3cairo ffmpeg
brew install --cask mactex-no-gui  # For LaTeX support (optional but recommended)
pip install manim
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install build-essential python3-dev libcairo2-dev libpango1.0-dev ffmpeg
pip install manim
```

**Windows:**
```bash
# Install chocolatey first (if not already installed)
# Then run:
choco install python ffmpeg miktex
pip install manim
```

**Using pip only (all platforms):**
```bash
pip install manim
```

### 2. Install Dependencies

```bash
cd manim_animations
pip install -r requirements.txt
```

## Available Animations

### 1. Graph Neural Network for IAM Threat Detection
**File:** `gnn_iam_architecture.py`

**Scenes:**
- `GNNIAMArchitecture` - Complete GNN architecture visualization (heterogeneous graph, GAT attention, temporal evolution)
- `AttentionMechanism` - Detailed attention mechanism visualization

**Render commands:**
```bash
# Low quality (fast, for testing)
manim -pql gnn_iam_architecture.py GNNIAMArchitecture

# High quality (production)
manim -pqh gnn_iam_architecture.py GNNIAMArchitecture

# 4K quality
manim -pqk gnn_iam_architecture.py GNNIAMArchitecture

# Render attention mechanism scene
manim -pqh gnn_iam_architecture.py AttentionMechanism
```

### 2. Voice AI Pipeline
**File:** `voice_ai_pipeline.py`

**Scenes:**
- `VoiceAIPipeline` - Complete voice AI pipeline (speech recognition, NLU, dialogue management)
- `EdgeProcessingArchitecture` - Edge vs cloud processing architecture

**Render commands:**
```bash
manim -pql voice_ai_pipeline.py VoiceAIPipeline
manim -pqh voice_ai_pipeline.py VoiceAIPipeline
manim -pqh voice_ai_pipeline.py EdgeProcessingArchitecture
```

### 3. AI Adversarial Defense
**File:** `adversarial_defense.py`

**Scenes:**
- `AdversarialDefense` - Complete defense architecture (attack types, defense layers, detection)
- `EvasionAttackVisualization` - Detailed evasion attack demonstration
- `DefensiveMechanisms` - Overview of defense techniques

**Render commands:**
```bash
manim -pql adversarial_defense.py AdversarialDefense
manim -pqh adversarial_defense.py AdversarialDefense
manim -pqh adversarial_defense.py EvasionAttackVisualization
manim -pqh adversarial_defense.py DefensiveMechanisms
```

### 4. Toolformer Self-Supervised Learning
**File:** `toolformer.py`

**Scenes:**
- `ToolformerLearning` - Self-supervised learning process (sampling, filtering, training)
- `ToolIntegrationFlow` - Multi-tool integration and zero-shot generalization

**Render commands:**
```bash
manim -pql toolformer.py ToolformerLearning
manim -pqh toolformer.py ToolformerLearning
manim -pqh toolformer.py ToolIntegrationFlow
```

## Quality Options

- `-ql` (480p15) - Low quality, fast rendering for testing
- `-qm` (720p30) - Medium quality
- `-qh` (1080p60) - High quality for production
- `-qk` (2160p60) - 4K quality

Add `-p` flag to automatically preview the video after rendering.

## Rendering All Animations

To render all animations at high quality:

```bash
# Render all main scenes
manim -pqh gnn_iam_architecture.py GNNIAMArchitecture
manim -pqh voice_ai_pipeline.py VoiceAIPipeline
manim -pqh adversarial_defense.py AdversarialDefense
manim -pqh toolformer.py ToolformerLearning
```

Or use the provided script:
```bash
chmod +x render_all.sh
./render_all.sh
```

## Output Location

Rendered videos will be saved in:
```
manim_animations/media/videos/[script_name]/[quality]/[scene_name].mp4
```

For example:
```
manim_animations/media/videos/gnn_iam_architecture/1080p60/GNNIAMArchitecture.mp4
```

## Embedding in Blog Posts

After rendering, you can embed the videos in your blog posts:

### Option 1: Direct Video Embed
```jsx
<video controls width="100%" className="rounded-lg">
  <source src="/animations/GNNIAMArchitecture.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Option 2: Convert to GIF (for lighter embedding)
```bash
# Using ffmpeg
ffmpeg -i media/videos/gnn_iam_architecture/1080p60/GNNIAMArchitecture.mp4 \
       -vf "fps=15,scale=800:-1:flags=lanczos" \
       -loop 0 \
       output.gif
```

### Option 3: Upload to CDN/YouTube
For better performance, upload videos to:
- YouTube (embed as iframe)
- AWS S3 / Cloudflare R2
- Vimeo

## Customization

Each scene can be customized by editing the Python files:

- **Colors**: Modify color constants (BLUE, GREEN, RED, etc.)
- **Timing**: Adjust `run_time` parameters
- **Content**: Add or remove elements
- **Camera**: Change camera angles and zoom levels

Example customization:
```python
# Change color scheme
original_boundary = Line(color=GREEN)  # Change to color=PURPLE

# Adjust animation speed
self.play(Create(graph), run_time=3)  # Change run_time from 2 to 3

# Add custom elements
custom_text = Text("Your custom label", font_size=24, color=YELLOW)
self.play(Write(custom_text))
```

## Troubleshooting

### LaTeX Not Found
If you see LaTeX errors:
```bash
# macOS
brew install --cask mactex-no-gui

# Ubuntu
sudo apt-get install texlive-full
```

### FFmpeg Issues
```bash
# Reinstall ffmpeg
brew reinstall ffmpeg  # macOS
sudo apt-get reinstall ffmpeg  # Ubuntu
```

### Slow Rendering
- Use `-ql` for testing (low quality, fast)
- Reduce `run_time` parameters
- Simplify complex scenes
- Close other applications

### Memory Issues
For complex scenes with many objects:
```bash
# Increase Python memory limit
ulimit -s 65536
```

## Performance Tips

1. **Test with low quality first**: Always use `-ql` when developing/testing
2. **Render specific scenes**: Don't render all scenes if you only need one
3. **Use scene caching**: Manim caches partial results to speed up re-renders
4. **Break into smaller scenes**: Split complex animations into multiple scenes

## Resources

- [Manim Community Documentation](https://docs.manim.community/)
- [Manim Community Discord](https://discord.gg/mMRrZQW)
- [Example Gallery](https://docs.manim.community/en/stable/examples.html)
- [3Blue1Brown Videos](https://www.youtube.com/c/3blue1brown) - Original inspiration

## Contributing

To add new animations:

1. Create a new Python file in this directory
2. Define your scene class inheriting from `Scene`
3. Implement the `construct()` method
4. Test with `-ql` quality first
5. Update this README with rendering instructions

## License

These animation scripts are part of the MSP Raja portfolio project.
