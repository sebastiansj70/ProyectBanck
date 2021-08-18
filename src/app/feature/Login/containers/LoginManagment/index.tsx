import './index.css';
import * as PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from 'assets/img/logo.png';

interface LoginManagmentProps {
  email: string;
  pass: string;
  saveStatusLogin: (status: string) => void;
  status: string;
}

export const LoginManagment: React.FC<LoginManagmentProps> = ({
  email,
  pass,
  saveStatusLogin,
  status,
}) => {
  useEffect(() => {}, [status]);

  const [statusLocal, setstatusLocal] = useState('');
  const [emailUser, setEmailUser] = useState('');
  const [passwordUser, setPasswordUser] = useState('');

  const handleLogin = () => {
    if (emailUser === email && passwordUser === pass) {
      setstatusLocal('ok');
      saveStatusLogin('ok');
    } else {
      saveStatusLogin('');
    }
  };

  return (
    <div className="ContenedorLogin">
      <div className="contentFrom">
        <div className="contentImage">
          <img src={logo} className="imgLogo" />
        </div>
        <b className="tittleLogin">Iniciar sesión</b>
        <div className="contenedorInput">
          <a className="textFrom">E-mail</a>
          <input
            className="inputEmail"
            onChange={(event) => {
              setEmailUser(event.target.value);
            }}
          />
        </div>
        <div className="contenedorInput">
          <a className="textFrom">Password</a>
          <input
            className="inputEmail"
            type="Password"
            onChange={(event) => {
              setPasswordUser(event.target.value);
            }}
          />
        </div>
        <div className="contentbtnlogin">
          <div className="contentbtn" onClick={() => handleLogin()}>
            <Link
              to={statusLocal === 'ok' ? '/accounts' : '/'}
              className="btnIngresar"
            >
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginManagment.propTypes = {
  email: PropTypes.string.isRequired,
  pass: PropTypes.string.isRequired,
  saveStatusLogin: PropTypes.func.isRequired,
};
