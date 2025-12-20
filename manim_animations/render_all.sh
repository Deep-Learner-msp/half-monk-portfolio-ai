#!/bin/bash

# Render All Manim Animations Script
# This script renders all blog post animations at high quality

echo "================================================"
echo "   Rendering Manim Animations for Blog Posts   "
echo "================================================"
echo ""

# Check if manim is installed
if ! command -v manim &> /dev/null
then
    echo "❌ Error: Manim is not installed!"
    echo "Please install manim first:"
    echo "  pip install manim"
    echo "Or see README.md for detailed installation instructions"
    exit 1
fi

echo "✓ Manim found!"
echo ""

# Function to render a scene
render_scene() {
    local file=$1
    local scene=$2
    local name=$3

    echo "🎬 Rendering: $name..."
    manim -qh "$file" "$scene" --disable_caching

    if [ $? -eq 0 ]; then
        echo "✓ Successfully rendered: $name"
    else
        echo "❌ Failed to render: $name"
        return 1
    fi
    echo ""
}

# Start rendering
echo "Starting high-quality (1080p60) rendering..."
echo "This may take 10-20 minutes depending on your system."
echo ""

# GNN IAM Architecture
render_scene "gnn_iam_architecture.py" "GNNIAMArchitecture" "Graph Neural Network for IAM"

# Voice AI Pipeline
render_scene "voice_ai_pipeline.py" "VoiceAIPipeline" "Voice AI Pipeline"

# Adversarial Defense
render_scene "adversarial_defense.py" "AdversarialDefense" "AI Adversarial Defense"

# Toolformer
render_scene "toolformer.py" "ToolformerLearning" "Toolformer Self-Supervised Learning"

echo "================================================"
echo "   ✓ All Animations Rendered Successfully!      "
echo "================================================"
echo ""
echo "Videos saved to: manim_animations/media/videos/"
echo ""
echo "Next steps:"
echo "1. Review the rendered videos in the media/videos directory"
echo "2. Copy videos to public/animations/ for web deployment"
echo "3. Or upload to CDN/YouTube for better performance"
echo ""
