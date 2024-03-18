import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { NotFound } from "../components/NotFound";
import { UserProfile } from "../components/UserProfile";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };