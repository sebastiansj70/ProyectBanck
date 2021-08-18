import './index.css';
import { Account, DataAccount } from '../../models/Account';
import PropTypes from 'prop-types';
import React from 'react';

interface AccountDataManagmentProps {
  accountLists: Account;
  accountList: () => void;
  account: DataAccount;
}

interface transaction {
  id: number;
  cuentaId: string;
  tipoCuenta: string;
  fechaTransaccion: number;
  montoTransaccion: number;
  descripcion: string;
}

export const AccountDataManagment: React.FC<AccountDataManagmentProps> = ({
  accountLists,
  accountList,
  account,
}) => {

  return (
    <div className="data-account">
      <div className="contenet-account">
        <h3 className="data-account-info">Información</h3>
        <div className="body-data-account">
          <div className="body-info-account">
            <div className="user-info-account">
              <h5 className="tittle-data-account">Nombre:</h5>
              <h5 className="name-account">
                {`${accountLists.nombres} ${accountLists.apellidos}`}
              </h5>
            </div>
            <div className="user-info-account">
              <h5 className="tittle-data-account">Cedula:</h5>
              <h5 className="name-account">{accountLists.cedula} </h5>
            </div>

            <div className="user-info-account">
              <h5 className="tittle-data-account">Cuenta:</h5>
              <h5 className="name-account">{account.cuentaId}</h5>
            </div>
            <div className="user-info-account">
              <h5 className="tittle-data-account">Tipo de cuenta:</h5>
              <h5 className="name-account">{account.tipoCuenta}</h5>
            </div>
            <div className="user-info-account">
              <h5 className="tittle-data-account">Estado:</h5>
              <h5 className="name-account">
                {account.estado ? 'Activo' : 'Inactivo'}
              </h5>
            </div>
            <div className="user-info-account">
              <h5 className="tittle-data-account">Valor disponible:</h5>
              <h5 className="name-account">{account.valorDisponible}</h5>
            </div>
          </div>
          <div className="body-describe-info">
            <h3>Transacciones </h3>

            {account.movimientos ? (
              <>
                {Object.keys(account.movimientos).length > 0 ? (
                  account.movimientos.map((transaccion: transaction) => {
                    return (
                      <div
                        className="transaction-account"
                        key={transaccion.cuentaId}
                      >
                        <div className="content-transaction">
                          <div className="user-info-account">
                            <h5 className="tittle-data-account">
                              Numero de cuenta:
                            </h5>
                            <h5 className="name-account">
                              {transaccion.cuentaId}
                            </h5>
                          </div>
                          <div className="user-info-account">
                            <h5 className="tittle-data-account">
                              Tipo de cuenta:
                            </h5>
                            <h5 className="name-account">
                              {transaccion.tipoCuenta}
                            </h5>
                          </div>
                          <div className="user-info-account">
                            <h5 className="tittle-data-account">Fecha:</h5>
                            <h5 className="name-account">
                              {transaccion.fechaTransaccion}
                            </h5>
                          </div>
                          <div className="user-info-account">
                            <h5 className="tittle-data-account">valor:</h5>
                            <h5 className="name-account">
                              {transaccion.montoTransaccion}
                            </h5>
                          </div>
                          <div className="user-info-account">
                            <h5 className="tittle-data-account">
                              Descripcion:
                            </h5>
                            <h5 className="name-account">
                              {transaccion.descripcion}
                            </h5>
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <>Cargando</>
                )}
              </>
            ) : (
              <>Cargando</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

AccountDataManagment.propTypes = {
  accountLists: PropTypes.any.isRequired,
  accountList: PropTypes.func.isRequired,
  account: PropTypes.any.isRequired,
};
