import { Account, DataAccount } from 'app/feature/Account/models/Account';

export const ACCOUNT_LIST = 'ACCOUNT_LIST';
export const SAVE_ACCOUNT = 'SAVE_ACCOUNT';
export const SAVE_STATUS_LOGIN = 'SAVE_STATUS_LOGIN';

interface AcctionAccountList {
    type: typeof ACCOUNT_LIST;
    payload: Account;
}

interface AcctionSaveAccoun {
    type: typeof SAVE_ACCOUNT;
    payload: DataAccount;
}

interface AcctionSaveStatusLogin {
    type: typeof SAVE_STATUS_LOGIN;
    payload: string;
}

export type AccountActionTypes =
    | AcctionAccountList
    | AcctionSaveAccoun
    | AcctionSaveStatusLogin;