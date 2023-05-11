// Packages
import { FC, useEffect } from "react";

// Interfaces
import { GeneralProps } from "./interfaces";

// Styles
import useStyles from "./toast.styles";

const Toast: FC<GeneralProps> = ({
  children,
  variant = "success",
  timeHidden,
  close,
}) => {
  const { StyledToast } = useStyles();

  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: 0 });

    setTimeout(() => {
      close();
    }, timeHidden);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <StyledToast variant={variant}>{children}</StyledToast>;
};

export default Toast;
