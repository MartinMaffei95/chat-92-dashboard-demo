import { EndpointUser, User } from '../models';

export const userFromApi = (user: EndpointUser) => {
  const apiUser: User = {
    username: user.username,
    password: user.password,
    email: user.email,
    number: user.number,
  };
  return apiUser;
};
