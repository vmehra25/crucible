import React from "react";
import UiCard from "./UiCard";

export const ResponseCard = ({
  children,
  styles = "mb-12 mr-16 ml-8 bg-transparent w-fit",
  extra_styles = "",
}: {
  children: React.ReactNode;
  styles?: string;
  extra_styles?: string;
}) => {
  return (
    <div className="w-100 flex">
      <UiCard styles={`${styles} ${extra_styles}`}>{children}</UiCard>
    </div>
  );
};
