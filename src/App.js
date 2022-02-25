import React from "react";
// import Clock from "./Routing/Clock/Clock";
import Header from "./Routing/Header";
import Footer from "./Routing/Footer";
import Contact from "./Routing/Contact";
import Home from "./Routing/Home";
import About from "./Routing/About";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import PageNotFound from "./Routing/PageNotFound";
import {Products} from "./Routing/Products";
import Mobile from "./Routing/MobileList";
import Laptop from "./Routing/LaptopList";

class App extends React.Component {

    render(){
        return (
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                    <Route path="/about" element={<About />}></Route>
                    <Route path="/products" element={<Products />}>
                    <Route path="mobile" element={<Mobile />} />
                    <Route path="laptop" element={<Laptop />} />
                    </Route>
                    <Route path="/*" element={<PageNotFound/>}></Route>
                </Routes>
                <Footer />
            </Router>
        );
    }
}

export default App;

{/* <Header23 />
           <Homenot />
           <About />
           <Contact />
           <Footer /> */}