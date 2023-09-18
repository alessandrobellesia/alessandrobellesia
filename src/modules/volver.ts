import { VolverPlugin } from '@volverjs/ui-vue'
import { AppModule } from '~/types'

// Setup Volver: https://volver.github.io/ui-vue/
export const install: AppModule = ({ app }) => {
	app.use(VolverPlugin, {})
}
