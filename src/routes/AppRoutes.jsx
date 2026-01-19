import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import App from '../App';

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Projects = lazy(() => import('../pages/Projects.jsx'));
const ProjectDetail = lazy(() => import('../pages/ProjectDetail'));
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

const pageLoader = (
  <div className="min-h-screen bg-[#1e293b] text-slate-100 flex items-center justify-center">
    <div className="animate-pulse font-mono text-sm">Loading...</div>
  </div>
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <Suspense fallback={pageLoader}>
        <NotFound />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={pageLoader}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: '/about',
        element: (
          <Suspense fallback={pageLoader}>
            <About />
          </Suspense>
        ),
      },
      {
        path: '/projects',
        element: (
          <Suspense fallback={pageLoader}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: '/projects/:slug',
        element: (
          <Suspense fallback={pageLoader}>
            <ProjectDetail />
          </Suspense>
        ),
      },
      {
        path: '/dashboard',
        element: (
          <Suspense fallback={pageLoader}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: '/contact',
        element: (
          <Suspense fallback={pageLoader}>
            <Contact />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={pageLoader}>
        <NotFound />
      </Suspense>
    ),
  }
]);