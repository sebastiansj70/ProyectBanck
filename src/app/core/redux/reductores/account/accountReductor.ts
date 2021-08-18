import { Account, DataAccount } from 'app/feature/Account/models/Account';
import { ACCOUNT_LIST, AccountActionTypes, SAVE_ACCOUNT } from '../../acciones/account/AccountActionTypes';
import { EstadoAccount } from '../../modelo/EstadoAccount';

const initialState: EstadoAccount = {
    accountLists: <Account>({}),
    account: <DataAccount>({}),

};

export default function (
    state = initialState,
    action: AccountActionTypes
): EstadoAccount {
    switch (action.type) {
        case ACCOUNT_LIST: {
            return {
                ...state,
                accountLists: action.payload
            };
        }
        case SAVE_ACCOUNT: {
            console.log(typeof action.payload);

            return {
                ...state,
                account: action.payload
            };
        }

        default:
            return state;
    }
}