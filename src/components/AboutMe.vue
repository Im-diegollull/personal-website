<template>
  <section id="about" class="h-screen bg-white flex items-center justify-center">
    <div class="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6">
      <!-- Contenido de Texto -->
      <div class="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h2 class="text-4xl font-bold text-black mb-4">About Me</h2>
        <p class="text-gray-600 text-lg leading-relaxed mb-6">
          ¡Hola! Soy <span class="font-semibold">Diego Llull</span>, ingeniero civil en ciencias de la computación, 
          apasionado por crear aplicaciones web elegantes y funcionales. 
          Exploro tecnologías como <span class="text-accent font-semibold">Vue.js</span> y <span class="text-accent font-semibold">Tailwind CSS</span> 
          para perfeccionar mis habilidades y desarrollar proyectos innovadores.
        </p>
        <!-- Habilidades o Intereses -->
        <div class="flex justify-center md:justify-start space-x-4 mb-6">
          <div class="bg-gray-100 p-4 rounded-lg shadow text-center">
            <i class="fab fa-vuejs text-black mb-4"></i>
            <p class="text-sm font-semibold">Vue.js</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow text-center">
            <i class="fab fa-python text-black mb-4"></i>
            <p class="text-sm font-semibold">Python</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow text-center">
            <i class="fas fa-code text-black mb-4"></i>
            <p class="text-sm font-semibold">Web Development</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow text-center">
            <i class="fas fa-mobile-alt text-black mb-4"></i>
            <p class="text-sm font-semibold">Mobile Apps</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow text-center">
            <i class="fas fa-paint-brush text-black mb-4"></i>
            <p class="text-sm font-semibold">UI/UX Design</p>
          </div>
          <div class="bg-gray-100 p-4 rounded-lg shadow text-center">
            <i class="fas fa-globe text-black mb-4"></i>
            <p class="text-sm font-semibold">Data Analysis</p>
          </div>
        </div>
        <!-- Botón de Acción -->
        <a 
          href="/cv.pdf" 
          class="inline-block bg-accent text-white px-6 py-2 rounded-lg shadow hover:bg-black transition"
          download
        >
          Descargar CV
        </a>
      </div>
      <!-- Imagen -->
      <div class="w-full md:w-1/2 flex justify-center">
        <img 
          src="@/assets/profile.jpg" 
          alt="Profile Picture"
          class="rounded-full shadow-lg w-64 h-64 object-cover"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>

</style>
