import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Cuenta} from '../../models/Cuenta';
import {BackendService} from '../../service/backend.service';

@Component({
  selector: 'app-conceptos',
  templateUrl: './conceptos.component.html',
  styleUrls: ['./conceptos.component.scss']
})
export class ConceptosComponent implements OnInit {

  constructor(private  fb: FormBuilder,
              private backendService: BackendService) { }
    formConcepto: FormGroup  = this.fb.group({
        tipo: new FormControl(1),
        nombre: new FormControl('')
    });
  tipoColumnas: string[] = ['concepto', 'tipo'];
    listCuentas: Cuenta[] = [];
  ngOnInit(): void {
    this.listarCuentas();
  }

    guardar() {
        console.log(this.formConcepto.value);
        this.backendService.callBackEnd(this.formConcepto.value, 'crearConcepto', false).subscribe(s => {
            this.listarCuentas();
        });
    }
    listarCuentas() {

        this.backendService.callBackEndNoParam( 'listaGastos').subscribe(lista => {
            this.listCuentas = lista.body;
        });
    }
}
