import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Admin from "./pages/Admin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
      
      </Route>
      <Route path="/admin" element={<Admin />}>
  
      </Route>
    </> 
  )
  // [
  //   {
  //     path: '/',
  //     element: <RootLayout />
  //   },
  //   {
  //     path: '/admin',
  //     element: <Admin />
  //   }
  // ]
)

function App() {
  return (
   <RouterProvider router={router}/>
  );
}

export default App;
