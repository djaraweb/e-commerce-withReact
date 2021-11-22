import React from "react";

type TitleProps = {
  title: string;
};
export const Title = ({ title }: TitleProps) => (
  <span className="title">
    <strong>{title}</strong>
  </span>
);
