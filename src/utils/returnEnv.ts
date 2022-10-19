import { EnvironmentEnum } from '@enums/environment';
import { ErrorEnum } from '@enums/erros';

export const returnEnv = (env: EnvironmentEnum): string => {
  switch (env) {
    case EnvironmentEnum.ENVIRONMENT:
      return String(process.env.NEXT_PUBLIC_ENVIRONMENT);
    case EnvironmentEnum.TOKEN_PREFIX:
      return String(process.env.NEXT_PUBLIC_TOKEN_PREFIX);
    case EnvironmentEnum.DB_URL:
      return String(process.env.NEXT_PUBLIC_DB_URL);
    case EnvironmentEnum.APP_NAME:
      return String(process.env.NEXT_PUBLIC_APP_NAME);
    case EnvironmentEnum.APP_URL:
      return String(process.env.NEXT_PUBLIC_APP_URL);
    default:
      return ErrorEnum.ENV_NOT_FOUND;
  }
};
