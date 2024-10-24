import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
  showHeaderFooter: boolean;
}


export interface IStateProps {
  isMenuOpen: boolean,
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

