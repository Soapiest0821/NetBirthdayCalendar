import { useState } from "react";
import { UserContext } from "./UserContext.tsx";
import type { User } from "../types/User";

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
