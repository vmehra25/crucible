import { Card, CardBody } from "@nextui-org/react";
import React from "react";

const UiCard = ({
  children,
  styles = "",
}: {
  children: React.ReactNode;
  styles: string;
}) => {
  return (
    <Card className={`${styles}`}>
      <CardBody>{children}</CardBody>
    </Card>
  );
};

export default UiCard;
