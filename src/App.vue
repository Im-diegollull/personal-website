<template>
  <div class="bg-white text-gray-800">
    <Navbar />
    <!-- Secciones -->
    <main class="pt-16">
      <!-- About Section -->
      <AboutMe />

      <!-- Skills Section -->
      <MySkills />

      <!-- Experience Section -->
      <section id="experience" class="h-screen bg-white flex items-center justify-center">
        <div class="text-center px-4">
          <h2 class="text-4xl font-bold text-primary mb-4">Experience</h2>
          <p class="text-gray-700">No hay experiencia profesional aún, ¡pero estoy aprendiendo cada día!</p>
        </div>
      </section>

      <!-- Contact Section -->
      <ContactMe />
    </main>
  </div>
</template>

<script>
import Navbar from './components/NavBar.vue';
import AboutMe from './components/AboutMe.vue';
import MySkills from './components/MySkills.vue';
import ContactMe from './components/ContactMe.vue';

export default {
  name: 'App',
  components: {
    Navbar,
    AboutMe,
    MySkills,
    ContactMe,
  },
};
</script>

<style>
/* Estilos globales adicionales si son necesarios */
</style>
