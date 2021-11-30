import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MesesTypesPipes} from './MesesTypesPipes';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        MesesTypesPipes
    ],
    exports:[
        MesesTypesPipes
    ]
})
export class PipesModule {}
