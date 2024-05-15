import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';
import Home from 'pages/Home/Home';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/catalog" element={<Catalog />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
    </Routes>
  );
};
