import  {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';
import Adding from './pages/Adding';
import RootLayout from './pages/Root';
import BookPage from './pages/BookPage';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <Home />},
      { path: 'add', element: <Adding />},
      { path: ':title', element: <BookPage/>}
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
