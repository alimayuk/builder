import { BrowserRouter as Router, Route, Outlet, Routes } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import About from "./pages/About";
import Subcontractors from "./pages/Subcontractors";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ProjectDetail from "./components/ProjectDetail/ProjectDetail";

function App() {
  const Layout = () =>{
    return (
      <div className='app'>
        <Navbar />
        <Outlet/>
        <Footer />
      </div>
    )
  }
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/subcontractors" element={<Subcontractors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;