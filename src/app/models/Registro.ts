import {Cuenta} from './Cuenta';

export interface iRegistro {
    readonly id: number;
    fecha: string;
    concepto: string;
    mes: number;
    monto: number;
    tipo: number;
    total: number;
    observaciones: number;
    cuenta: Cuenta;
}
