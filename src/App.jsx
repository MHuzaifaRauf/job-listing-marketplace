import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage,  {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

export default function App() {
  // Adding a new job to server
  const addJob = async (newJob) => {
    
    const res = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    })
    return;
  };

  // Delete a job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: 'DELETE',
    });
    return;
  }

  // Updating a job
  const editJob = async(job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    })
    return;
  }
  
  const router = createBrowserRouter(
    createRoutesFromElements(
  
    <Route path='/' element={<MainLayout/>}>
    <Route index element= {<Home />} />
    <Route path='/jobs' element= {<JobsPage />} />
    <Route path='/add-job' element= {<AddJobPage addJobSubmit={addJob}/>} />
    <Route path='/edit-job/:id' element= {<EditJobPage editJobSubmit={editJob} />} loader={jobLoader} />
    <Route path='/jobs/:id' element= {<JobPage deleteJob={deleteJob}/>} loader={jobLoader} />
    <Route path='*' element= {<NotFoundPage />} />
    </Route>
    )
  );
  
  return <RouterProvider router={router} />;
};