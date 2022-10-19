import { ConstantsEnum } from '@enums/constants';

import { DeviceType } from '@interfaces/device';

import { Paper, styled } from '@mui/material';

export const CustomAsideSignin = styled('aside')<DeviceType>`
  display: ${({ device }) => {
    const mobile = device === ConstantsEnum.MOBILE;
    return mobile ? 'none' : 'flex';
  }};
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
`;

export const CustomAsideCard = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 0;
`;
