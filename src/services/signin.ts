import { SigninInterface } from '@interfaces/signin';

import SigninModel from '@models/signin';

import { fakeRequest } from '@utils/simulateApi';

import { ApiService } from './api';

class SigninService implements SigninInterface {
  constructor(private api = new ApiService()) {}

  async signin(dataLogin: SigninModel): Promise<SigninModel> {
    const resultSignin = await fakeRequest(dataLogin);
    return resultSignin;
  }
}

export default SigninService;
