import { 
  createBrowserRouter, 
  //Route
  createRoutesFromElements, 
  RouterProvider,
  BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import HomeRootLayout from "./layouts/Home/HomeRootLayout";
import AdminRootLayout from "./layouts/Admin/AdminRootLayout";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Form from "./components/Form";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
import EditPage from "./layouts/Admin/EditPage";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<HomeRootLayout />}></Route>
//       <Route path="/admin" element={<AdminRootLayout />}>
//         {/* <Route path="/dashboard" element={<Dashboard />} />
//         <Route path="/login" element={<Login />}></Route>
//         <Route path="/register" element={<Register />}></Route> */}
//       </Route>
//       <Route path="/login" element={<LoginForm />}></Route>
//       <Route path="/register" element={<RegisterForm />}></Route>
//       <Route path="/form" element={<Form />} />
//     </> 
//   )
// )

function App() {
  return (
    <>
      {/* <RouterProvider router={router}/> */}
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<HomeRootLayout />} />
            <Route path="/edit" element={<EditPage />} />
            <Route path="/admin/login" element={<LoginForm />} />
            <Route element={<PrivateRoute />}>
              <Route path="/admin" element={<AdminRootLayout />} />
            </Route>
          </Routes> 
        </AuthProvider>
      </Router>
    </>
   
  );
}

export default App;
