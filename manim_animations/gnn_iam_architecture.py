"""
Graph Neural Network Architecture Animation for IAM Threat Detection
Renders heterogeneous graph construction and GAT attention mechanism

To render:
manim -pql gnn_iam_architecture.py GNNIAMArchitecture
manim -pqh gnn_iam_architecture.py GNNIAMArchitecture  # High quality
"""

from manim import *
import numpy as np

class GNNIAMArchitecture(Scene):
    def construct(self):
        # Title
        title = Text("IAM Threat Detection with Graph Neural Networks", font_size=36)
        title.to_edge(UP)
        self.play(Write(title))
        self.wait()

        # Part 1: Heterogeneous Graph Construction
        subtitle1 = Text("1. Heterogeneous Graph Construction", font_size=28)
        subtitle1.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle1))

        # Create nodes for different entity types
        users = VGroup(*[Circle(radius=0.3, color=BLUE, fill_opacity=0.5) for _ in range(4)])
        user_labels = VGroup(*[Text(f"U{i+1}", font_size=20) for i in range(4)])

        roles = VGroup(*[Circle(radius=0.3, color=GREEN, fill_opacity=0.5) for _ in range(3)])
        role_labels = VGroup(*[Text(f"R{i+1}", font_size=20) for i in range(3)])

        resources = VGroup(*[Circle(radius=0.3, color=RED, fill_opacity=0.5) for _ in range(3)])
        resource_labels = VGroup(*[Text(f"RS{i+1}", font_size=20) for i in range(3)])

        # Position nodes
        users.arrange(RIGHT, buff=0.5).shift(UP * 2 + LEFT * 3)
        roles.arrange(RIGHT, buff=0.5).shift(UP * 0.5 + LEFT * 2.5)
        resources.arrange(RIGHT, buff=0.5).shift(DOWN * 1.5 + LEFT * 2.5)

        for i, (user, label) in enumerate(zip(users, user_labels)):
            label.move_to(user.get_center())

        for i, (role, label) in enumerate(zip(roles, role_labels)):
            label.move_to(role.get_center())

        for i, (resource, label) in enumerate(zip(resources, resource_labels)):
            label.move_to(resource.get_center())

        # Create edges
        edges = VGroup()

        # User -> Role edges
        edges.add(Arrow(users[0].get_bottom(), roles[0].get_top(), buff=0.3, color=YELLOW))
        edges.add(Arrow(users[1].get_bottom(), roles[0].get_top(), buff=0.3, color=YELLOW))
        edges.add(Arrow(users[1].get_bottom(), roles[1].get_top(), buff=0.3, color=YELLOW))
        edges.add(Arrow(users[2].get_bottom(), roles[1].get_top(), buff=0.3, color=YELLOW))
        edges.add(Arrow(users[3].get_bottom(), roles[2].get_top(), buff=0.3, color=YELLOW))

        # Role -> Resource edges
        edges.add(Arrow(roles[0].get_bottom(), resources[0].get_top(), buff=0.3, color=ORANGE))
        edges.add(Arrow(roles[0].get_bottom(), resources[1].get_top(), buff=0.3, color=ORANGE))
        edges.add(Arrow(roles[1].get_bottom(), resources[1].get_top(), buff=0.3, color=ORANGE))
        edges.add(Arrow(roles[1].get_bottom(), resources[2].get_top(), buff=0.3, color=ORANGE))
        edges.add(Arrow(roles[2].get_bottom(), resources[2].get_top(), buff=0.3, color=ORANGE))

        # Animate graph construction
        self.play(
            LaggedStart(
                *[Create(user) for user in users],
                *[Write(label) for label in user_labels],
                lag_ratio=0.1
            ),
            run_time=2
        )

        self.play(
            LaggedStart(
                *[Create(role) for role in roles],
                *[Write(label) for label in role_labels],
                lag_ratio=0.1
            ),
            run_time=1.5
        )

        self.play(
            LaggedStart(
                *[Create(resource) for resource in resources],
                *[Write(label) for label in resource_labels],
                lag_ratio=0.1
            ),
            run_time=1.5
        )

        self.play(
            LaggedStart(*[Create(edge) for edge in edges], lag_ratio=0.05),
            run_time=2
        )

        # Add legend
        legend = VGroup(
            VGroup(Circle(radius=0.15, color=BLUE, fill_opacity=0.5), Text("Users", font_size=18)).arrange(RIGHT, buff=0.2),
            VGroup(Circle(radius=0.15, color=GREEN, fill_opacity=0.5), Text("Roles", font_size=18)).arrange(RIGHT, buff=0.2),
            VGroup(Circle(radius=0.15, color=RED, fill_opacity=0.5), Text("Resources", font_size=18)).arrange(RIGHT, buff=0.2),
        ).arrange(DOWN, buff=0.3, aligned_edge=LEFT).scale(0.7)
        legend.to_corner(DR)

        self.play(FadeIn(legend))
        self.wait(2)

        # Part 2: Graph Attention Network
        self.play(
            FadeOut(subtitle1),
            FadeOut(legend),
            VGroup(users, user_labels, roles, role_labels, resources, resource_labels, edges).animate.scale(0.7).shift(LEFT * 2)
        )

        subtitle2 = Text("2. Graph Attention Network (GAT)", font_size=28)
        subtitle2.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle2))

        # Highlight attention mechanism on one user
        focus_user = users[1]

        # Create attention visualization
        attention_circle = Circle(radius=0.5, color=YELLOW, stroke_width=3)
        attention_circle.move_to(focus_user.get_center())

        self.play(Create(attention_circle))

        # Show attention weights on connected edges
        attention_scores = VGroup()
        attention_values = [0.45, 0.35, 0.20]

        for i, edge in enumerate([edges[1], edges[2]]):
            score_text = Text(f"α={attention_values[i]:.2f}", font_size=16, color=YELLOW)
            score_text.next_to(edge, RIGHT, buff=0.1)
            attention_scores.add(score_text)

        self.play(Write(attention_scores))
        self.wait(1)

        # Show aggregation
        aggregation_text = Text("Aggregate: h' = Σ(α_ij · h_j)", font_size=20, color=YELLOW)
        aggregation_text.to_edge(RIGHT).shift(UP)
        self.play(Write(aggregation_text))

        # Animate attention flow
        for i in range(3):
            self.play(
                attention_circle.animate.set_color(YELLOW if i % 2 == 0 else ORANGE),
                rate_func=there_and_back,
                run_time=0.5
            )

        self.wait(2)

        # Part 3: Temporal Evolution
        self.play(
            FadeOut(attention_circle),
            FadeOut(attention_scores),
            FadeOut(aggregation_text),
            FadeOut(subtitle2)
        )

        subtitle3 = Text("3. Temporal Graph Network (TGN)", font_size=28)
        subtitle3.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle3))

        # Create timeline
        timeline = Line(LEFT * 5, RIGHT * 5, color=WHITE).shift(DOWN * 2.5)
        self.play(Create(timeline))

        # Time points
        time_points = VGroup(*[
            VGroup(
                Dot(point=timeline.point_from_proportion(i/6), radius=0.1, color=BLUE),
                Text(f"t{i}", font_size=16).next_to(timeline.point_from_proportion(i/6), DOWN, buff=0.3)
            )
            for i in range(7)
        ])

        self.play(LaggedStart(*[FadeIn(tp) for tp in time_points], lag_ratio=0.2))

        # Show behavior evolution
        behavior_path = VMobject(color=YELLOW, stroke_width=3)
        behavior_path.set_points_smoothly([
            timeline.point_from_proportion(i/6) + UP * (1 + 0.3 * np.sin(i))
            for i in range(7)
        ])

        self.play(Create(behavior_path), run_time=3)

        # Anomaly detection
        anomaly_point = Dot(
            point=timeline.point_from_proportion(5/6) + UP * (1 + 0.3 * np.sin(5)),
            radius=0.2,
            color=RED
        )
        anomaly_label = Text("Anomaly\nDetected!", font_size=20, color=RED)
        anomaly_label.next_to(anomaly_point, UP, buff=0.3)

        self.play(
            Flash(anomaly_point, color=RED, flash_radius=0.5),
            FadeIn(anomaly_point),
            Write(anomaly_label)
        )

        self.wait(2)

        # Final metrics
        self.play(
            FadeOut(VGroup(users, user_labels, roles, role_labels, resources, resource_labels, edges)),
            FadeOut(timeline),
            FadeOut(time_points),
            FadeOut(behavior_path),
            FadeOut(anomaly_point),
            FadeOut(anomaly_label),
            FadeOut(subtitle3)
        )

        metrics = VGroup(
            Text("Detection Results:", font_size=32, color=WHITE),
            Text("• F1 Score: 92%", font_size=24, color=GREEN),
            Text("• False Positives: ↓88%", font_size=24, color=GREEN),
            Text("• Mean Time to Detect: 2.3 hours", font_size=24, color=GREEN),
            Text("• Novel Threats: 15 detected", font_size=24, color=GREEN),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.4)

        self.play(Write(metrics), run_time=3)
        self.wait(3)


class AttentionMechanism(Scene):
    """Detailed attention mechanism visualization"""

    def construct(self):
        title = Text("Graph Attention Mechanism", font_size=40)
        title.to_edge(UP)
        self.play(Write(title))

        # Source node
        source = Circle(radius=0.4, color=BLUE, fill_opacity=0.7)
        source_label = Text("Node i", font_size=24)
        source_label.move_to(source.get_center())
        source_group = VGroup(source, source_label)
        source_group.shift(LEFT * 4)

        # Neighbor nodes
        neighbors = VGroup(*[
            Circle(radius=0.3, color=GREEN, fill_opacity=0.5)
            for _ in range(4)
        ])
        neighbor_labels = VGroup(*[Text(f"N{j+1}", font_size=20) for j in range(4)])

        neighbors.arrange(DOWN, buff=0.5).shift(RIGHT * 2)
        for neighbor, label in zip(neighbors, neighbor_labels):
            label.move_to(neighbor.get_center())

        # Draw graph
        self.play(Create(source_group))
        self.play(
            LaggedStart(
                *[Create(n) for n in neighbors],
                *[Write(l) for l in neighbor_labels],
                lag_ratio=0.1
            )
        )

        # Attention computation
        attention_formula = MathTex(
            r"\alpha_{ij} = \frac{\exp(LeakyReLU(\mathbf{a}^T[\mathbf{W}\mathbf{h}_i \| \mathbf{W}\mathbf{h}_j]))}{\sum_{k \in \mathcal{N}_i} \exp(LeakyReLU(\mathbf{a}^T[\mathbf{W}\mathbf{h}_i \| \mathbf{W}\mathbf{h}_k]))}",
            font_size=28
        )
        attention_formula.to_edge(DOWN)

        self.play(Write(attention_formula))

        # Show attention scores
        attention_scores = [0.42, 0.31, 0.18, 0.09]
        edges_with_scores = VGroup()

        for i, (neighbor, score) in enumerate(zip(neighbors, attention_scores)):
            edge = Arrow(
                source.get_right(),
                neighbor.get_left(),
                buff=0.3,
                color=interpolate_color(YELLOW, RED, score),
                stroke_width=2 + score * 6
            )
            score_text = Text(f"{score:.2f}", font_size=18, color=YELLOW)
            score_text.next_to(edge, UP, buff=0.1)
            edges_with_scores.add(VGroup(edge, score_text))

        self.play(
            LaggedStart(*[Create(edge_group) for edge_group in edges_with_scores], lag_ratio=0.2),
            run_time=2
        )

        self.wait(3)
