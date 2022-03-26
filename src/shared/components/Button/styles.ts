import { Theme } from '@mui/material';
import { SxProps } from '@mui/system';

export const button: SxProps<Theme> = {
  mt: 2,
  width: '100%',
  color: 'secondary.main',
  borderRadius: 4,
  fontWeight: 700,
  ':hover': {
    bgcolor: 'primary.dark',
    transform: 'scale(0.98)',
    transition: 'all 0.3s ease-out'
  },
  '&.Mui-disabled': {
    color: 'primary.main',
    opacity: 0.8
  }
};
