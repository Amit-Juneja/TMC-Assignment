import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ReactElement } from "react";

interface TMCButton extends ButtonProps {
  width: string;
  background: string;
  top: string;
  position: string;
}

const StyledButton = styled(Button)<TMCButton>(() => ({
  borderRadius: 0,
}));

export default function TMCButton(props: TMCButton): ReactElement {
  return (
    <StyledButton
      sx={{
        background: `${props.background}`,
        width: `${props.width}`,
        px: 2,
        position: `${props.position}`,
        top: `${props.top}`,
      }}
      {...props}
    />
  );
}
