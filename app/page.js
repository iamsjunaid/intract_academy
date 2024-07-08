import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";
("./components/Navbar");
import CTA from "./pages/cta";
import Projects from "./pages/projects";
import Dictionary from "./pages/dictionary";
import Footer from "./pages/footer";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <HomePage />
      <CTA />
      <Projects />
      <Dictionary />
      <Footer />
    </div>
  );
}
