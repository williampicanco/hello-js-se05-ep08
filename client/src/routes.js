const router = {
    routes: [
      { path: "/", component: require("./componentes/verifica-usuario.vue") },
      { path: "/verifica-usuario", component: require("./componentes/verifica-usuario.vue") },
      { path: "/lista-usuarios", component: require("./componentes/lista-usuarios.vue") }
    ]
  }
  
  module.exports = router