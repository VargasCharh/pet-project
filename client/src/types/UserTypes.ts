export type UserType = {
  id: number;
  name: string;
  email: string;
  linkgit: string;
  linklinked: string;
  score: number;
  avatar: string;
  role: string;
  gitAuth: boolean;
  confirm: boolean;
};

export type UserUpdateType = {
  id: number;
  data: AxiosUserUpdateType;
};

export type AxiosUserUpdateType = {
  name: string;
  email: string;
  linkgit: string;
  linklinked: string;
  avatar: string;
};

export type FetchingUserType = {
  status: 'pending';
  data: undefined;
};

export type FetchedUserType = {
  status: 'success';
  data?: UserType;
};

export type FailedUserType = {
  status: 'guest';
  data?: { message: 'faild' };
};

export type UserSingUpType = {
  name: string;
  email: string;
  password: string;
};

export type UserLoginType = Omit<UserSingUpType, 'name'>;

export type UserStateType = {
  data: UserType | undefined;
  status: 'pending' | 'success' | 'guest';
}; // FetchingUserType | FetchedUserType | FailedUserType;
