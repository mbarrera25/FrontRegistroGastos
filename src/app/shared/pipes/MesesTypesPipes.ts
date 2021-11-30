import {Pipe, PipeTransform} from '@angular/core';
import {Meses, mesesNumber} from '../../models/Cuenta';

@Pipe({
    name: 'MesesTypesPipes'
})
export class MesesTypesPipes implements PipeTransform {
    transform(value: mesesNumber, ...args: 'mes'[]): string {
        const type = args[ 0 ];
        const result = Meses.get( value ) || '';

        return result;
    }

}
