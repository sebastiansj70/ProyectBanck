import { Account, DataAccount } from 'app/feature/Account/models/Account';

export const ACCOUNT_LIST = 'ACCOUNT_LIST';
export const SAVE_ACCOUNT = 'SAVE_ACCOUNT';

interface AcctionAccountList {
    type: typeof ACCOUNT_LIST;
    payload: Account;
}

interface AcctionSaveAccoun {
    type: typeof SAVE_ACCOUNT;
    payload: DataAccount;
}

export type AccountActionTypes =
    | AcctionAccountList
    | AcctionSaveAccoun;