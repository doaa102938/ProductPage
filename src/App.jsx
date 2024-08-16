import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/About";
import Collections from "./Pages/Collections";
import Contact from "./Pages/Contact";
import Men from "./Pages/Men";
import Women from "./Pages/Women/Women";
import Layout from "./Pages/Layout";
import './App.css'

function App(props) {



  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Collections />} />
            <Route path="/Men" element={< Men />} />
            <Route path="/Women" element={< Women />} />
            <Route path="/About" element={< About />} />
            <Route path="/Contact" element={< Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </main>
  )
}

export default App
