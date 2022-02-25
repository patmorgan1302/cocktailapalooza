import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Catalog from "./routes/cocktail_directory";
import Search from "./routes/search";
import Random from "./routes/random";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="catalog" element={<Catalog />} />
        <Route path="search" element={<Search />} />
        <Route path="random" element={<Random />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);