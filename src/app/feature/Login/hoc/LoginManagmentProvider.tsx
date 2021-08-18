import { EstadoGeneral } from 'app/core/redux/modelo/EstadoGeneral';
import { LoginManagment } from '../containers/LoginManagment';
import { connect } from 'react-redux';
import { saveStatusLogin } from 'app/core/redux/acciones/account/AccountActions';


const mapStateToProps = (state: EstadoGeneral) => {
  return state.account;
};

export const LoginManagmentProvider = connect(mapStateToProps, {
  saveStatusLogin,
})(LoginManagment);
