import { ViteSSG } from 'vite-ssg/single-page'
import { variantJS } from '@variantjs/vue'
import App from './App.vue'
import './index.css'

export const createApp = ViteSSG(
    App,
    ({ app }) => {
        const configuration = {}
        app.use(variantJS, configuration)
    }
)