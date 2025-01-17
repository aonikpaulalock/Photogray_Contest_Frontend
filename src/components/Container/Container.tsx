import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`h-full w-full max-w-[1220px] mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;