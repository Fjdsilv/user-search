import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Alert from "./components/Alert";
import {
  Home,
  About,
  NoPage,
  User,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="container mx-auto px-3 pb-12">
          <Alert />
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/about"  element={<About />} />
            <Route path="/user/:login"  element={<User />} />
            <Route path="/noPage"  element={<NoPage />} />
            <Route path="*"  element={<NoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
export default App