import Content from "./components/content/Content";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import "./index.css";

function App() {
  return (
    <div className="mainWrapper">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
