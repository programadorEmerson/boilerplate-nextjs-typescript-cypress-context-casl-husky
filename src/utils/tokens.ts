import { EnvironmentEnum } from '@enums/environment';
import { RoutesEnum } from '@enums/routes';

import { returnEnv } from '@utils/returnEnv';

const ENVIRONMENT = returnEnv(EnvironmentEnum.ENVIRONMENT);

const TOKEN_SUFIX = ENVIRONMENT ? '-dev' : '';
const TOKEN_PREFIX = `${ENVIRONMENT}${TOKEN_SUFIX}`;
export const COOKIE_CONSENT = `${TOKEN_PREFIX}-cookie-consent`;
const TEMP_TOKEN_PREFIX = `register_${ENVIRONMENT}${TOKEN_SUFIX}`;
export { TOKEN_PREFIX, TEMP_TOKEN_PREFIX };

export const ssrRedirectLogin = {
  redirect: {
    destination: RoutesEnum.LOGIN,
    permanent: false,
  },
};

export const ssrRedirectDashboard = {
  redirect: {
    destination: RoutesEnum.INITIAL,
    permanent: false,
  },
};

export const ssrDefaultReturn = {
  props: {},
};
