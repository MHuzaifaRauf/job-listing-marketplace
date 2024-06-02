import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage,  {jobLoader} from './pages/JobPage';

const router = createBrowserRouter(
  createRoutesFromElements(

  <Route path='/' element={<MainLayout/>}>
  <Route index element= {<Home />} />
  <Route path='/jobs' element= {<JobsPage />} />
  <Route path='/jobs/:id' element= {<JobPage />} loader={jobLoader} />
  <Route path='*' element= {<NotFoundPage />} />
  </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
};