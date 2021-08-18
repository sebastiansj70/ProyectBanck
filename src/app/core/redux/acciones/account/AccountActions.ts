import {
    AccountActionTypes,
    ACCOUNT_LIST,
    SAVE_ACCOUNT
} from "./AccountActionTypes";
import { Dispatch } from "react";
import { Account,DataAccount } from "app/feature/Account/models/Account";
import { AccountRepository } from "app/core/api/account.repositorio";

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
                console.log(respuesta),
                dispacth(
                    accountList(respuesta.data)
                )
            )
            )
    }
}

export function saveAccount(
    account: DataAccount
): AccountActionTypes {
    return {
        type: SAVE_ACCOUNT,
        payload: account
    };
}