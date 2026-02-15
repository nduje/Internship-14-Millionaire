# Who Wants to Be a Half Millionaire?

### DUMP Internship - React #1

## Task

React quiz application inspired by the TV show **"Who Wants to Be a Millionaire?"**.

The player answers 10 questions with increasing rewards, aiming to win **500.000 €**.

## Game Rules

- 10 levels (100 € → 500.000 €)
- Level 5 (5.000 €) is a **safe level**
- Wrong answer before level 5 → **0 €**
- Wrong answer after level 5 → **5.000 €**
- 10 correct answers → win the game

At the start:

- 10 random questions are selected from a pool of at least 20
- Answer order is shuffled

## Features

- Start screen with title and start button
- Question screen showing:
  - Question text
  - 4 answers (A–D)
  - Current level & reward
  - Sidebar with all levels (current highlighted, safe level emphasized)
- Instant feedback (correct = green, incorrect = red)
- End screen with total earnings and **Play Again**
- 2 jokers (50:50, Skip Question) – usable once per game
- Used jokers visually disabled

## Bonus

- Give Up (with confirmation)
- Replace Question
- Progress survives refresh

## Setup

1. Clone or download the repository
2. Install dependencies
3. Run the app
