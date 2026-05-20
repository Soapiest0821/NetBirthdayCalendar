import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { UserContext } from "./context/UserContext.tsx";
import { getUser } from "./api/user.ts";
import type { User } from "./types/User.ts";

import Main from "./pages/Main";
import Me from "./pages/Me";

function App() {
  const [user, setUser] = useState<User | null>(null); // user도 꺼내야 해!

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {" "}
      {/* ← 이게 없었어! */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
