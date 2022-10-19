import { ConstantsEnum } from '@enums/constants';

import { useMediaQuery, useTheme } from '@mui/material';

export function useDeviceType(): { type: string } {
  const isMobile = !useMediaQuery(useTheme().breakpoints.up('sm'));
  return { type: isMobile ? ConstantsEnum.MOBILE : ConstantsEnum.OTHERS };
}
