import Layout from 'Layout/Layout';
import GlobalProvider from 'context/GlobalProvider/GlobalProvider';
import Catalog from 'pages/Catalog/Catalog';
import Favorites from 'pages/Favorites/Favorites';
import Home from 'pages/Home/Home';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <GlobalProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </GlobalProvider>
  );
};
