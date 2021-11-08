import React from "react";

type TitleProps = {
  title: string;
};
const Title = ({ title }: TitleProps) => (
  <span>
    <strong>{title}</strong>
  </span>
);

export default Title;
