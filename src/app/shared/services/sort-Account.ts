import { DataAccount } from '../../feature/Account/models/Account';

export const sortAccount = (accounts: Array<any>) => {
  console.log(accounts);
  accounts.length > 0
    ? accounts.sort((a, b) => a.valorDisponible - b.valorDisponible)
    : '';
};
