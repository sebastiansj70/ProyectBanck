import React from 'react';
import './index.css';
import chip from 'assets/img/chip.png';

interface CardAccountProps {
  cuentaId: string;
  tipoCuenta: string;
  nombres: string;
  apellidos: string;
}

export const CardAccount: React.FC<CardAccountProps> = ({
  cuentaId,
  tipoCuenta,
  nombres,
  apellidos,
}) => {
  return (
    <div className="card-account">
      <div className="card-header">
        <img className="card-acount-chip" src={chip} />
      </div>
      <div className="card-body">
        <h5 className="account-id">{cuentaId}</h5>
        <h5 className="account-tipe">{tipoCuenta}</h5>
      </div>
      <div className="card-footer">
        <h5 className="account-name">{`${nombres} ${apellidos}`}</h5>
        <h5 className="account-name">{'04/30'}</h5>
      </div>
    </div>
  );
};
