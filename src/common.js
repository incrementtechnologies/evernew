export default {
  sidebarMenu: [
    {accountType: 'ALL', accountStatus: 'ALL', showOnAdmin: true, description: 'Search', icon: 'fa fa-tachometer-alt', path: 'search', flag: false, subMenu: null},
    {accountType: 'ADMIN', accountStatus: 'ALL', showOnAdmin: true, description: 'Products', icon: 'fa fa-tachometer-alt', path: 'products', flag: false, subMenu: null},
    // {accountType: 'MERCHANT', accountStatus: 'ALL', showOnAdmin: true, description: 'My Product', icon: 'fa fa-tachometer-alt', path: 'products', flag: false, subMenu: null},
    {accountType: 'ADMIN', accountStatus: 'ALL', showOnAdmin: true, description: 'Account', icon: 'fa fa-tachometer-alt', path: 'accounts', flag: false, subMenu: null}
  ],
  profileMenu: [{
    title: 'My Profile',
    icon: 'fa fa-cog',
    route: '/profile'
  }],
  APP_NAME: 'EverNew',
  APP_NAME_HTML: 'EverNew Appliance',
  APP_EMAIL: 'support@evernew.com',
  COMPANY: 'EverNew',
  COMPANY_URL: 'https://evernew.com',
  APP_URL: 'https://evernew.com',
  COPYRIGHT: 'EverNew ' + new Date().getFullYear(),
  USER_TYPE: [{
    title: 'USER'
  }, {
    title: 'MERCHANT'
  }, {
    title: 'RIDER'
  }, {
    title: 'ADMIN'
  }],
  plan: false,
  header: ['status', 'notification'], // 'messenger', '',
  settingsMenu: [
    {title: 'Profile', hideFrom: ['MERCHANT'], type: 'profile', allowed: ['cellular_number', 'address', 'sex', 'birth_date']},
    {title: 'Account', hideFrom: [], type: 'account', allowed: []}
  ],
  notificationSeting: [{
    title: 'OTP',
    flag: true
  }, {
    title: 'SMS',
    flag: true
  }, {
    title: 'EMAIL',
    flag: true
  }],
  referral: {
    message: 'to get deals on selected items!',
    emailMessage: ', a brand new food delivery app. Check out their awesome deals!',
    promotion: ''
  },
  socialMedia: {
    facebook: 'evernew'
  },
  pusher: {
    channel: 'evernew',
    private: 'runway_broadcast',
    notifications: 'Notifications',
    rider: 'Rider',
    messages: 'Message',
    validation: 'Validation',
    orders: 'Orders'
  },
  ecommerce: {
    inventoryType: 'inventory',
    editProductMenu: [{
      title: 'Inventory',
      flag: true
    }, {
      title: 'Variation',
      flag: false
    }, {
      title: 'Price',
      flag: false
    }, {
      title: 'Comment',
      flag: false
    }, {
      title: 'Location',
      flag: false
    }],
    editProductMenuRental: [{
      title: 'Inventory',
      flag: true
    }, {
      title: 'Variation',
      flag: false
    }, {
      title: 'Price',
      flag: false
    }, {
      title: 'Comment',
      flag: false
    }, {
      title: 'Location',
      flag: false
    }],
    productUnits: null,
    productTitleLimit: 100,
    variations: ['Size', 'Color']
  },
  broadcastingFlag: false,
  passwordLimit: 8,
  alertFlag: false
}
