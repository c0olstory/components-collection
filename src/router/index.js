import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/default.vue'
// import { useCookies } from "vue3-cookies";

// const { cookies } = useCookies();

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    // redirect: '/tabbar',
    children: [
      {
        path: '/tabbars',
        component: () => import('../views/tabbars/TabBars.vue'),
        // redirect: '/auth/signin',
      },
      {
        path: '/tabbars/1',
        component: () => import('../components/TabBar/1/TabBar_1.vue'),
      },
      {
        path: '/tabbars/2',
        component: () => import('../components/TabBar/2/TabBar_2.vue'),
      },
      {
        path: '/tabbars/3',
        component: () => import('../components/TabBar/3/TabBar_3.vue'),
      },
      {
        path: '/auth',
        component: () => import('../components/Authorization/Authorization.vue'),
        children: [
          {
            path: '/auth/1',
            meta: {
              title: 'auth-1',
            },
            component: () => import('../components/Authorization/1/1.vue'),
          },
        ]
      },
      {
        path: '/mail',
        component: () => import('../components/Mail/Mail.vue'),
        children: [
          {
            path: '/mail/1',
            meta: {
              title: 'mail-1',
            },
            component: () => import('../components/Mail/Unsub/Unsub.vue'),
          },
        ]
      },
      {
        path: '/effects',
        component: () => import('../views/effetcs/Effects.vue'),
        children: [
          {
            path: '/effects/flowers',
            meta: {
              title: 'Flowers',
            },
            component: () => import('../components/Effects/Flowers/Flowers.vue'),
          },
          {
            path: '/effects/spider',
            meta: {
              title: 'Spider',
            },
            component: () => import('../components/Effects/Spider/Spider.vue'),
          },
        ]
      },
      {
        path: '/gallery',
        component: () => import('../views/gallery/Gallery.vue'),
        children: [
          {
            path: '/gallery/1',
            meta: {
              title: 'gallery-1',
            },
            component: () => import('../components/Gallery/1/1.vue'),
          },
        ]
      },
      {
        path: '/ratings',
        component: () => import('../views/ratings/Ratings.vue'),
        children: [
          {
            path: '/ratings/1',
            meta: {
              title: 'rating-1',
            },
            component: () => import('../components/Ratings/1/Ratings_1.vue'),
          },
        ]
      },
      {
        path: '/loadings',
        component: () => import('../views/loadings/Loadings.vue'),
        children: [
          {
            path: '/loadings/1',
            meta: {
              title: 'loading-1',
            },
            component: () => import('../components/Loadings/1/1.vue'),
          },
        ]
      },
      {
        path: '/menu',
        component: () => import('../views/menu/Menu.vue'),
        children: [
          {
            path: '/menu/circle',
            meta: {
              title: 'Circle menu',
            },
            component: () => import('../components/Menu/Circle/Circle.vue'),
          },
        ]
      },
      {
        path: '/others',
        component: () => import('../views/others/Others.vue'),
        children: [
          {
            path: '/others/temperature',
            meta: {
              title: 'Temperature',
            },
            component: () => import('../components/Others/Temperature/Temperature.vue'),
          },
        ]
      },
      // {
      //   path: '/settings',
      //   meta: {
      //     auth: true,
      //     redirect: '/auth/signin',
      //     title: 'Setting',
      //   },
      //   component: () => import('@/views/settings/settings.vue'),
      // },
      // {
      //   path: '/channels',
      //   meta: {
      //     auth: true,
      //     redirect: '/auth/signin',
      //     title: 'Channels',
      //   },
      //   component: () => import('@/views/settings/channels.vue'),
      // },
      // {
      //   path: '/settings/:channelId/providers',
      //   meta: {
      //     auth: true,
      //     redirect: '/auth/signin',
      //     title: 'Providers',
      //   },
      //   component: () => import('@/views/settings/providers.vue'),
      // },
      // {
      //   path: '/settings/:projectId/channel/:channelId/provider/:providerId',
      //   meta: {
      //     auth: true,
      //     redirect: '/auth/signin',
      //     title: 'Gateways',
      //   },
      //   component: () => import('@/views/settings/provider.vue'),
      // },
      // {
      //   path: '/messages',
      //   meta: {
      //     auth: true,
      //     redirect: '/auth/signin',
      //     title: 'Messages',
      //   },
      //   component: () => import('@/views/messages/messages.vue'),
      // },
      // {
      //     path: '/profile',
      //     component: MainLayout,
      //     redirect: '/profile/setting',
      //     component: () => import('@/views/profile/profile.vue'),
      //     children: [
      //       {
      //         path: '/profile/setting',
      //         meta: {
      //           auth: true,
      //           redirect: '/auth/signin',
      //           title: 'Personal settings',
      //         },
      //         component: () => import('@/views/profile/setting.vue'),
      //       },
      //       {
      //         path: '/profile/billing',
      //         meta: {
      //           auth: true,
      //           redirect: '/auth/signin',
      //           title: 'Billing information',
      //         },
      //         component: () => import('@/views/profile/billing.vue'),
      //       },
      //     ],
      //   },
    ],
  },
  // {
  //   path: '/:catchAll(.*)',
  //   component: () => import('@/views/notFound/notFound.vue')
  // }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory('/'),
  routes
})

// router.beforeEach((to, from, next) => {
//   const isAuth = to.meta.auth
//   const redirect = to.meta.redirect
//   const token = cookies.get('access_token');

//   if (isAuth && !token) {
//     next(redirect)
//   } else if (!isAuth && token) {
//     next(redirect)
//   } else {
//     next()
//   }

// })

export default router
