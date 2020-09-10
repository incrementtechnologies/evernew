export default{
  routes: [{
    path: '/login',
    name: 'login',
    component: resolve => require(['components/increment/basic/Login.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/signup',
    name: 'signup',
    component: resolve => require(['components/increment/basic/Signup.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/signup/:email/:code',
    name: 'signup',
    component: resolve => require(['components/increment/basic/Signup.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/signup_partner',
    name: 'signupPartner',
    component: resolve => require(['components/increment/basic/SignupPartner.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/verification/:email',
    name: 'verification',
    component: resolve => require(['components/increment/basic/Verification.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/login_verification/:username/:code',
    name: 'loginVerification',
    component: resolve => require(['components/increment/basic/LoginByVerification.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/home',
    name: 'landing',
    component: resolve => require(['modules/home/Landing.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/request_reset_password',
    name: 'requestResetPassword',
    component: resolve => require(['components/increment/basic/RequestResetPassword.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/reset_password/:username/:code',
    name: 'resetPassword',
    component: resolve => require(['components/increment/basic/ResetPassword.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/dashboard',
    name: 'dashboard',
    component: resolve => require(['modules/dashboard/Dashboard.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/referrals/',
    name: 'referrals',
    component: resolve => require(['components/increment/generic/referral/Referrals.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/accounts',
    name: 'accounts',
    component: resolve => require(['modules/admin/Accounts.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/search',
    name: 'search',
    component: resolve => require(['modules/search/Search.vue'], resolve),
    meta: {
      tokenRequired: false
    }
  }, {
    path: '/profile/:parameter?',
    name: 'profile',
    component: resolve => require(['components/increment/settings/UpdateBasic.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }, {
    path: '/products',
    name: 'products',
    component: resolve => require(['components/increment/imarketvue/product/Products.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/product/edit/:code',
    name: 'product',
    component: resolve => require(['components/increment/imarketvue/product/EditProduct.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/marketplace',
    name: 'marketplace',
    component: resolve => require(['components/increment/imarketvue/marketplace/Marketplace.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  },
  {
    path: '/marketplace/product/:code/:status?',
    name: 'marketplaceProduct',
    component: resolve => require(['components/increment/imarketvue/marketplace/Product.vue'], resolve),
    meta: {
      tokenRequired: true
    }
  }
  ]
}
