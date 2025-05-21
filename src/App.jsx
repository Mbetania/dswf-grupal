import { Routes, Route } from "react-router-dom";
import JsonList from "./pages/JsonList";

export const App = () => {
  return (
    <Routes>
      <Route path="/json" element={<JsonList />} />
    </Routes>
  );
}

