# Rock Paper Scissors Game

This is a simple Rock Paper Scissors game built with **React**. It allows players to compete against a computer opponent in a best-of-five match.

![Rock Paper Scissors Gameplay](src/assets/gameplay.gif)

## Features

- Interactive UI with responsive buttons for selecting rock, paper, or scissors.
- Randomized computer choices for fair gameplay.
- Score tracking to determine the winner of the game.
- Animated transitions for game interactions.
- Play again functionality after game completion.

## Technologies Used

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## Installation & Setup

You can play the game via the Vercel link on the right hand side.
To run the project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone git@github.com:jutuli/Rock_Paper_Scissors.git
   cd rock-paper-scissors

   ```

1. **Install dependencies & run the development server:**
   ```bash
   npm install
   npm run dev
   ```

## How to Play

1. Click on either **Rock**, **Paper**, or **Scissors**.
2. The computer will randomly pick an option.
3. The winner is determined based on traditional Rock-Paper-Scissors rules:
   - **Rock** beats **Scissors**.
   - **Scissors** beats **Paper**.
   - **Paper** beats **Rock**.
   - If both choices are the same, it’s a **tie**.
4. The first to reach **5 points** wins the game.
5. At the end of the game, you can restart by clicking **Play Again**.

## Acknowledgments

This project was built as part of **Day 4** of the **React Module** in my Web Development Bootcamp. It serves as hands-on practice with React functional components, state management, and event handling.

---

🎮 **Enjoy the game and have fun!** 🚀
