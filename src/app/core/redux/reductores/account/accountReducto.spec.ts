import { Account, DataAccount } from 'app/feature/Account/models/Account';
import { EstadoAccount } from 'app/core/redux/modelo/EstadoAccount';
import accountReductor from './accountReductor';
import { saveAccount } from 'app/core/redux/acciones/account/AccountActions';

describe('Reductor Account', () => {
    it('Guardar cuenta seleccionada', () => {
        const estadoInicial: EstadoAccount = {
            accountLists: <Account>({}),
            account: <DataAccount>({}),
        };

        const newAccount: DataAccount = {
            cuentaId: '1111 1111 1111 1111',
            tipoCuenta: 'Cuenta de Ahorros',
            estado: 1,
            valorDisponible: 250000,
            movimientos: []
        };

        const estadoEsperado: EstadoAccount = {
            ...estadoInicial,
            account: newAccount
        };

        const nuevoEstado = accountReductor(
            estadoInicial,
            saveAccount(newAccount)
        );

        expect(nuevoEstado).toStrictEqual(estadoEsperado);
    });
});