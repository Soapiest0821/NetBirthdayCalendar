import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import { UserContext } from "./context/UserContext";
import type { User } from "./types/User.ts";

import Main from "./pages/Main";
import Me from "./pages/Me";

function App() {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {
        <Routes>
          <Route path="/" element={<Main user={user} />} />
          <Route path="/me" element={<Me />} />
        </Routes>
      }
    </UserContext.Provider>
  );
}

export default App;
