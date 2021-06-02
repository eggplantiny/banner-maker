import { createApp } from 'vue'
import App from './App.vue'

import router from '@/router/'
import colorPicker from 'vue3-colorpicker'

import './index.css'

import 'vue3-colorpicker/bundle.css'
import '@headlessui/vue/dist/'

const app = createApp(App)

app.use(router)
app.use(colorPicker)

app.mount('#app')
