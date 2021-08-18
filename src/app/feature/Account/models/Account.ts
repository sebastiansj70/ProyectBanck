export interface Account {
    cedula: string;
    nombres: string;
    apellidos: string;
    cuentas: [];
}

export interface DataAccount {
    cuentaId: string,
    tipoCuenta: string,
    estado: number,
    valorDisponible: number,
    movimientos: []
}