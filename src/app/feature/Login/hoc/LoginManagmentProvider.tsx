import { saveStatusLogin } from 'app/core/redux/acciones/account/AccountActions';
import { LoginManagment } from '../containers/LoginManagment';
import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';

import { connect } from 'react-redux';

const mapStateToProps = (state: EstadoGeneral) => {
  return state.account;
};

export const LoginManagmentProvider = connect(mapStateToProps, {
  saveStatusLogin,
})(LoginManagment);
