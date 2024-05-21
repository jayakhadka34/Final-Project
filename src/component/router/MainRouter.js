import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AdminDashboard from "../admin/AdminDashboard";
import AdminLayout from "../layout/AdminLayout";

import PageNotFound from "../PageNotFound";
import UserLayout from "../layout/Userlayout";

import AboutUs from "../user/AboutUs";
import BookAppointment from "../user/BookAppointment";

import Bridalservices from "../user/Bridalservices";

import MakeUpClasses from "../user/MakeUpClasses";
import MakeUpServices from "../user/MakeUpServices";
import BookNow from "../dashboard/BookNow";

import Login from "../user/Login";
import Signup from "../user/Signup";
import OrderNow from "../dashboard/OrderNow";
import Dasboard from "../dashboard/Dasboard";

export const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route>
     
     <Route path="/login" element={<Login/>}/>
      <Route path="/" element={<UserLayout />}/>
     
      

      <Route path="/makeupclass" element={<MakeUpClasses />} />
      <Route path="/makeupservices" element={<MakeUpServices />} />
      <Route path="/bridalpackages" element={<Bridalservices />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/bookanappointment" element={<BookAppointment />} />
      <Route path="booknow" element={<BookNow/>}/>
      <Route path="ordernow" element={<OrderNow/>}/>


      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<AdminDashboard />} />
       
      </Route>
     
      <Route path="/signup" element={<Signup/>}/>
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);
