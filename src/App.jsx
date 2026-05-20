import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Prescription from "./pages/Prescription";
import HealthPackages from "./pages/HealthPackages";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <div style={styles.wrapper}>
      <Navbar />

      <main style={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/prescription" element={<Prescription />} />
          <Route path="/health-packages" element={<HealthPackages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },

  main: {
    flex: 1,
    overflow: "hidden",
  },
  
};

export default App;