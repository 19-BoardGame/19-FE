import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Title from "./main/Title";
import Main from "./main/Main";
import Login from "./auth/Login";
import SignUp from "./auth/SignUp";
import NotFound from "./NotFound";

function App() {
  const [user, setUser] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Main /> : <Title />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
