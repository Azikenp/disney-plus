import Header from "./components/Header";
import './app.css'
import Slider from "./components/Slider";
import ProductionHouse from "./components/ProductionHouse";
import GenreMovieList from "./components/GenreMovieList";

export default function App() {
  return (
    <div className="">
      <Header />

      <Slider />

      <ProductionHouse />

      <GenreMovieList />
    </div>
  );
}
