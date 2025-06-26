import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Products.vue'),
    children: [
      {
        path: 'fpv',
        name: 'FPVDrone',
        component: () => import('../views/products/FPV.vue')
      },
      {
        path: 'multi-rotor',
        name: 'MultiRotorDrone',
        component: () => import('../views/products/MultiRotor.vue')
      },
      {
        path: 'fixed-wing',
        name: 'FixedWingDrone',
        component: () => import('../views/products/FixedWing.vue')
      },
      {
        path: 'helicopter',
        name: 'HelicopterDrone',
        component: () => import('../views/products/Helicopter.vue')
      },
      {
        path: 'details/fpv/:id',
        name: 'FPVDetail',
        component: () => import('../views/products/details/FPVDetail.vue')
      },
      {
        path: 'details/fixedwing/:id',
        name: 'FixedWingDetail',
        component: () => import('../views/products/details/FixedWingDetail.vue')
      },
      {
        path: 'details/helicopter/:id',
        name: 'HelicopterDetail',
        component: () => import('../views/products/details/HelicopterDetail.vue')
      },
      {
        path: 'details/multirotor/:id',
        name: 'MultiRotorDetail',
        component: () => import('../views/products/details/MultiRotorDetail.vue')
      },
      { path: 'drone/:type', redirect: to => `/products/${to.params.type}` }
    ]
  },
  {
    path: '/applications',
    name: 'Applications',
    component: () => import('../views/Applications.vue'),
    children: [
      {
        path: 'mapping',
        name: 'MappingApplication',
        component: () => import('../views/applications/Mapping.vue')
      },
      {
        path: 'inspection',
        name: 'InspectionApplication',
        component: () => import('../views/applications/Inspection.vue')
      },
      {
        path: 'delivery',
        name: 'DeliveryApplication',
        component: () => import('../views/applications/Delivery.vue')
      },
      {
        path: 'aerial',
        name: 'AerialApplication',
        component: () => import('../views/applications/Aerial.vue')
      },
      {
        path: 'spraying',
        name: 'SprayingApplication',
        component: () => import('../views/applications/Spraying.vue')
      },
      {
        path: 'agriculture',
        name: 'AgricultureApplication',
        component: () => import('../views/applications/Agriculture.vue')
      },
      {
        path: 'firefighting',
        name: 'FirefightingApplication',
        component: () => import('../views/applications/Firefighting.vue')
      },
      {
        path: 'farming',
        name: 'FarmingApplication',
        component: () => import('../views/applications/Farming.vue')
      },
      {
        path: 'powerline',
        name: 'PowerlineApplication',
        component: () => import('../views/applications/Powerline.vue')
      },
      {
        path: 'defense',
        name: 'DefenseApplication',
        component: () => import('../views/applications/Defense.vue')
      },
      {
        path: 'energy',
        name: 'EnergyApplication',
        component: () => import('../views/applications/Energy.vue')
      },
      {
        path: 'marine',
        name: 'MarineApplication',
        component: () => import('../views/applications/Marine.vue')
      },
      {
        path: 'public-safety',
        name: 'PublicSafetyApplication',
        component: () => import('../views/applications/PublicSafety.vue')
      },
      {
        path: 'surveying',
        name: 'SurveyingApplication',
        component: () => import('../views/applications/Surveying.vue')
      },
      {
        path: 'integration',
        name: 'IntegrationApplication',
        component: () => import('../views/applications/Integration.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    children: [
      {
        path: 'company',
        name: 'Company',
        component: () => import('../views/about/Company.vue')
      },
      {
        path: 'responsibility',
        name: 'Responsibility',
        component: () => import('../views/about/Responsibility.vue')
      },
      {
        path: 'careers',
        name: 'Careers',
        component: () => import('../views/about/Jobs.vue')
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import('../views/about/Contact.vue')
      }
    ]
  },
  {
    path: '/support',
    name: 'TechnicalSupport',
    component: () => import('../views/Support.vue'),
    children: [
      {
        path: 'downloads',
        name: 'Downloads',
        component: () => import('../views/support/Downloads.vue')
      },
      {
        path: 'policy',
        name: 'Policy',
        component: () => import('../views/support/Policy.vue')
      },
      {
        path: 'faq',
        name: 'FAQ',
        component: () => import('../views/support/FAQ.vue')
      },
      {
        path: 'hotline',
        name: 'Hotline',
        component: () => import('../views/support/Hotline.vue')
      },
      {
        path: '/download/fpv',
        name: 'FpvDownload',
        component: () => import('../views/support/FpvDownload.vue')
      },
      {
        path: '/download/fixedwing',
        name: 'FixedwingDownload',
        component: () => import('../views/support/FixedwingDownload.vue')
      },
      {
        path: '/download/multirotor',
        name: 'MultirotorDownload',
        component: () => import('../views/support/MultirotorDownload.vue')
      },
      {
        path: '/download/helicopter',
        name: 'HelicopterDownload',
        component: () => import('../views/support/HelicopterDownload.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router 