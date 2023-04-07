import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import router from './router'
import translations from './assets/translation';

import './assets/main.css'

const i18n = createI18n({
    locale: 'en', // Set the default locale to Arabic
    messages: translations,
  })

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

/* app.use(VueGoogleMaps, {
    load: {
        key: 'YOUR_API_KEY_COMES_HERE',
        // language: 'de',
    },
}) */
app.mixin({
    methods: {
      isRTL() {
        return this.$i18n.locale == 'ar' || this.$i18n.locale == 'ku';
      },
  }
})
app.mount('#app')
