import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";
("./components/Navbar");
import CTA from "./pages/cta";
import Projects from "./pages/projects";

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <HomePage />
      <CTA />
      <Projects />
    </div>
  );
}
