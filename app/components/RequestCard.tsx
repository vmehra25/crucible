import React from "react";
import UiCard from "./UiCard";

export const RequestCard = ({
  children,
  styles = "my-3 mr-8 ml-16 bg-blue-100 w-fit",
  extra_styles = "",
}: {
  children: React.ReactNode;
  styles?: string;
  extra_styles?: string;
}) => {
  return (
    <div className="w-full flex flex-row-reverse">
      <UiCard styles={`${styles} ${extra_styles}`}>{children}</UiCard>
    </div>
  );
};
