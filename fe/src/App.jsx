import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./title/Title";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import NotFound from "./NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Title />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
