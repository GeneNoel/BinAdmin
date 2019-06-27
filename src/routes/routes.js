import Pages from '../pages';

export const publicRoutes = [
  {
    path: '/auth',
    exact: true,
    component: Pages.AuthPage,
  },
];

export const protectedRoutes = [
  {
    path: '/',
    exact: true,
    component: Pages.Home,
  },
  {
    path: '/collectors',
    exact: true,
    component: Pages.CollectorsPage,
  },
  {
    path: '/bins',
    exact: true,
    component: Pages.BinsPage,
  },

  {
    path: '/settings',
    exact: true,
    component: Pages.SettingsPage,
  },
];
