import {Cuenta} from './Cuenta';

// tslint:disable-next-line:class-name
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
