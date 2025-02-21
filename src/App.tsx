import Contact from "./component/contact"
import Header from "./component/header"
import Project from "./component/project"
import Skills from "./component/skills"
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Aos from 'aos';
export default function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
  <section>
  <Header />
  <Project />
  <Skills/>
  <Contact />
  <Toaster toastOptions={{ position: "top-center", duration: 4000 }} />

  </section>
  )
}