import { Box } from '@mui/material';
import Image from 'next/image';
import * as styles from './styles';

export function Header() {
  return (
    <Box component="header" sx={styles.container}>
      <Box sx={styles.element}>
        <Image
          src="/assets/header/vector_plants_2.webp"
          width={210}
          height={210}
          objectFit="fill"
          objectPosition="bottom right"
        />
      </Box>
      <Box sx={styles.logoContainer}>
        <Box sx={styles.logo}>
          <Image
            src="/assets/header/logo-smdv.svg"
            width={112}
            height={112}
            objectFit="contain"
            objectPosition="center"
          />
        </Box>
      </Box>
      <Box sx={styles.element}>
        <Image
          src="/assets/header/vector_plants_1.webp"
          layout="fill"
          objectFit="cover"
          objectPosition="top left"
        />
      </Box>
    </Box>
  );
}
