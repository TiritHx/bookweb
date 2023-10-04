import  {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';
import Adding from './pages/Adding';

const router = createBrowserRouter ([
  { path: '/', element: <Home />},
  { path: '/add', element: <Adding />},
])

function App() {  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
