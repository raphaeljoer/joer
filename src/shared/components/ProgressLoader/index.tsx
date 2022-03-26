import { Box, CircularProgress } from '@mui/material';
import * as styles from './styles';

export const ProgressLoader = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress size={180} />
    </Box>
  );
};
