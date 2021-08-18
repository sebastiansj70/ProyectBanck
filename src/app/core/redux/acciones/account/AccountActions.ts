import {
    ACCOUNT_LIST,
    AccountActionTypes,
    SAVE_ACCOUNT
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