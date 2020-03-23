import React from "react";
import { Spinner } from "sancho";

interface IProps {
  className?: string;
}

export const Preloader: React.FC<IProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <Spinner center />
    </div>
  );
};
