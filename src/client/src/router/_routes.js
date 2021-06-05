import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [

        // Dashboards

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

        // {
        //     path: '/pages/login-boxed',
        //     name: 'login-boxed',
        //     meta: {layout: 'userpages'},
        //     component: () => import('../views/UserPages/LoginBoxed.vue'),
        // },
        // {
        //     path: '/pages/register-boxed',
        //     name: 'register-boxed',
        //     meta: {layout: 'userpages'},
        //     component: () => import('../views/UserPages/RegisterBoxed.vue'),
        // },
        // {
        //     path: '/pages/forgot-password-boxed',
        //     name: 'forgot-password-boxed',
        //     meta: {layout: 'userpages'},
        //     component: () => import('../views/UserPages/ForgotPasswordBoxed.vue'),
        // },

        // // Elements

        // {
        //     path: '/elements/buttons-standard',
        //     name: 'buttons-standard',
        //     component: () => import('../views/Elements/Buttons/Standard.vue'),
        // },
        // {
        //     path: '/elements/dropdowns',
        //     name: 'dropdowns',
        //     component: () => import('../views/Elements/Dropdowns.vue'),
        // },
        // {
        //     path: '/elements/icons',
        //     name: 'icons',
        //     component: () => import('../views/Elements/Icons.vue'),
        // },
        // {
        //     path: '/elements/badges-labels',
        //     name: 'badges',
        //     component: () => import('../views/Elements/Badges.vue'),
        // },
        // {
        //     path: '/elements/cards',
        //     name: 'cards',
        //     component: () => import('../views/Elements/Cards.vue'),
        // },
        // {
        //     path: '/elements/list-group',
        //     name: 'list-group',
        //     component: () => import('../views/Elements/ListGroups.vue'),
        // },
        // {
        //     path: '/elements/timelines',
        //     name: 'timeline',
        //     component: () => import('../views/Elements/Timeline.vue'),
        // },
        // {
        //     path: '/elements/utilities',
        //     name: 'utilities',
        //     component: () => import('../views/Elements/Utilities.vue'),
        // },

        // // Components

        // {
        //     path: '/components/tabs',
        //     name: 'tabs',
        //     component: () => import('../views/Components/Tabs.vue'),
        // },
        // {
        //     path: '/components/accordions',
        //     name: 'accordions',
        //     component: () => import('../views/Components/Accordions.vue'),
        // },
        // {
        //     path: '/components/modals',
        //     name: 'modals',
        //     component: () => import('../views/Components/Modals.vue'),
        // },
        // {
        //     path: '/components/progress-bar',
        //     name: 'progress-bar',
        //     component: () => import('../views/Components/ProgressBar.vue'),
        // },
        // {
        //     path: '/components/tooltips-popovers',
        //     name: 'tooltips-popovers',
        //     component: () => import('../views/Components/TooltipsPopovers.vue'),
        // },
        // {
        //     path: '/components/carousel',
        //     name: 'carousel',
        //     component: () => import('../views/Components/Carousel.vue'),
        // },
        // {
        //     path: '/components/pagination',
        //     name: 'pagination',
        //     component: () => import('../views/Components/Pagination.vue'),
        // },
        // {
        //     path: '/components/maps',
        //     name: 'maps',
        //     component: () => import('../views/Components/Maps.vue'),
        // },

        // // Tables

        // {
        //     path: '/tables/regular-tables',
        //     name: 'regular-tables',
        //     component: () => import('../views/Tables/RegularTables.vue'),
        // },

        // // Dashboard Widgets

        // {
        //     path: '/widgets/chart-boxes-3',
        //     name: 'chart-boxes-3',
        //     component: () => import('../views/Widgets/ChartBoxes3.vue'),
        // },

        // // Forms

        // {
        //     path: '/forms/controls',
        //     name: 'controls',
        //     component: () => import('../views/Forms/Elements/Controls.vue'),
        // },
        // {
        //     path: '/forms/layouts',
        //     name: 'layouts',
        //     component: () => import('../views/Forms/Elements/Layouts.vue'),
        // },
        // // Charts

        // {
        //     path: '/charts/chartjs',
        //     name: 'chartjs',
        //     component: () => import('../views/Charts/Chartjs.vue'),
        // },
        // {
        //     // catch all 404 - define at the very end
        // path: "*",
        // component: () => import("../views/NotFound/NotFound.vue")
        // }
    ]
})
