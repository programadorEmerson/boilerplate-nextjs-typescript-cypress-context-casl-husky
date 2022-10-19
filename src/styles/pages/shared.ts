import { ConstantsEnum } from '@enums/constants';
import { ImagesEnum } from '@enums/images';

import { DeviceType } from '@interfaces/device';

import { Box, Paper, styled } from '@mui/material';

export const CustomBoxFullWidth = styled(Box)<DeviceType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: ${({ device }) => {
    const mobile = device === ConstantsEnum.MOBILE;
    return mobile ? 'none' : `url(${ImagesEnum.BACKGROUND_IMAGE})`;
  }};
  background-size: cover;
`;

export const CustomBoxCenterPage = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1440px;
  width: 100%;
  height: 100vh;
`;
