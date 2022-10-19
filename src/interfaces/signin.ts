import SigninModel from '@models/signin';

export type SigninInterface = {
  signin: ({ email, password }: SigninModel) => Promise<SigninModel>;
};
