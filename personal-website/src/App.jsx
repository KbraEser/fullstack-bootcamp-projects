import React, { useEffect } from "react";
import ThemeContextProvider from "./context/ThemeContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import ApiDemo from "./components/ApiDemo.jsx";
import Footer from "./components/Footer.jsx";
import { LangProvider } from "./context/LanguageContext.jsx";
import { ToastContainer } from "react-toastify";
export default function App() {
  useEffect(() => {}, []);
  return (
    <div className="flex min-h-screen flex-col">
      <ThemeContextProvider>
        <LangProvider>
          {/* CONTENT */}
          <main className="flex-grow mx-4 md:mx-16 lg:mx-32">
            <Navbar />
            <Header />
            <Hero />
            <Skills />
            <Profile />
            <Projects />
            <ApiDemo />
          </main>

          {/* FOOTER */}
          <Footer />
        </LangProvider>
      </ThemeContextProvider>
      <ToastContainer />
    </div>
  );
}
