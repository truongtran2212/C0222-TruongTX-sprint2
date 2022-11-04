import {User} from '../../user/model/user';

export interface Customer {
  id?: number;
  isDelete?: number;
  name?: string;
  phoneNumber?: string;
  address?: string;
  gender?: number;
  status?: number;
  email?: string;
  appUser?: User;
}
