import { useContext } from 'react';

import { UserContext, UserProps } from '@context/user';

export const useUserContext = (): UserProps => {
  return useContext(UserContext);
};
