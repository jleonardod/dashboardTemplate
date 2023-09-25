import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/auth/Login"
import Error404 from "./pages/Error404"
import Register from "./pages/auth/Register"
import Home from "./pages/admin/Home"
import LayoutAdmin from "./layouts/LayoutAdmin"
import Chat from "./pages/admin/Chat"
import LayoutAuth from "./layouts/LayoutAuth"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutAuth />}>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Register />} />
        </Route>
        <Route path="/Home" element={<LayoutAdmin />}>
          <Route index element={<Home />} />
          <Route path="chat" element={<Chat />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
