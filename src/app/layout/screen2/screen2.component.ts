import { Component, OnInit } from '@angular/core';
import {iRegistro} from '../../models/Registro';

@Component({
  selector: 'app-screen2',
  templateUrl: './screen2.component.html',
  styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {
    iye: string[] = ['fecha', 'tipo', 'concepto', 'monto'];
    ingresos: iRegistro[];
    egresos: iRegistro[];
  constructor() { }

  ngOnInit() {

  }
  public getIngresosYEgresos(mes:number){

  }

}
