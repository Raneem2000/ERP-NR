import { createContext, useState, ReactNode } from "react";

interface MenuContextProps {
  open: boolean, 
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}
export const Menu = createContext<MenuContextProps | undefined>(undefined);
export default function MenuContext({children}: {children: ReactNode})
{
const [open, setIsOpen] = useState<boolean>(true);

const MenuContextValue: MenuContextProps = {
  open,
  setIsOpen,
}
return <Menu.Provider value={MenuContextValue}>{children}</Menu.Provider>
}