import { createContext, useContext } from "react";
import { useStudySession } from "../hooks/useStudySession";
const Context = createContext(null);
export function AtlasProvider({ children }) {
  const session = useStudySession();
  return <Context.Provider value={session}>{children}</Context.Provider>;
}
export function useAtlas() {
  const value = useContext(Context);
  if (!value) throw new Error("AtlasProvider is required");
  return value;
}
