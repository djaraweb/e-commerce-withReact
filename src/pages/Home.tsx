import { Title } from "@components/Title.tsx";
import React from "react";

import "@sass/Home.scss";
import logoReact from "@logos/react.svg";

export const Home = () => {
  return (
    <div className="home-container">
      <Title title="Welcome Project with React and TypeScript" />
      <img src={logoReact} alt="logo React" height="36" width="36" />
    </div>
  );
};
