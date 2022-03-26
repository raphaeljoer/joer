import { SnackbarOrigin, SnackbarProviderProps } from 'notistack';

const origin: SnackbarOrigin = {
  vertical: 'top',
  horizontal: 'right'
};

type SnackBar = Omit<SnackbarProviderProps, 'children'>;

export const snackProps: SnackBar = {
  maxSnack: 3,
  autoHideDuration: 4000,
  hideIconVariant: false,
  anchorOrigin: origin
};
