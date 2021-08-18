import { Account, DataAccount } from 'app/feature/Account/models/Account';

export interface EstadoAccount {
  accountLists: Account;
  account: DataAccount;
  email: string;
  pass: string;
  status: string;
}
