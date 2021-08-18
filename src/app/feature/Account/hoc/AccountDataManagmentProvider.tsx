import { AccountDataManagment } from '../containers/AccountDataManagment';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import {
  accountListAsync,
  saveStatusLogin,
} from 'app/core/redux/acciones/account/AccountActions';
import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.account;
};

export const AccountDataManagmentProvider = connect(mapStateToProps, {
  accountList: accountListAsync,
  saveStatusLogin,
})(AccountDataManagment);
