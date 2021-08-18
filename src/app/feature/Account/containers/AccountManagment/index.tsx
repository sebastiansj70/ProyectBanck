import './index.css';
import * as PropTypes from 'prop-types';
import { Account, DataAccount } from '../../models/Account';
import React, { useEffect } from 'react';
import { CardAccount } from '../../components/Card/';
import { Link } from 'react-router-dom';

interface AccountManagmentProps {
  accountLists: Account;
  accountList: () => void;
  saveAccount: (account: DataAccount) => void;
}

export const AccountManagment: React.FC<AccountManagmentProps> = ({
  accountLists,
  accountList,
  saveAccount,
}) => {
  useEffect(() => {
    accountList();
  }, []);

  const handleViewAccount = (account: DataAccount) => {
    saveAccount(account);
  };

  return (
    <div className="account">
      <h2 className="tittle-account">Mis Cuentas</h2>
      <div className="body-account">
        {accountLists.cuentas ? (
          <>
            {Object.values(accountLists.cuentas).map((account: any) => {
              return (
                <Link
                  to="/accounts/DataAccount"
                  className="buttom-card"
                  onClick={() => handleViewAccount(account)}
                  key={account.cuentaId}
                >
                  <CardAccount
                    cuentaId={account.cuentaId}
                    tipoCuenta={account.tipoCuenta}
                    nombres={accountLists.nombres}
                    apellidos={accountLists.apellidos}
                  />
                </Link>
              );
            })}
          </>
        ) : (
          <>cargando</>
        )}
      </div>
    </div>
  );
};

AccountManagment.propTypes = {
  accountLists: PropTypes.any.isRequired,
  accountList: PropTypes.func.isRequired,
  saveAccount: PropTypes.func.isRequired,
};
