import { TextField as MuiTextField, TextFieldProps as MuiTextFieldProps } from "@mui/material";

type Props = Pick<MuiTextFieldProps, "children" | "label" | "value" | "size" | "type" | "onChange">;

export const Field = (props: Props) => {
  return <MuiTextField {...props} InputLabelProps={{ shrink: true }} />;
};
