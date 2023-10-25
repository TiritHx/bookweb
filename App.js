import  {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';
import Adding from './pages/Adding';
import RootLayout from './pages/Root';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <Home />},
      { path: 'add', element: <Adding />}
    ]
  }
])

function App() {  
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
