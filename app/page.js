import Navbar from "./components/navbar";
import HomePage from "./pages/homepage";
("./components/Navbar");

export default function Page() {
  return (
    <div className="bg-primary">
      <Navbar />
      <HomePage />
      <h1 className="text-white">My page</h1>
    </div>
  );
}
