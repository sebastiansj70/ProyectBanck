import {
  accountListAsync,
  saveAccount,
} from 'app/core/redux/acciones/account/AccountActions';
import { AccountManagment } from '../containers/AccountManagment';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';

import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.account;
};

export const AccountManagmentProvider = connect(mapStateToProps, {
  accountList: accountListAsync,
  saveAccount,
})(AccountManagment);
