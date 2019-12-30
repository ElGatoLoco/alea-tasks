const routes = {
  dragAndDrop: '/',
  modal: '/modal',
  form: '/form',
} as const;

export type Route = keyof typeof routes;
export type RouteUrl = typeof routes[Route];

export default routes;
