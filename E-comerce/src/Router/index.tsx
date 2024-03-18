import { BrowserRouter, Routes ,Route } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";


const Router: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element = {<App />} />
            <Route path="/login" element = {<Login />} />
            <Route path="/signUp" element = {<SignUp />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;