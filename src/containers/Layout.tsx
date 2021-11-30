import React from "react";
import Header from "@components/Header.jsx";

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
};
