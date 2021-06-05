const exampleConfig = [
        {
            header: true,
            title: 'Main Navigation',
        },
        {
            title: 'Dashboards',
            icon: 'pe-7s-rocket',
            child: [
                {
                    href: '/',
                    title: 'Analytics',
                },
            ]
        },
        {
            title: 'Pages',
            icon: 'pe-7s-browser',
            child: [
                {
                    href: '/features',
                    title: 'Features',
                },
                {
                    href: '/pages/login-boxed',
                    title: 'Login Boxed',
                },
                {
                    href: '/pages/register-boxed',
                    title: 'Register Boxed',
                },
                {
                    href: '/pages/forgot-password-boxed',
                    title: 'Forgot Password Boxed',
                },
            ]
        },
        {
            header: true,
            title: 'UI Components',
        },
        {
            icon: 'pe-7s-diamond',
            title: 'Elements',
            child: [
                {
                    title: 'Buttons',
                    child: [
                        {
                            title: 'Standard',
                            href: '/elements/buttons-standard',
                        },
                    ]
                },
                {
                    title: 'Dropdowns',
                    href: '/elements/dropdowns',
                },
                {
                    title: 'Icons',
                    href: '/elements/icons',
                },
                {
                    title: 'Badges',
                    href: '/elements/badges-labels',
                },
                {
                    title: 'Cards',
                    href: '/elements/cards',
                },
                {
                    title: 'List Groups',
                    href: '/elements/list-group',
                },
                {
                    title: 'Timeline',
                    href: '/elements/timelines',
                },
                {
                    title: 'Utilities',
                    href: '/elements/utilities',
                },
            ],
        },
        {
            icon: 'pe-7s-car',
            title: 'Components',
            child: [
                {
                    title: 'Tabs',
                    href: '/components/tabs',
                },
                {
                    title: 'Accordions',
                    href: '/components/accordions',
                },
                {
                    title: 'Modals',
                    href: '/components/modals',
                },
                {
                    title: 'Progress Bar',
                    href: '/components/progress-bar',
                },
                {
                    title: 'Tooltips & Popovers',
                    href: '/components/tooltips-popovers',
                },
                {
                    title: 'Carousel',
                    href: '/components/carousel',
                },
                {
                    title: 'Pagination',
                    href: '/components/pagination',
                },
                {
                    title: 'Maps',
                    href: '/components/maps',
                },
            ],
        },
        {
            icon: 'pe-7s-display2',
            title: 'Tables',
            child: [
                {
                    title: 'Regular Tables',
                    href: '/tables/regular-tables',
                },
            ]
        },
        {
            header: true,
            title: 'Dashboard Boxes',
        },
        {
            icon: 'pe-7s-graph2',
            title: 'Chart Boxes',
            href: '/widgets/chart-boxes-3',
        },
        {
            header: true,
            title: 'Forms',
        },
        {
            icon: 'pe-7s-light',
            title: 'Elements',
            child: [
                {
                    title: 'Controls',
                    href: '/forms/controls',
                },
                {
                    title: 'Layouts',
                    href: '/forms/layouts',
                },
            ],
        },
        {
            header: true,
            title: 'Charts',
        },
        {
            icon: 'pe-7s-graph2',
            title: 'ChartJS',
            href: '/charts/chartjs',
        },
    ]

const config = [
    {
        header: true,
        title: 'Main Navigation',
    },
    {
        title: 'Dashboard',
        icon: 'pe-7s-rocket',
        child: [
            {
                href: '/',
                title: 'Analytics',
            },
        ]
    },
    {
        title: 'Features',
        icon: 'pe-7s-flag',
        child: [
            {
                href: '/features',
                title: 'Features',
            },
        ]
    },
]

export default config;