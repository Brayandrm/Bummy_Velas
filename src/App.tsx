import { useEffect, useState } from "react";
import "./App.css";
import Content from "./components/content/Content";
import { ROUTES_PATH } from "./components/routes/routesPath";
import Catalog from "./components/Catalog/Catalog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {

    if (window.location.pathname === "/" || window.location.pathname === "") {
      window.history.replaceState({}, "", ROUTES_PATH.home);
      setPath(ROUTES_PATH.home);
    }

    const onLocationChange = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);
    return () => window.removeEventListener("popstate", onLocationChange);
  }, []);

  const renderPage = () => {
    switch (path) {
      case ROUTES_PATH.home:
        return <Content />;
      case ROUTES_PATH.catalog:
        return <Catalog />;
      default:
        return <Content />;
    }
  };

  return (
    <div className="mainWrapper">
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;
