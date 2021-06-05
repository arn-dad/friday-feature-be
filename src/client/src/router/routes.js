import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [

        {
            path: '/',
            name: 'analytics',
            component: () => import('../views/Dashboards/Analytics.vue'),
        },

        // Pages

        {
            path: '/features',
            name: 'features',
            // meta: {layout: 'userpages'},
            component: () => import('../views/Features/Features.vue'),
        },

        {
            path: '/create-feature',
            name: 'create-features',
            // meta: {layout: 'userpages'},
            component: () => import('../views/Features/CreateFeature/CreateFeature.vue'),
        },

        {
            path: '/feature-details',
            name: 'feature-details',
            // meta: {layout: 'userpages'},
            component: () => import('../views/Features/DetailsFeature/DetailsFeature.vue'),
        },
    ]
})
