import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import Home from "./components/Home";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Sdk from "./components/Sdk";
import Web3 from "./components/Web3";
import Tablet from "./components/Tablet";
import Aishopping from "./components/Aishopping";
import Marques from "./components/Marques";



function App() {
  return (
    <>
      <Home />
      <Aishopping />
      <div className="-mt-5">
      {/* <div className="border border-slate-500 w-screen top-full -ml-10 my-5 opacity-40"></div> */}
          <div className="flex space-x-3 w-full pb-4">
            <div className="text-slate-100 font-extralight text-sm mr-5 py-2 whitespace-nowrap">
              <span className="w-32">KYC&AUDITED BY:</span>
            </div>
            <div>
              <Marques />
            </div>
          </div></div>
      
      <Tablet/>
      <Web3/>
      <Sdk/>
      <ContactUs />
    <Footer/>
    </>
  );
}

export default App;
