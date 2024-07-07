import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";
("./components/Navbar");
import CTA from "./pages/cta";

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <HomePage />
      <CTA />
    </div>
  );
}
