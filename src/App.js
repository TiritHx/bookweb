import  {createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home from './pages/Home';
import Add from './pages/Add';
import RootLayout from './pages/Root';
import BookPage from './pages/BookPage';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      { path: '/', element: <Home />},
      { path: 'add', element: <Add />},
      { path: ':title', element: <BookPage/>},
      { path: 'add/:title', element: <BookPage/>}
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