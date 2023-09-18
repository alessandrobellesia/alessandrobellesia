import type { App } from 'vue'
import type { Router, RouteRecordRaw } from 'vue-router/auto'
import type { MergeHead, VueHeadClient } from '@unhead/vue'
import type { Pinia } from 'pinia'

interface AppContext<HasRouter extends boolean = true> {
	app: App<Element>
	router: HasRouter extends true ? Router : undefined
	routes: HasRouter extends true ? RouteRecordRaw[] : undefined
	head: VueHeadClient<MergeHead> | undefined
	store: Pinia
}

export type AppModule = (ctx: AppContext) => void
