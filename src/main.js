import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// import { tsParticles } from "tsparticles-engine";
// import Particles from "particles.vue3";

library.add(fas)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
