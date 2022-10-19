import { ConstantsEnum } from '@enums/constants';

import { DeviceType } from '@interfaces/device';

import { Button, Divider, Stack, styled } from '@mui/material';

export const CustomFormSignin = styled('form')<DeviceType>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ device }) => {
    const mobile = device === ConstantsEnum.MOBILE;
    return mobile ? '100%' : '50%';
  }};
  height: 100%;
`;

export const CustomStackSignin = styled(Stack)<DeviceType>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: ${({ device }) => {
    const mobile = device === ConstantsEnum.MOBILE;
    return `0 ${mobile ? 2 : 7}rem`;
  }};
`;

export const CustomDividerSignin = styled(Divider)`
  color: ${({ theme }) => theme.palette.grey[600]};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 25px 0 20px 0;
`;

export const CustonButtonSignin = styled(Button)`
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.primary.main};
  margin: 20px 0;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.light};
  }
`;

export const LinkActions = styled('a')`
  background-color: transparent;
  color: ${({ theme }) => theme.palette.grey[600]};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  border: 0;
  padding: 2px;
  transition: 0.4s;
  outline: none;

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }

  & span {
    color: ${({ theme }) => theme.palette.grey[900]};
    margin-right: 7px;

    &:not(:disabled):hover {
      cursor: Default;
    }
  }
`;
