import React from "react";

const App = () => {
  return (
    <div class="bg-gray-300 h-screen">
      <nav class="flex justify-between items-center bg-gray-600 p-4 text-white">
        <h1 class="text-xl font-bold">Brand</h1>
        <ul class="flex gap-4">
          <li class="hover:text-gray-300 cursor-pointer">Home</li>
          <li class="hover:text-gray-300 cursor-pointer">About</li>
          <li class="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </nav>

      <div class="max-w-sm bg-white rounded-xl mt-5 shadow-lg p-4">
        <img src="https://cms.thewire.in/wp-content/uploads/2024/06/Modi-at-Nalanda.png" class="rounded-lg mb-3" />
        <h2 class="text-xl font-semibold">Nalanda University Inauguration</h2>
        <p class="text-gray-600 mt-2">
          This is a simple card built with TailwindCSS
        </p>
        <button class="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 mx-auto block">
          Read More
        </button>
      </div>
    </div>
  )
}

export default App