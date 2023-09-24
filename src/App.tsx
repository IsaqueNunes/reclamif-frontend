import axios from 'axios';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  defer,
} from 'react-router-dom';

import { About } from './pages/About';
import { Header } from './components/Header';
import Home from './pages/Home';
import Issue from './pages/Issue';
import Issues from './pages/Issues';
import NewIssue from './pages/NewIssue';
import Register from './pages/Entry/components/Register';
import Login from './pages/Entry/components/Login';
import { AuthProvider } from './utils/useAuth';
import { issueLoader } from './loaders/IssueLoader';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={'/'} element={<AuthProvider><Header /></AuthProvider>}>

      <Route index element={<Home />} />
      <Route path={'/new-issue'} element={<NewIssue />} />
      <Route
        path={'/issues'}
        element={<Issues />}
        loader={({ request }) => {
          const issues = axios.get('http://localhost:3000/issue/all', {
            signal: request.signal,
          }).then((response) => response.data);

          return defer({ issues });
        }}
      />
      <Route path={'/issue/:issueId'} loader={issueLoader} element={<Issue />} />
      <Route path={'/about'} element={<About />} />
      <Route
        path={'/register'}
        element={<Register />}
      />
      <Route
        path={'/login'}
        element={<Login />}
      />
    </Route>
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
