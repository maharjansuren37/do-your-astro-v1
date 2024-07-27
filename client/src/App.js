import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Admin from "./pages/Admin";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Header from "./layouts/Header";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* <Route path="/" element={<RootLayout />}>
      
      </Route>
      <Route path="/admin" element={<Admin />}>

      </Route> */}
      <Route path="/" element={<AdminLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
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
    <>
      <RouterProvider router={router}/>
    </>
   
  );
}

export default App;
