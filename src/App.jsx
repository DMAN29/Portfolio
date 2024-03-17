import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import Home3 from "./pages/Home3";
import Home4 from "./pages/Home4";
import Page404 from "./components/404/Page404";
import BlogDetails from "./components/Blog/BlogDetails";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout2 from "./components/Layout/Layout2";
import { useState } from "react";

function App() {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);
  const [personDetail, setPersonDetail] = useState();
  const u_id = "65b3a22c01d900e96c4219ae";
  useEffect(() => {
    fetch(`https://portfolio-backend-30mp.onrender.com/api/v1/get/user/${u_id}`)
      .then((response) => response.json())
      .then((data) => {
        setPersonDetail(data);
      })
      .catch((e) => console.error("Error fetching data ", e));
  }, []);
  if (!personDetail) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout personDetail={personDetail} />}>
          <Route index element={<Home personDetail={personDetail} />} />
          <Route
            path="home-v3"
            element={<Home3 personDetail={personDetail} />}
          />
          <Route
            path="home-v4"
            element={<Home4 personDetail={personDetail} />}
          />
          <Route path="*" element={<Page404 />} />
          <Route path="blog/blog-details" element={<BlogDetails />} />
        </Route>
        <Route
          path="/home-v2"
          element={<Layout2 personDetail={personDetail} />}
        >
          <Route index element={<Home2 personDetail={personDetail} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
