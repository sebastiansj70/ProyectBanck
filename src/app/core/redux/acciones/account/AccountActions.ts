import {
    ACCOUNT_LIST,
    AccountActionTypes,
    SAVE_ACCOUNT,
    SAVE_STATUS_LOGIN
} from './AccountActionTypes';
import { Account, DataAccount } from 'app/feature/Account/models/Account';
import { AccountRepository } from 'app/core/api/account.repositorio';
import { Dispatch } from 'react';

export function accountList(
    accountList: Account
): AccountActionTypes {
    return {
        type: ACCOUNT_LIST,
        payload: accountList
    };
}

export function accountListAsync() {
    return function (dispacth: Dispatch<AccountActionTypes>) {
        AccountRepository.consultarAccount()
            .then((respuesta) => (
                dispacth(
                    accountList(respuesta.data)
                )
            )
            );
    };
}

export function saveAccount(
    account: DataAccount
): AccountActionTypes {
    return {
        type: SAVE_ACCOUNT,
        payload: account
    };
}

export function saveStatusLogin(
    account: string
): AccountActionTypes {
    return {
        type: SAVE_STATUS_LOGIN,
        payload: account
    };
}
