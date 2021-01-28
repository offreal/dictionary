type TRoutes = {
  [key: string]: string
}

const routes: TRoutes = {
  main: '/main',
  dictionary: '/dictionary',
  quiz: '/quiz',
  notfound: '*',
}

export default routes
