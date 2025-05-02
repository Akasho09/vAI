import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin  } from "./pages/Signin";
import { Dashboard} from "./pages/dashboard"
import { AdminDashboard } from "./pages/admindashboard";
import Complete from "./pages/complete";
import CreditHistoryPage from "./pages/creditHistory"
import AllUserPosts from "./pages/Activity";

function App() {
  return (
    <>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Dashboard/>}></Route>
  <Route path="/signup" element={<Signup/>}></Route>
  <Route path="/signin" element={<Signin/>}></Route>
  <Route path="/dashboard" element={<Dashboard/>}></Route>
  <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
  <Route path="/complete-profile" element={<Complete/>}></Route>
  <Route path="/credit-history" element={<CreditHistoryPage />}></Route>
  <Route path="/activity" element={<AllUserPosts />}></Route>

</Routes>
</BrowserRouter>
    </>
  )
}

export default App