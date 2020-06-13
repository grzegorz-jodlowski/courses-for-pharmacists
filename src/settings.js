export const api = {
  url: '//' + window.location.hostname + (window.location.hostname === 'localhost' ? ':8000/api' : '/api'),
  courses: 'courses',
  orders: 'orders',
  newsletter: 'newsletter',
  auth: 'auth',
};
