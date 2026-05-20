import { useContext } from "react";
import { UserContext } from "./UserContext";

export function useUser() {
  const context = useContext(UserContext);
  if (!context) throw new Error("useUser는 UserProvider 안에서만 써야 해!");
  return context;
}
