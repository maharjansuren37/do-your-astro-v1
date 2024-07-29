import { 
  createBrowserRouter, 
  Route, 
  createRoutesFromElements, 
  RouterProvider 
} from "react-router-dom";

import HomeRootLayout from "./layouts/Home/HomeRootLayout";
import AdminRootLayout from "./layouts/Admin/AdminRootLayout";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Form from "./components/Form";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeRootLayout />}></Route>
      <Route path="/admin" element={<AdminRootLayout />}>
        {/* <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route> */}
      </Route>
      <Route path="/login" element={<LoginForm />}></Route>
      <Route path="/register" element={<RegisterForm />}></Route>
      <Route path="/form" element={<Form />} />
    </> 
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
   
  );
}

export default App;
