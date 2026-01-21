import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="grow p-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
