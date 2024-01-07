import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { SignIn } from '@/components'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignIn onSubmit={() => {}} />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>You can open this page!</div>,
  },
  {
    path: '/friends',
    element: <div>FRIENDS</div>,
  },
]

const routes = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: privateRoutes,
  },
  ...publicRoutes,
])

function PrivateRoutes() {
  const isAuth = false

  return isAuth ? <Outlet /> : <Navigate to={'login'} />
}

export function Router() {
  return <RouterProvider router={routes} />
}
