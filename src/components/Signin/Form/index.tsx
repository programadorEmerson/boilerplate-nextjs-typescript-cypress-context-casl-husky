import React, { FC, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { useFormik } from 'formik';

import * as yup from 'yup';

import { AlertNotification } from '@components/AlertNotification';
import { Loading } from '@components/Loading';
import {
  CustomDividerSignin,
  CustomFormSignin,
  CustomStackSignin,
  CustonButtonSignin,
  LinkActions,
} from '@components/Signin/Form/styles';

import { ConstantsEnum } from '@enums/constants';
import { EnvironmentEnum } from '@enums/environment';
import { ErrorEnum } from '@enums/erros';
import { FeatureCodeEnum } from '@enums/feature';
import { ImagesEnum } from '@enums/images';
import { MessagesEnum } from '@enums/messages';
import { RoutesEnum } from '@enums/routes';

import { useDeviceType } from '@hooks/useDeviceType';
import { useUserContext } from '@hooks/useUserContext';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import SigninModel from '@models/signin';

import SigninService from '@services/signin';

import { createFullRule } from '@utils/manageRules';
import { returnEnv } from '@utils/returnEnv';

const initialValues: SigninModel = {
  email: '',
  password: '',
};

const validationSchema = yup.object({
  email: yup
    .string()
    .email(ErrorEnum.INVALID_EMAIL)
    .required(ErrorEnum.EMPTY_EMAIL),
  password: yup.string().required(ErrorEnum.EMPTY_PASSWORD),
});

export const FormSignin: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const { push } = useRouter();
  const { type } = useDeviceType();
  const { updateUser } = useUserContext();

  const formik = useFormik({
    initialValues,
    validationSchema,
    async onSubmit(loginRequest: SigninModel) {
      try {
        setIsLoading(true);
        const signin = new SigninService();
        const resultSignin = await signin.signin(loginRequest);
        updateUser({
          name: 'user teste',
          email: resultSignin.email,
          rules: createFullRule(FeatureCodeEnum.FC_ALL),
        });
        push(RoutesEnum.INITIAL);
      } catch (error) {
        AlertNotification({
          type: 'error',
          message: ErrorEnum.ERROR_SIGNIN,
        });
      } finally {
        setIsLoading(false);
      }
    },
  });

  return (
    <CustomFormSignin
      onSubmit={formik.handleSubmit}
      onBlur={formik.handleBlur}
      device={type}
    >
      <CustomStackSignin spacing={3} device={type}>
        <Loading trigger={isLoading} message={MessagesEnum.REQUEST_LOGIN} />
        <Image
          src={ImagesEnum.LOGO}
          alt={ImagesEnum.ALT_LOGO}
          width={150}
          height={150}
        />
        {type !== ConstantsEnum.MOBILE && (
          <>
            <Typography variant="h5" gutterBottom>
              {returnEnv(EnvironmentEnum.APP_NAME)}
            </Typography>
            <CustomDividerSignin>Informe suas credenciais</CustomDividerSignin>
          </>
        )}
        <TextField
          sx={{ marginTop: '100px' }}
          size="small"
          fullWidth
          id="email"
          name="email"
          label="E-mail"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextField
          size="small"
          fullWidth
          id="password"
          name="password"
          label="Senha"
          style={{
            fontWeight: 700,
            backgroundColor: 'transparent',
            width: '100%',
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          type={showPassword ? 'text' : 'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <CustonButtonSignin type="submit" fullWidth disabled={isLoading}>
          Entrar
        </CustonButtonSignin>
        <LinkActions>Esqueceu sua senha?</LinkActions>
        <LinkActions onClick={async () => push('#')}>
          Não possui conta? Cadastre-se.
        </LinkActions>
      </CustomStackSignin>
    </CustomFormSignin>
  );
};
