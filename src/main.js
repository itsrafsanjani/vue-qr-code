import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'
import './index.css'

if (typeof window !== 'undefined')
    import('./pwa')

export const createApp = ViteSSG(App)