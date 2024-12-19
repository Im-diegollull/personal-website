<template>
    <nav class="bg-accent fixed w-full">
      <div class="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 class="text-xl font-bold text-blue">My Personal Page</h1>
        <ul class="flex space-x-6">
          <li><a href="#about" class="hover:text-mint text-blue">About</a></li>
          <li><a href="#skills" class="hover:text-mint text-blue">Skills</a></li>
          <li><a href="#experience" class="hover:text-mint text-blue">Experience</a></li>
          <li><a href="#portfolio" class="hover:text-mint text-blue">Portfolio</a></li>
          <li><a href="#contact" class="hover:text-mint text-blue">Contact</a></li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style scoped>
  /* Scoped Tailwind utilities (if needed) */
  </style>
  