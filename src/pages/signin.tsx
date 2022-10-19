import React from 'react';

import { NextPage } from 'next';

import HeaderTitle from '@components/HeaderTitle';
import { AsideSignin } from '@components/Signin/Aside';
import { FormSignin } from '@components/Signin/Form';

import { useDeviceType } from '@hooks/useDeviceType';

import { CustomBoxCenterPage, CustomBoxFullWidth } from '@styles/pages/shared';

const Signin: NextPage = () => {
  const { type } = useDeviceType();
  return (
    <CustomBoxFullWidth device={type}>
      <CustomBoxCenterPage>
        <HeaderTitle title="Signin" />
        <AsideSignin />
        <FormSignin />
      </CustomBoxCenterPage>
    </CustomBoxFullWidth>
  );
};

export default Signin;
