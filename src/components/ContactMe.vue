<template>
    <section id="contact" class="h-screen bg-white flex items-center justify-center">
      <div class="text-center px-6">
        <h2 class="text-4xl font-bold text-black mb-6">Contact</h2>
        <p class="text-gray-600 mb-8">¡Conéctate conmigo a través de estas plataformas!</p>
        
        <!-- Íconos de Redes Sociales -->
        <div class="flex justify-center space-x-6 mb-8">
          <a href="https://github.com" target="_blank" class="text-black text-4xl hover:text-accent transition">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="text-black text-4xl hover:text-accent transition">
            <i class="fab fa-linkedin"></i>
          </a>
          <a href="mailto:tucorreo@gmail.com" class="text-black text-4xl hover:text-accent transition">
            <i class="fas fa-envelope"></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="text-black text-4xl hover:text-accent transition">
            <i class="fab fa-twitter"></i>
          </a>
        </div>
  
        <!-- Botón de Llamada a la Acción -->
        <a href="mailto:tucorreo@gmail.com" class="bg-accent text-white px-6 py-3 rounded-full shadow hover:bg-black transition">
          ¡Envíame un Mensaje!
        </a>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "ContactMe",
  };
  </script>
  
  <style scoped>
  /* Estilos adicionales si es necesario */
  </style>
  