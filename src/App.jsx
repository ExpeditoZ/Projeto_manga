import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";
import MangaDetails from "./pages/MangaDetails";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import PrivateRoute from "./providers/PrivateRoute";

function App() {
  return (
    <div style={{ paddingBottom: "70px" }}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <PrivateRoute><Home /></PrivateRoute>
        } />
        <Route path="/catalog" element={
          <PrivateRoute><Catalog /></PrivateRoute>
        } />
        <Route path="/catalog/:category" element={
          <PrivateRoute><Catalog /></PrivateRoute>
        } />
        <Route path="/favorites" element={
          <PrivateRoute><Favorites /></PrivateRoute>
        } />
        <Route path="/profile" element={
          <PrivateRoute><Profile /></PrivateRoute>
        } />
        <Route path="/manga/:id" element={
          <PrivateRoute><MangaDetails /></PrivateRoute>
        } />
        <Route path="*" element={<Navigate to='/' replace />} />
      </Routes>
      <NavBar />
    </div>
  );
}

export default App;
