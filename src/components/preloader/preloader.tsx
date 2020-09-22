import React from "react";
import { Spinner } from "sancho";

type IProps = {
  className?: string;
};

export const Preloader: React.FC<IProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <Spinner center />
    </div>
  );
};
