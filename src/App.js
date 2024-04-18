import './App.scss'; // Importing CSS file for styling the App component.

// Importing necessary components from React Router DOM for routing.
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Importing page components from the pages folder.
import { Home, MealDetails, Error, Category } from "./pages/index";

// Importing Header and Sidebar components.
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

// Functional component named App.
function App() {
  return (
    // BrowserRouter component for handling routing.
    <BrowserRouter>
      {/* Header component */}
      <Header />
      {/* Sidebar component */}
      <Sidebar />
      {/* Routes for defining page routes */}
      <Routes>
        {/* Route for home page */}
        <Route path = "/" element = {<Home />} />
        {/* Route for meal details page */}
        <Route path = "/meal/:id" element = {<MealDetails />} />
        {/* Route for category page */}
        <Route path = "/meal/category/:name" element = {<Category />} />
        {/* Route for handling unknown paths */}
        <Route path  = "*" element = {<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Exporting the App component.

