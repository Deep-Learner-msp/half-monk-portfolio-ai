"""
Voice-Enabled AI Pipeline Animation for Supply Chain Operations
Visualizes speech recognition, NLU processing, and dialogue management

To render:
manim -pql voice_ai_pipeline.py VoiceAIPipeline
manim -pqh voice_ai_pipeline.py VoiceAIPipeline  # High quality
"""

from manim import *
import numpy as np

class VoiceAIPipeline(Scene):
    def construct(self):
        # Title
        title = Text("Voice AI Pipeline for Logistics Operations", font_size=36)
        title.to_edge(UP)
        self.play(Write(title))
        self.wait()

        # Part 1: Audio Input & Speech Recognition
        subtitle1 = Text("1. Audio Input & Speech Recognition (Wav2Vec 2.0)", font_size=24)
        subtitle1.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle1))

        # Audio waveform
        waveform = self.create_waveform()
        waveform.shift(UP)
        self.play(Create(waveform), run_time=2)

        # Show noise environment
        noise_text = Text("Warehouse Environment: 85dB+ noise", font_size=18, color=YELLOW)
        noise_text.next_to(waveform, DOWN, buff=0.3)
        self.play(FadeIn(noise_text))

        # Noise cancellation
        clean_waveform = self.create_clean_waveform()
        clean_waveform.shift(DOWN * 0.5)

        self.play(
            Transform(waveform, clean_waveform),
            noise_text.animate.set_color(GREEN).set_text("Noise Cancelled"),
            run_time=1.5
        )
        self.wait()

        # Wav2Vec 2.0 Processing
        wav2vec_box = Rectangle(height=1, width=4, color=BLUE, fill_opacity=0.3)
        wav2vec_label = Text("Wav2Vec 2.0\nASR Model", font_size=20)
        wav2vec_label.move_to(wav2vec_box.get_center())
        wav2vec_group = VGroup(wav2vec_box, wav2vec_label)
        wav2vec_group.next_to(waveform, DOWN, buff=0.8)

        self.play(FadeIn(wav2vec_group))

        # Text output
        text_output = Text('"Where is shipment ABC123?"', font_size=24, color=GREEN)
        text_output.next_to(wav2vec_group, DOWN, buff=0.5)

        arrow1 = Arrow(waveform.get_bottom(), wav2vec_group.get_top(), buff=0.1, color=YELLOW)
        arrow2 = Arrow(wav2vec_group.get_bottom(), text_output.get_top(), buff=0.1, color=YELLOW)

        self.play(Create(arrow1))
        self.play(Create(arrow2), Write(text_output))
        self.wait(2)

        # Part 2: NLU Processing
        self.play(
            FadeOut(waveform),
            FadeOut(noise_text),
            FadeOut(wav2vec_group),
            FadeOut(arrow1),
            FadeOut(subtitle1)
        )

        subtitle2 = Text("2. Natural Language Understanding (BERT)", font_size=24)
        subtitle2.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle2))

        # Move text up
        self.play(text_output.animate.shift(UP * 2), arrow2.animate.shift(UP * 2))

        # BERT Processing
        bert_box = Rectangle(height=2, width=5, color=PURPLE, fill_opacity=0.2)
        bert_label = Text("BERT Fine-tuned\nIntent Classifier", font_size=20)
        bert_label.move_to(bert_box.get_center())
        bert_group = VGroup(bert_box, bert_label)
        bert_group.next_to(text_output, DOWN, buff=1)

        self.play(FadeIn(bert_group))

        # Intent classification
        intent_output = VGroup(
            Text("Intent: SHIPMENT_TRACKING", font_size=20, color=YELLOW),
            Text("Confidence: 98.3%", font_size=18, color=GREEN),
        ).arrange(DOWN, buff=0.2)
        intent_output.next_to(bert_group, RIGHT, buff=1)

        # Entity extraction
        entity_output = VGroup(
            Text("Entities:", font_size=20, color=YELLOW),
            Text("• Shipment ID: ABC123", font_size=16, color=GREEN),
            Text("• Action: query_location", font_size=16, color=GREEN),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.2)
        entity_output.next_to(intent_output, DOWN, buff=0.5)

        arrow3 = Arrow(text_output.get_bottom(), bert_group.get_top(), buff=0.1, color=YELLOW)
        arrow4 = Arrow(bert_group.get_right(), intent_output.get_left(), buff=0.1, color=YELLOW)

        self.play(Create(arrow3))
        self.play(
            Create(arrow4),
            Write(intent_output),
            Write(entity_output),
            run_time=2
        )
        self.wait(2)

        # Part 3: Dialogue Management & Action
        self.play(
            FadeOut(text_output),
            FadeOut(arrow2),
            FadeOut(arrow3),
            FadeOut(bert_group),
            FadeOut(subtitle2)
        )

        subtitle3 = Text("3. Dialogue Manager & Action Execution", font_size=24)
        subtitle3.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle3))

        # Dialogue manager
        dialogue_box = Rectangle(height=1.5, width=4.5, color=ORANGE, fill_opacity=0.2)
        dialogue_label = Text("Dialogue Manager\n(State Tracking)", font_size=18)
        dialogue_label.move_to(dialogue_box.get_center())
        dialogue_group = VGroup(dialogue_box, dialogue_label)
        dialogue_group.shift(UP * 1.5 + LEFT * 2)

        self.play(
            intent_output.animate.scale(0.7).move_to(LEFT * 4 + UP * 2),
            entity_output.animate.scale(0.7).move_to(LEFT * 4 + UP * 0.5),
            FadeIn(dialogue_group)
        )

        # Backend systems
        tms_box = Rectangle(height=1, width=3, color=BLUE, fill_opacity=0.3)
        tms_label = Text("TMS API", font_size=18)
        tms_label.move_to(tms_box.get_center())
        tms_group = VGroup(tms_box, tms_label)
        tms_group.next_to(dialogue_group, RIGHT, buff=2)

        wms_box = Rectangle(height=1, width=3, color=GREEN, fill_opacity=0.3)
        wms_label = Text("WMS", font_size=18)
        wms_label.move_to(wms_box.get_center())
        wms_group = VGroup(wms_box, wms_label)
        wms_group.next_to(tms_group, DOWN, buff=0.5)

        self.play(FadeIn(tms_group), FadeIn(wms_group))

        # Action execution
        arrow5 = Arrow(dialogue_group.get_right(), tms_group.get_left(), buff=0.1, color=YELLOW)
        query_label = Text("Query", font_size=14, color=YELLOW)
        query_label.next_to(arrow5, UP, buff=0.1)

        self.play(Create(arrow5), Write(query_label))

        # Response
        response_arrow = Arrow(tms_group.get_left(), dialogue_group.get_right(), buff=0.1, color=GREEN)
        response_label = Text("Location: Dock 7", font_size=14, color=GREEN)
        response_label.next_to(response_arrow, DOWN, buff=0.1)

        self.play(Create(response_arrow), Write(response_label))
        self.wait()

        # TTS output
        tts_box = Rectangle(height=1, width=3.5, color=RED, fill_opacity=0.2)
        tts_label = Text("TTS\nSynthesis", font_size=18)
        tts_label.move_to(tts_box.get_center())
        tts_group = VGroup(tts_box, tts_label)
        tts_group.next_to(dialogue_group, DOWN, buff=1.5)

        final_arrow = Arrow(dialogue_group.get_bottom(), tts_group.get_top(), buff=0.1, color=GREEN)

        self.play(Create(final_arrow), FadeIn(tts_group))

        # Final output
        final_output = Text('"Shipment ABC123 is currently at Dock 7"', font_size=20, color=GREEN)
        final_output.next_to(tts_group, DOWN, buff=0.5)

        self.play(Write(final_output))
        self.wait(2)

        # Performance metrics
        self.play(
            FadeOut(VGroup(
                intent_output, entity_output, dialogue_group, tms_group, wms_group,
                arrow5, query_label, response_arrow, response_label, tts_group,
                final_arrow, final_output, subtitle3, arrow4
            ))
        )

        metrics_title = Text("Performance Metrics", font_size=32)
        metrics_title.next_to(title, DOWN, buff=1)

        metrics = VGroup(
            VGroup(
                Text("Task Completion", font_size=24, color=WHITE),
                Text("45% Faster", font_size=32, color=GREEN, weight=BOLD),
                Text("42s vs 77s per task", font_size=18, color=GRAY)
            ).arrange(DOWN, buff=0.2),
            VGroup(
                Text("Speech Accuracy", font_size=24, color=WHITE),
                Text("94.7%", font_size=32, color=GREEN, weight=BOLD),
                Text("in 85dB+ noise", font_size=18, color=GRAY)
            ).arrange(DOWN, buff=0.2),
            VGroup(
                Text("System Latency", font_size=24, color=WHITE),
                Text("<200ms", font_size=32, color=GREEN, weight=BOLD),
                Text("end-to-end response", font_size=18, color=GRAY)
            ).arrange(DOWN, buff=0.2),
        ).arrange(RIGHT, buff=1.5)
        metrics.next_to(metrics_title, DOWN, buff=1)

        self.play(Write(metrics_title))
        self.play(
            LaggedStart(*[FadeIn(metric) for metric in metrics], lag_ratio=0.3),
            run_time=2
        )
        self.wait(3)

    def create_waveform(self):
        """Create a noisy audio waveform"""
        wave = VMobject(color=BLUE)
        wave.set_points_smoothly([
            np.array([x - 5, 0.5 * np.sin(2 * x) + 0.2 * np.sin(7 * x) + 0.1 * np.random.randn(), 0])
            for x in np.linspace(0, 10, 200)
        ])
        return wave

    def create_clean_waveform(self):
        """Create a clean audio waveform"""
        wave = VMobject(color=GREEN)
        wave.set_points_smoothly([
            np.array([x - 5, 0.5 * np.sin(2 * x), 0])
            for x in np.linspace(0, 10, 200)
        ])
        wave.shift(DOWN * 0.5)
        return wave


class EdgeProcessingArchitecture(Scene):
    """Detailed edge vs cloud processing architecture"""

    def construct(self):
        title = Text("Edge Processing Architecture", font_size=40)
        title.to_edge(UP)
        self.play(Write(title))

        # Edge device (Raspberry Pi)
        edge_device = VGroup(
            Rectangle(height=2, width=2.5, color=BLUE, fill_opacity=0.3),
            Text("Raspberry Pi 4", font_size=20, color=WHITE),
            Text("Edge Device", font_size=16, color=GRAY)
        ).arrange(DOWN, buff=0.2)
        edge_device.shift(LEFT * 4)

        # Edge processing components
        edge_components = VGroup(
            Text("• Wake Word", font_size=14),
            Text("• Noise Cancel", font_size=14),
            Text("• VAD", font_size=14),
            Text("• Feature Extract", font_size=14),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.15)
        edge_components.scale(0.8)
        edge_components.next_to(edge_device, DOWN, buff=0.5)

        # Cloud processing
        cloud = VGroup(
            Ellipse(width=3, height=2, color=GREEN, fill_opacity=0.2),
            Text("Cloud Backend", font_size=20, color=WHITE),
            Text("Kubernetes", font_size=14, color=GRAY)
        ).arrange(DOWN, buff=0.2)
        cloud.shift(RIGHT * 4)

        # Cloud components
        cloud_components = VGroup(
            Text("• ASR (Wav2Vec)", font_size=14),
            Text("• NLU (BERT)", font_size=14),
            Text("• Dialogue Mgmt", font_size=14),
            Text("• TTS", font_size=14),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.15)
        cloud_components.scale(0.8)
        cloud_components.next_to(cloud, DOWN, buff=0.5)

        # Latency indicators
        latency_edge = Text("Latency: <50ms", font_size=16, color=GREEN)
        latency_edge.next_to(edge_components, DOWN, buff=0.3)

        latency_cloud = Text("Latency: <200ms", font_size=16, color=YELLOW)
        latency_cloud.next_to(cloud_components, DOWN, buff=0.3)

        # Draw architecture
        self.play(
            FadeIn(edge_device),
            FadeIn(cloud),
            run_time=1
        )

        self.play(
            Write(edge_components),
            Write(cloud_components),
            run_time=2
        )

        self.play(
            Write(latency_edge),
            Write(latency_cloud)
        )

        # Show data flow
        arrow_to_cloud = Arrow(edge_device.get_right(), cloud.get_left(), buff=0.3, color=YELLOW)
        arrow_label = Text("Audio Features", font_size=14, color=YELLOW)
        arrow_label.next_to(arrow_to_cloud, UP, buff=0.1)

        arrow_from_cloud = Arrow(cloud.get_left(), edge_device.get_right(), buff=0.3, color=GREEN)
        response_label = Text("Response", font_size=14, color=GREEN)
        response_label.next_to(arrow_from_cloud, DOWN, buff=0.1)

        self.play(
            Create(arrow_to_cloud),
            Write(arrow_label)
        )

        self.play(
            Create(arrow_from_cloud),
            Write(response_label)
        )

        self.wait(3)
