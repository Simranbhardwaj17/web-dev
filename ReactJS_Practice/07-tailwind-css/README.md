## 🚀 Vite + React + TailwindCSS

This folder uses Vite + React with TailwindCSS for fast development and utility-first styling.
I have built card and navbar in App.jsx styled using tailwind classes.
In next folder, I have created project using it

# 📦 Installation & Setup
1️⃣ Create Vite + React Project
npm create vite@latest my-app --template react
cd my-app

2️⃣ Install TailwindCSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

3️⃣ Configure the Vite plugin
Add the @tailwindcss/vite plugin to your Vite configuration.

vite.config.ts

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

4️⃣ Import Tailwind CSS

In src/index.css:
@import "tailwindcss";

# 🧩 Using TailwindCSS in React

Example in App.jsx:

function App() {
  return (
    <div className="h-screen hover:bg-blue-700 text-yellow-500 text-3xl font-bold text-center">
      Hi, This side Simran Bhardwaj
    </div>
  );
}

export default App;

🚀 Run the Project
npm run dev

# 📌 What TailwindCSS Provides

Utility-first styling (p-4, m-2, text-xl)
Responsive classes (md:text-2xl)
Flexbox & grid utilities (flex, grid, justify-center)
Fast development with no CSS file writing
