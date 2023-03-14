import { User } from './User.model';

export type ReduxState = {
  user: UserState;
};

type UserState = User;
