import Header from "./components/Header";
import './app.css'
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenreMovieList from "./components/GenreMovieList";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="">
      <Header />

      <Slider />

      <ProductionHouse />

      <GenreMovieList />

      <Footer />
    </div>
  );
}
