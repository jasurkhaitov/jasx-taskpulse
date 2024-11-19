import { createContext, Dispatch, SetStateAction } from 'react';

interface GlobalContextType {
  user: boolean;
  setUser: Dispatch<SetStateAction<boolean>>;
}

export const MyGlobalContext = createContext<GlobalContextType>({
  user: false,
  setUser: () => {},
});