import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { forwardRef } from "react";

type Props = Pick<MuiButtonProps, "onClick" | "children" | "variant">;

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <MuiButton {...props} ref={ref} />;
});

Button.displayName = "Button";
