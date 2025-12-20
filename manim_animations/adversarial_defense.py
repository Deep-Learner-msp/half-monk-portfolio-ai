"""
AI Adversarial Defense Animation
Visualizes attack types, defense mechanisms, and layered security

To render:
manim -pql adversarial_defense.py AdversarialDefense
manim -pqh adversarial_defense.py AdversarialDefense  # High quality
"""

from manim import *
import numpy as np

class AdversarialDefense(Scene):
    def construct(self):
        # Title
        title = Text("Defending AI Systems Against Adversarial Attacks", font_size=36)
        title.to_edge(UP)
        self.play(Write(title))
        self.wait()

        # Part 1: Attack Types
        subtitle1 = Text("Attack Vectors", font_size=28)
        subtitle1.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle1))

        # Data Poisoning Attack
        clean_data = VGroup(*[
            Dot(point=np.array([np.random.randn(), np.random.randn(), 0]) + LEFT * 2 + UP,
                color=BLUE, radius=0.08)
            for _ in range(30)
        ])

        poisoned_data = VGroup(*[
            Dot(point=np.array([np.random.randn(), np.random.randn(), 0]) + LEFT * 2 + DOWN,
                color=RED, radius=0.08)
            for _ in range(5)
        ])

        data_label = Text("Training Data", font_size=20)
        data_label.next_to(clean_data, LEFT, buff=0.5)

        self.play(
            LaggedStart(*[FadeIn(dot) for dot in clean_data], lag_ratio=0.02),
            Write(data_label),
            run_time=2
        )

        poison_label = Text("Poisoned Samples", font_size=18, color=RED)
        poison_label.next_to(poisoned_data, LEFT, buff=0.5)

        self.play(
            LaggedStart(*[FadeIn(dot) for dot in poisoned_data], lag_ratio=0.1),
            Write(poison_label),
            run_time=1.5
        )

        # Show model boundary shift
        original_boundary = Line(
            start=LEFT * 2 + UP * 1.5,
            end=LEFT * 2 + DOWN * 1.5,
            color=GREEN
        )

        shifted_boundary = Line(
            start=LEFT * 1 + UP * 1.5,
            end=LEFT * 1 + DOWN * 1.5,
            color=RED,
            stroke_width=3
        )

        self.play(Create(original_boundary))
        self.play(
            Transform(original_boundary, shifted_boundary),
            run_time=2
        )

        attack_warning = Text("Decision Boundary\nCorrupted!", font_size=20, color=RED)
        attack_warning.next_to(shifted_boundary, RIGHT, buff=0.5)
        self.play(Write(attack_warning))
        self.wait(2)

        # Part 2: Defense Layers
        self.play(
            FadeOut(VGroup(
                clean_data, poisoned_data, data_label, poison_label,
                original_boundary, attack_warning, subtitle1
            ))
        )

        subtitle2 = Text("Layered Defense Architecture", font_size=28)
        subtitle2.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle2))

        # Create defense layers
        layers = []
        layer_names = [
            ("Input Layer", "Sanitization\n& Validation", TEAL),
            ("Detection Layer", "Anomaly\nDetection", PURPLE),
            ("Model Layer", "Ensemble\nDefense", BLUE),
            ("Output Layer", "Validation\n& Monitoring", GREEN)
        ]

        for i, (name, desc, color) in enumerate(layer_names):
            layer_box = Rectangle(
                height=1.5,
                width=2.5,
                color=color,
                fill_opacity=0.3,
                stroke_width=3
            )
            layer_title = Text(name, font_size=18, color=WHITE)
            layer_desc = Text(desc, font_size=14, color=GRAY)
            layer_group = VGroup(layer_box, layer_title, layer_desc)
            layer_group.arrange(DOWN, buff=0.15)
            layers.append(layer_group)

        layers_vgroup = VGroup(*layers).arrange(RIGHT, buff=0.5)

        self.play(
            LaggedStart(*[FadeIn(layer) for layer in layers], lag_ratio=0.2),
            run_time=3
        )

        # Show data flow through layers
        arrows = []
        for i in range(len(layers) - 1):
            arrow = Arrow(
                layers[i].get_right(),
                layers[i + 1].get_left(),
                buff=0.1,
                color=YELLOW,
                stroke_width=3
            )
            arrows.append(arrow)

        self.play(
            LaggedStart(*[Create(arrow) for arrow in arrows], lag_ratio=0.3),
            run_time=2
        )
        self.wait(2)

        # Part 3: Attack Detection
        self.play(
            FadeOut(subtitle2),
            layers_vgroup.animate.scale(0.6).to_edge(UP).shift(DOWN * 1.5),
            FadeOut(VGroup(*arrows))
        )

        subtitle3 = Text("Real-time Attack Detection", font_size=28)
        subtitle3.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle3))

        # Normal input
        normal_input = Rectangle(height=1, width=3, color=GREEN, fill_opacity=0.2)
        normal_label = Text("Normal Input", font_size=18, color=GREEN)
        normal_label.move_to(normal_input.get_center())
        normal_group = VGroup(normal_input, normal_label)
        normal_group.shift(LEFT * 4 + UP * 0.5)

        # Adversarial input
        adv_input = Rectangle(height=1, width=3, color=RED, fill_opacity=0.2)
        adv_label = Text("Adversarial Input", font_size=18, color=RED)
        adv_label.move_to(adv_input.get_center())
        adv_group = VGroup(adv_input, adv_label)
        adv_group.shift(LEFT * 4 + DOWN * 1.5)

        self.play(FadeIn(normal_group), FadeIn(adv_group))

        # Detector
        detector = Rectangle(height=2, width=2.5, color=PURPLE, fill_opacity=0.3)
        detector_label = Text("Anomaly\nDetector", font_size=18)
        detector_label.move_to(detector.get_center())
        detector_group = VGroup(detector, detector_label)

        self.play(FadeIn(detector_group))

        # Process normal input
        normal_arrow = Arrow(normal_group.get_right(), detector_group.get_left(), buff=0.1, color=GREEN)
        self.play(Create(normal_arrow))

        normal_result = Text("✓ Pass", font_size=24, color=GREEN)
        normal_result.next_to(detector_group, RIGHT, buff=1)
        self.play(Write(normal_result))

        self.wait()

        # Process adversarial input
        adv_arrow = Arrow(adv_group.get_right(), detector_group.get_left(), buff=0.1, color=RED)
        self.play(Create(adv_arrow))

        adv_result = Text("⚠ BLOCKED", font_size=24, color=RED, weight=BOLD)
        adv_result.next_to(detector_group, RIGHT, buff=1).shift(DOWN * 1.5)

        alert_box = Rectangle(height=0.8, width=2.5, color=RED, stroke_width=3)
        alert_box.move_to(adv_result.get_center())

        self.play(
            Write(adv_result),
            Create(alert_box),
            Flash(alert_box, color=RED, line_length=0.3, num_lines=12),
            run_time=2
        )
        self.wait(2)

        # Part 4: Defense Results
        self.play(
            FadeOut(VGroup(
                normal_group, adv_group, detector_group,
                normal_arrow, adv_arrow, normal_result, adv_result, alert_box,
                subtitle3, layers_vgroup
            ))
        )

        results_title = Text("Defense Effectiveness", font_size=32)
        results_title.next_to(title, DOWN, buff=1)
        self.play(Write(results_title))

        # Metrics with visual bars
        metrics_data = [
            ("Data Poisoning\nDetection", 0.94, GREEN),
            ("Evasion Attack\nPrevention", 0.89, GREEN),
            ("Prompt Injection\nBlocking", 0.96, GREEN),
        ]

        metrics = VGroup()
        for i, (label, value, color) in enumerate(metrics_data):
            metric_label = Text(label, font_size=18, color=WHITE)

            bar_bg = Rectangle(height=0.5, width=4, color=GRAY, fill_opacity=0.3)
            bar_fill = Rectangle(height=0.5, width=4 * value, color=color, fill_opacity=0.7)
            bar_fill.align_to(bar_bg, LEFT)

            percentage = Text(f"{int(value * 100)}%", font_size=20, color=color, weight=BOLD)
            percentage.next_to(bar_bg, RIGHT, buff=0.3)

            metric_group = VGroup(metric_label, bar_bg, bar_fill, percentage)
            metric_group.arrange(RIGHT, buff=0.3)
            metrics.add(metric_group)

        metrics.arrange(DOWN, buff=0.8, aligned_edge=LEFT)
        metrics.next_to(results_title, DOWN, buff=1)

        # Animate metrics
        for metric in metrics:
            self.play(
                FadeIn(metric[0]),  # label
                Create(metric[1]),  # background bar
                run_time=0.5
            )
            self.play(
                GrowFromEdge(metric[2], LEFT),  # fill bar
                Write(metric[3]),  # percentage
                run_time=1
            )

        self.wait(3)


class EvasionAttackVisualization(Scene):
    """Detailed visualization of evasion attack and defense"""

    def construct(self):
        title = Text("Adversarial Evasion Attack", font_size=40)
        title.to_edge(UP)
        self.play(Write(title))

        # Original image (represented as a grid)
        original = Square(side_length=2, color=BLUE, fill_opacity=0.5)
        original_label = Text("Original\nImage", font_size=18)
        original_label.next_to(original, DOWN, buff=0.3)
        original_group = VGroup(original, original_label)
        original_group.shift(LEFT * 4)

        # Add some visual pattern
        pattern = VGroup(*[
            Square(side_length=0.2, color=BLUE, fill_opacity=0.3)
            for i in range(10) for j in range(10)
        ]).arrange_in_grid(rows=10, cols=10, buff=0)
        pattern.move_to(original.get_center())

        self.play(Create(original), Write(original_label))
        self.play(Create(pattern))

        # Model prediction
        model_box = Rectangle(height=1.5, width=2, color=GREEN, fill_opacity=0.2)
        model_label = Text("Model", font_size=18)
        model_label.move_to(model_box.get_center())
        model_group = VGroup(model_box, model_label)

        arrow1 = Arrow(original.get_right(), model_group.get_left(), buff=0.3, color=WHITE)

        pred1 = Text("Prediction:\nCat (99.8%)", font_size=18, color=GREEN)
        pred1.next_to(model_group, RIGHT, buff=0.5)

        self.play(FadeIn(model_group), Create(arrow1))
        self.play(Write(pred1))
        self.wait()

        # Add imperceptible perturbation
        self.play(
            FadeOut(arrow1),
            FadeOut(pred1)
        )

        perturbation_label = Text("+ Imperceptible Perturbation", font_size=18, color=RED)
        perturbation_label.next_to(original_group, DOWN, buff=1)

        # Show perturbation (subtle color change)
        perturbed_pattern = pattern.copy()
        for square in perturbed_pattern:
            square.set_fill(color=RED, opacity=0.1)

        self.play(
            Write(perturbation_label),
            Transform(pattern, perturbed_pattern),
            original.animate.set_color(interpolate_color(BLUE, RED, 0.2)),
            run_time=2
        )

        # New prediction with adversarial input
        arrow2 = Arrow(original.get_right(), model_group.get_left(), buff=0.3, color=RED)
        pred2 = Text("Prediction:\nDog (95.3%)", font_size=18, color=RED, weight=BOLD)
        pred2.next_to(model_group, RIGHT, buff=0.5)

        self.play(Create(arrow2))
        self.play(Write(pred2))

        # Warning
        warning = Text("Model Fooled!", font_size=24, color=RED, weight=BOLD)
        warning.to_edge(DOWN)
        self.play(Flash(warning, color=RED), Write(warning))

        self.wait(3)


class DefensiveMechanisms(Scene):
    """Show different defensive techniques"""

    def construct(self):
        title = Text("Defense Mechanisms", font_size=40)
        title.to_edge(UP)
        self.play(Write(title))

        # Defense techniques
        techniques = [
            ("Adversarial Training", "Train with adversarial\nexamples", BLUE),
            ("Input Preprocessing", "Denoise and compress\ninputs", GREEN),
            ("Ensemble Defense", "Multiple model\nconsensus", PURPLE),
            ("Gradient Masking", "Hide gradients from\nattacker", ORANGE),
        ]

        technique_groups = VGroup()
        for name, desc, color in techniques:
            box = Rectangle(height=2, width=2.5, color=color, fill_opacity=0.2)
            title_text = Text(name, font_size=16, color=WHITE)
            desc_text = Text(desc, font_size=12, color=GRAY)

            group = VGroup(box, title_text, desc_text)
            group.arrange(DOWN, buff=0.2)
            technique_groups.add(group)

        technique_groups.arrange_in_grid(rows=2, cols=2, buff=0.8)

        self.play(
            LaggedStart(*[FadeIn(tech) for tech in technique_groups], lag_ratio=0.2),
            run_time=3
        )

        # Effectiveness indicators
        for i, tech in enumerate(technique_groups):
            effectiveness = [0.85, 0.78, 0.92, 0.70][i]
            check = Text(f"✓ {int(effectiveness*100)}%", font_size=14, color=GREEN)
            check.next_to(tech, DOWN, buff=0.2)
            self.play(Write(check), run_time=0.5)

        self.wait(3)
