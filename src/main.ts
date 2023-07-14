
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

router.beforeEach((to: { meta: { title: string } }, from: any, next: () => void) => {
  document.title = to.meta.title || 'Default Title'
  next()
})

app.mount('#app')