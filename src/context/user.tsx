import { createContext, useState } from 'react';

import UserModel from '@models/user';

export interface UserProps {
  user: UserModel | null;
  updateUser: (user: UserModel) => void;
}

type UserProviderProps = {
  children: React.ReactNode;
};

const UserContext = createContext({} as UserProps);

function UserProvider({ children }: UserProviderProps) {
  const [user, setUser] = useState<UserModel | null>(null);

  const updateUser = (user: UserModel) => setUser(user);

  const shared = { user, updateUser };

  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
