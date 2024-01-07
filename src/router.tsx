import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

import { SignIn } from '@/components'
import { Decks } from '@/pages/decks'

const publicRoutes: RouteObject[] = [
  {
    path: '/login',
    element: <SignIn onSubmit={() => {}} />,
  },
]

const privateRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Decks />,
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
  const isAuth = true

  return isAuth ? <Outlet /> : <Navigate to={'login'} />
}

export function Router() {
  return <RouterProvider router={routes} />
}
