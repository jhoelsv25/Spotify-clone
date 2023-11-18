import { Route, Routes } from "react-router-dom";
import { Favorite } from "./spotify/pages/Favorite";
import { Album } from "./spotify/pages/Album";
import { PlayList } from "./spotify/pages/PlayList";
import { Library } from "./spotify/pages/Library";
import { Search } from "./spotify/pages/Search";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<PlayList />} />
      <Route path="/search" element={<Search />} />
      <Route path="/album" element={<Album />} />
      <Route path="/library" element={<Library />} />
      <Route path="/playlist/:id" element={<PlayList />} />
      <Route path="/favorite" element={<Favorite />} />
    </Routes>
  );
};
