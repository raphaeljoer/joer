import Image from 'next/image';
import { Box } from '@mui/material';
import * as styles from './styles';

export function Footer() {
  return (
    <Box component="footer" sx={styles.container}>
      <Image
        src="/assets/footer/boticario.svg"
        width={238}
        height={80}
        objectFit="contain"
        objectPosition="center"
      />
    </Box>
  );
}
