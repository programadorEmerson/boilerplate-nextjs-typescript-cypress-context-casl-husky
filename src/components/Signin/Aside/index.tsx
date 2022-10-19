import React, { FC } from 'react';

import Image from 'next/image';

import {
  CustomAsideCard,
  CustomAsideSignin,
} from '@components/Signin/Aside/styles';

import { ImagesEnum } from '@enums/images';

import { useDeviceType } from '@hooks/useDeviceType';

export const AsideSignin: FC = () => {
  const { type } = useDeviceType();
  return (
    <CustomAsideSignin device={type}>
      <CustomAsideCard>
        <Image
          src={ImagesEnum.ILUSTRATION}
          alt={ImagesEnum.ALT_ILUSTRATION}
          width={800}
          height={800}
        />
      </CustomAsideCard>
    </CustomAsideSignin>
  );
};
