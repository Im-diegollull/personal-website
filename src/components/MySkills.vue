<template>
    <section id="skills" class="h-screen bg-gray-50 flex items-center justify-center">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-blue text-center mb-10">Skills</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <!-- Tarjeta de habilidad -->
          <div v-for="skill in skills" :key="skill.name" class="bg-white p-6 rounded-lg shadow-md text-center">
            <div class="text-6xl mb-4 text-mint">
              <i :class="skill.icon"></i>
            </div>
            <h3 class="text-2xl font-semibold text-blue mb-2">{{ skill.name }}</h3>
            <p class="text-gray-600">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "MySkills",
    data() {
      return {
        skills: [
          { name: "HTML & CSS", description: "Desarrollo de interfaces atractivas y responsivas.", icon: "fab fa-html5" },
          { name: "Python", description: "Lógica de programación y estructuras de datos.", icon: "fab fa-python" },
          { name: "Vue.js", description: "Componentes reutilizables y SPA modernas.", icon: "fab fa-vuejs" },
          { name: "Tailwind CSS", description: "Estilos rápidos y personalizados.", icon: "fas fa-paint-brush" },
          { name: "React & React Native", description: "Biblioteca de frontend declarativa.", icon: "fab fa-react" },
          { name: "Git & GitHub", description: "Control de versiones y colaboración.", icon: "fab fa-git-alt" },
          { name: "Figma", description: "Prototipado y disenño de interfaces.", icon: "fab fa-figma" },
          { name: "SQL", description: "Base de datos y consultas.", icon: "fas fa-database" },
          { name: "C++", description: "Lógica de programación y estructuras de datos.", icon: "fas fa-code" },

        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos adicionales si lo deseas */
  </style>
  