import { Button as MuiButton, ButtonProps } from '@mui/material';
import * as styles from './styles';

type Props = ButtonProps & {
  children: React.ReactNode;
};

export const Button = ({ children, ...props }: Props) => {
  return (
    <MuiButton
      variant="contained"
      color="primary"
      size="large"
      sx={styles.button}
      {...props}
    >
      {children}
    </MuiButton>
  );
};
