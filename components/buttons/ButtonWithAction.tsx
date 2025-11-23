"use client";

import type { PropsWithChildren, FC } from "react";
import Button from "@/components/buttons/Button";

const ButtonWithAction: FC<PropsWithChildren> = ({ children, ...resp }) => {
  const handleClick = (): void => {
    //Custom action logic here
  };
  return (
    <Button isLink={false} onClick={handleClick} {...resp}>{children}</Button>
  );
}
export default ButtonWithAction;