export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'home',
    title: 'Home',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'home',
        title: 'Bienvenido',
        type: 'item',
        url: '/home',
        icon: 'feather icon-home'


      }
    ]
  },
  {
    id: 'navigation',
    title: 'Dashboard',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'dashboard',
        title: 'Reportes',
        type: 'item',
        url: '/analytics',
        icon: 'feather icon-pie-chart'
      }
    ]
  },
  // {
  //   id: 'ui-component',
  //   title: 'Ui Component',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'basic',
  //       title: 'Component',
  //       type: 'collapse',
  //       icon: 'feather icon-box',
  //       children: [
  //         {
  //           id: 'button',
  //           title: 'Button',
  //           type: 'item',
  //           url: '/component/button'
  //         },
  //         {
  //           id: 'badges',
  //           title: 'Badges',
  //           type: 'item',
  //           url: '/component/badges'
  //         },
  //         {
  //           id: 'breadcrumb-pagination',
  //           title: 'Breadcrumb & Pagination',
  //           type: 'item',
  //           url: '/component/breadcrumb-paging'
  //         },
  //         {
  //           id: 'collapse',
  //           title: 'Collapse',
  //           type: 'item',
  //           url: '/component/collapse'
  //         },
  //         {
  //           id: 'tabs-pills',
  //           title: 'Tabs & Pills',
  //           type: 'item',
  //           url: '/component/tabs-pills'
  //         },
  //         {
  //           id: 'typography',
  //           title: 'Typography',
  //           type: 'item',
  //           url: '/component/typography'
  //         }
  //       ]
  //     }
  //   ]
  // },
  {
    id: 'Authentication',
    title: 'Autenticación',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'signup',
        title: 'Sign up',
        type: 'item',
        url: '/auth/signup',
        icon: 'feather icon-at-sign',
        target: true,
        breadcrumbs: false
      },
      // {
      //   id: 'signupagrupacion',
      //   title: 'Sign up Agrupación',
      //   type: 'item',
      //   url: '/auth/signupagrupacion',
      //   icon: 'feather icon-at-sign',
      //   target: true,
      //   breadcrumbs: false
      // },
      {
        id: 'signin',
        title: 'Sign in',
        type: 'item',
        url: '/auth/signin',
        icon: 'feather icon-log-in',
        target: true,
        breadcrumbs: false
      }
    ]
  },
  // {
  //   id: 'chart',
  //   title: 'Chart',
  //   type: 'group',
  //   icon: 'icon-group',
  //   children: [
  //     {
  //       id: 'apexchart',
  //       title: 'ApexChart',
  //       type: 'item',
  //       url: '/chart',
  //       classes: 'nav-item',
  //       icon: 'feather icon-pie-chart'
  //     }
  //   ]
  // },
  {
    id: 'forms & tables',
    title: 'Agrupaciones',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'forms',
        title: 'Registrar Agrupación',
        type: 'item',
        url: '/forms',
        classes: 'nav-item',
        icon: 'feather icon-file-plus'
      },
      {
        id: 'tables',
        title: 'Lista Agrupaciones',
        type: 'item',
        url: '/tables',
        classes: 'nav-item',
        icon: 'feather icon-list'
      }
    ]
  },
  {
    id: 'other',
    title: 'Usuarios',
    type: 'group',
    icon: 'icon-group',
    children: [
      {
        id: 'sample-page',
        title: 'Usuarios',
        type: 'item',
        url: '/sample-page',
        classes: 'nav-item',
        icon: 'feather icon-user'
      },
      // {
      //   id: 'menu-level',
      //   title: 'Menu Levels',
      //   type: 'collapse',
      //   icon: 'feather icon-menu',
      //   children: [
      //     {
      //       id: 'menu-level-2.1',
      //       title: 'Menu Level 2.1',
      //       type: 'item',
      //       url: 'javascript:',
      //       external: true
      //     },
      //     {
      //       id: 'menu-level-2.2',
      //       title: 'Menu Level 2.2',
      //       type: 'collapse',
      //       children: [
      //         {
      //           id: 'menu-level-2.2.1',
      //           title: 'Menu Level 2.2.1',
      //           type: 'item',
      //           url: 'javascript:',
      //           external: true
      //         },
      //         {
      //           id: 'menu-level-2.2.2',
      //           title: 'Menu Level 2.2.2',
      //           type: 'item',
      //           url: 'javascript:',
      //           external: true
      //         }
      //       ]
      //     }
      //   ]
      // }
    ]
  }
];
