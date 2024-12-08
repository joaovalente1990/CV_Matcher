import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router/routes.js"
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(router)
  .mount('#app')
