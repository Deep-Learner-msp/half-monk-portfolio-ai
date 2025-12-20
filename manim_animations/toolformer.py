"""
Toolformer Self-Supervised Learning Animation
Visualizes how LLMs learn to use tools without human annotation

To render:
manim -pql toolformer.py ToolformerLearning
manim -pqh toolformer.py ToolformerLearning  # High quality
"""

from manim import *
import numpy as np

class ToolformerLearning(Scene):
    def construct(self):
        # Title
        title = Text("Toolformer: Teaching LLMs to Use Tools", font_size=36)
        title.to_edge(UP)
        self.play(Write(title))
        self.wait()

        # Part 1: The Problem
        subtitle1 = Text("The Problem: LLMs Can't Do Math", font_size=28)
        subtitle1.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle1))

        # Show LLM struggling with math
        question = Text("Question: What is 7249 × 382?", font_size=22, color=WHITE)
        question.shift(UP * 1.5)
        self.play(Write(question))

        # LLM response
        llm_box = Rectangle(height=2, width=5, color=BLUE, fill_opacity=0.2)
        llm_label = Text("GPT-3", font_size=20)
        llm_label.move_to(llm_box.get_center())
        llm_group = VGroup(llm_box, llm_label)
        llm_group.shift(DOWN * 0.5)

        self.play(FadeIn(llm_group))

        # Wrong answer
        wrong_answer = Text("Answer: ~2,800,000", font_size=20, color=RED)
        wrong_answer.next_to(llm_group, DOWN, buff=0.5)
        cross = Text("✗", font_size=40, color=RED, weight=BOLD)
        cross.next_to(wrong_answer, LEFT, buff=0.3)

        self.play(Write(wrong_answer), FadeIn(cross))

        correct_answer = Text("(Correct: 2,769,218)", font_size=18, color=GREEN)
        correct_answer.next_to(wrong_answer, DOWN, buff=0.3)
        self.play(Write(correct_answer))

        self.wait(2)

        # Part 2: Toolformer Solution
        self.play(
            FadeOut(VGroup(question, llm_group, wrong_answer, cross, correct_answer, subtitle1))
        )

        subtitle2 = Text("Toolformer Solution: Self-Supervised Tool Learning", font_size=24)
        subtitle2.next_to(title, DOWN, buff=0.5)
        self.play(Write(subtitle2))

        # Stage 1: Sample API Calls
        stage1_title = Text("Stage 1: Sample Potential API Calls", font_size=20, color=YELLOW)
        stage1_title.shift(UP * 2)
        self.play(Write(stage1_title))

        # Show text with potential API call positions
        text_example = Text("What is 7249 × 382? The result is", font_size=18, color=WHITE)
        text_example.shift(UP * 0.8)
        self.play(Write(text_example))

        # Show sampled API call
        api_call = Text("[Calculator(7249 × 382)]", font_size=18, color=TEAL)
        api_call.next_to(text_example, RIGHT, buff=0.1)

        arrow = Arrow(text_example.get_bottom(), api_call.get_top(), buff=0.1, color=YELLOW)
        self.play(Create(arrow), Write(api_call))

        self.wait(2)

        # Stage 2: Execute and Evaluate
        self.play(
            FadeOut(arrow),
            FadeOut(stage1_title)
        )

        stage2_title = Text("Stage 2: Execute & Evaluate", font_size=20, color=YELLOW)
        stage2_title.shift(UP * 2)
        self.play(Write(stage2_title))

        # Execute API
        execute_arrow = Arrow(api_call.get_bottom(), api_call.get_bottom() + DOWN * 1, buff=0.1, color=GREEN)
        api_result = Text("→ Result: 2769218", font_size=18, color=GREEN)
        api_result.next_to(execute_arrow, DOWN, buff=0.1)

        self.play(Create(execute_arrow), Write(api_result))

        # Evaluate improvement
        eval_text = Text("Does this improve next-token prediction?", font_size=16, color=WHITE)
        eval_text.next_to(api_result, DOWN, buff=0.5)

        # Loss comparison
        loss_without = Text("Loss without API: 8.42", font_size=16, color=RED)
        loss_with = Text("Loss with API: 2.15", font_size=16, color=GREEN)
        loss_comparison = VGroup(loss_without, loss_with).arrange(DOWN, buff=0.3)
        loss_comparison.next_to(eval_text, DOWN, buff=0.3)

        self.play(Write(eval_text))
        self.play(Write(loss_without))
        self.play(Write(loss_with))

        # Decision
        decision = Text("✓ Keep this API call!", font_size=18, color=GREEN, weight=BOLD)
        decision.next_to(loss_comparison, DOWN, buff=0.5)
        self.play(Write(decision))

        self.wait(2)

        # Stage 3: Filter and Train
        self.play(
            FadeOut(VGroup(
                text_example, api_call, execute_arrow, api_result,
                eval_text, loss_comparison, decision, stage2_title
            ))
        )

        stage3_title = Text("Stage 3: Filter & Fine-tune", font_size=20, color=YELLOW)
        stage3_title.shift(UP * 2)
        self.play(Write(stage3_title))

        # Show filtering process
        all_samples = VGroup(*[
            Rectangle(height=0.4, width=3, color=BLUE, fill_opacity=0.3)
            for _ in range(8)
        ]).arrange(DOWN, buff=0.2)
        all_samples.shift(LEFT * 3 + UP * 0.5)

        samples_label = Text("Generated\nSamples", font_size=16)
        samples_label.next_to(all_samples, LEFT, buff=0.3)

        self.play(
            LaggedStart(*[FadeIn(sample) for sample in all_samples], lag_ratio=0.1),
            Write(samples_label),
            run_time=2
        )

        # Filter beneficial ones
        filter_arrow = Arrow(all_samples.get_right(), all_samples.get_right() + RIGHT * 2, buff=0.1, color=YELLOW)
        filter_label = Text("Weighted\nFiltering", font_size=14, color=YELLOW)
        filter_label.next_to(filter_arrow, UP, buff=0.1)

        kept_samples = VGroup(*[
            Rectangle(height=0.4, width=3, color=GREEN, fill_opacity=0.3)
            for _ in range(5)
        ]).arrange(DOWN, buff=0.2)
        kept_samples.next_to(filter_arrow, RIGHT, buff=0.5)

        kept_label = Text("Beneficial\nAPI Calls", font_size=16, color=GREEN)
        kept_label.next_to(kept_samples, RIGHT, buff=0.3)

        self.play(Create(filter_arrow), Write(filter_label))
        self.play(
            LaggedStart(*[FadeIn(sample) for sample in kept_samples], lag_ratio=0.1),
            Write(kept_label),
            run_time=1.5
        )

        # Fine-tuning
        finetune_box = Rectangle(height=1.5, width=4, color=PURPLE, fill_opacity=0.2)
        finetune_label = Text("Fine-tune LLM\non augmented dataset", font_size=18, color=WHITE)
        finetune_label.move_to(finetune_box.get_center())
        finetune_group = VGroup(finetune_box, finetune_label)
        finetune_group.shift(DOWN * 2)

        train_arrow = Arrow(kept_samples.get_bottom(), finetune_group.get_top(), buff=0.3, color=GREEN)

        self.play(Create(train_arrow), FadeIn(finetune_group))

        self.wait(2)

        # Part 3: Results
        self.play(
            FadeOut(VGroup(
                all_samples, samples_label, filter_arrow, filter_label,
                kept_samples, kept_label, train_arrow, finetune_group, stage3_title
            ))
        )

        results_title = Text("Results: Tool-Augmented LLM", font_size=28)
        results_title.next_to(title, DOWN, buff=0.5)
        self.play(Write(results_title))

        # Show the same question again
        question2 = Text("Question: What is 7249 × 382?", font_size=22, color=WHITE)
        question2.shift(UP * 1.5)
        self.play(Write(question2))

        # Toolformer response
        toolformer_box = Rectangle(height=2.5, width=6, color=PURPLE, fill_opacity=0.2)
        toolformer_label = Text("Toolformer", font_size=20, color=PURPLE)
        toolformer_label.move_to(toolformer_box.get_center()).shift(UP * 0.8)

        # Response with API call
        response_text = VGroup(
            Text("The result is", font_size=18, color=WHITE),
            Text("[Calculator(7249 × 382)]", font_size=16, color=TEAL),
            Text("→ 2769218", font_size=16, color=GREEN)
        ).arrange(RIGHT, buff=0.2)
        response_text.move_to(toolformer_box.get_center()).shift(DOWN * 0.3)

        toolformer_group = VGroup(toolformer_box, toolformer_label, response_text)
        toolformer_group.shift(DOWN * 0.5)

        self.play(FadeIn(toolformer_group))

        # Correct!
        checkmark = Text("✓ Correct!", font_size=32, color=GREEN, weight=BOLD)
        checkmark.next_to(toolformer_group, DOWN, buff=0.5)
        self.play(Write(checkmark))

        self.wait(2)

        # Performance metrics
        self.play(
            FadeOut(VGroup(question2, toolformer_group, checkmark, results_title))
        )

        metrics_title = Text("Performance Improvements", font_size=32)
        metrics_title.next_to(title, DOWN, buff=1)
        self.play(Write(metrics_title))

        metrics = VGroup(
            VGroup(
                Text("Math (ASDiv)", font_size=20, color=WHITE),
                Text("+15.2%", font_size=32, color=GREEN, weight=BOLD),
                Text("over GPT-3", font_size=16, color=GRAY)
            ).arrange(DOWN, buff=0.2),
            VGroup(
                Text("QA (WebQs)", font_size=20, color=WHITE),
                Text("+18.5%", font_size=32, color=GREEN, weight=BOLD),
                Text("with Wikipedia", font_size=16, color=GRAY)
            ).arrange(DOWN, buff=0.2),
            VGroup(
                Text("Temporal", font_size=20, color=WHITE),
                Text("+27.3%", font_size=32, color=GREEN, weight=BOLD),
                Text("time-sensitive", font_size=16, color=GRAY)
            ).arrange(DOWN, buff=0.2),
        ).arrange(RIGHT, buff=1.5)
        metrics.next_to(metrics_title, DOWN, buff=1)

        self.play(
            LaggedStart(*[FadeIn(metric) for metric in metrics], lag_ratio=0.3),
            run_time=2
        )

        self.wait(3)


class ToolIntegrationFlow(Scene):
    """Show how Toolformer integrates multiple tools"""

    def construct(self):
        title = Text("Multi-Tool Integration", font_size=40)
        title.to_edge(UP)
        self.play(Write(title))

        # LLM in center
        llm = Circle(radius=1.2, color=PURPLE, fill_opacity=0.3)
        llm_label = Text("Toolformer\nLLM", font_size=20)
        llm_label.move_to(llm.get_center())
        llm_group = VGroup(llm, llm_label)

        self.play(Create(llm))
        self.play(Write(llm_label))

        # Available tools around it
        tools = [
            ("Calculator", BLUE, UP * 2.5),
            ("Wikipedia", GREEN, RIGHT * 3 + UP * 1.5),
            ("Calendar", ORANGE, RIGHT * 3 + DOWN * 1.5),
            ("Translation", YELLOW, DOWN * 2.5),
            ("Search", RED, LEFT * 3 + DOWN * 1.5),
            ("WolframAlpha", PINK, LEFT * 3 + UP * 1.5),
        ]

        tool_groups = VGroup()
        connections = VGroup()

        for tool_name, color, position in tools:
            tool_circle = Circle(radius=0.6, color=color, fill_opacity=0.2)
            tool_label = Text(tool_name, font_size=16)
            tool_label.move_to(tool_circle.get_center())
            tool_group = VGroup(tool_circle, tool_label)
            tool_group.shift(position)

            # Connection to LLM
            line = Line(llm.get_center(), tool_group.get_center(), buff=1.2, color=color, stroke_width=2)

            tool_groups.add(tool_group)
            connections.add(line)

        self.play(
            LaggedStart(*[Create(conn) for conn in connections], lag_ratio=0.1),
            run_time=2
        )

        self.play(
            LaggedStart(*[FadeIn(tool) for tool in tool_groups], lag_ratio=0.1),
            run_time=2
        )

        # Show example query using multiple tools
        query = Text('Query: "What\'s the weather in Paris tomorrow in Spanish?"', font_size=18, color=WHITE)
        query.to_edge(DOWN).shift(UP * 0.5)
        self.play(Write(query))

        # Highlight tools being used
        for i, tool_idx in enumerate([2, 4, 3]):  # Calendar, Search, Translation
            self.play(
                connections[tool_idx].animate.set_stroke(width=6),
                tool_groups[tool_idx][0].animate.set_fill(opacity=0.6),
                run_time=0.5
            )

        self.wait(2)

        # Show zero-shot generalization
        zero_shot_label = Text("Zero-shot Generalization:\nCombines tools not seen together in training",
                              font_size=20, color=YELLOW)
        zero_shot_label.to_edge(DOWN).shift(UP * 2.5)

        self.play(Write(zero_shot_label))

        self.wait(3)
