export interface Cuenta {
    readonly id: number;
    nombre: string;
    tipo: number;
}
export type mesesNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

export const Meses = new Map<mesesNumber, string>( [
    [ 1, 'Enero'],
    [ 2, 'Febrero'],
    [ 3, 'Marzo'],
    [ 4, 'Abril'],
    [ 5, 'Mayo'],
    [ 6, 'Junio'],
    [ 7, 'Julio'],
    [ 8, 'Agosto'],
    [ 9, 'Septiembre'],
    [ 10, 'Octubre'],
    [ 11, 'Noviembre'],
    [ 12, 'Diciembre'],
] );

