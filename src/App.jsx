import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await fetch(
        "https://moviereviews-1.onrender.com/movies"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const result = await response.json();
      console.log(result);
      setMovies(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {/* */}
      <Navigation setMovies={setMovies} movies={movies}></Navigation>
      <Movies movies={movies}></Movies>
      <Footer />
    </div>
  );
}

export default App;
