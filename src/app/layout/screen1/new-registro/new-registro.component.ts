import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Cuenta} from '../../../models/Cuenta';
import {BackendService} from '../../../service/backend.service';
import {DatePipe} from '@angular/common';
import {iRegistro} from '../../../models/Registro';
import {async} from 'rxjs/internal/scheduler/async';

@Component({
  selector: 'app-new-registro',
  templateUrl: './new-registro.component.html',
  styleUrls: ['./new-registro.component.scss']
})
export class NewRegistroComponent implements OnInit {
    formRegistro: FormGroup  = this.fb.group({
        id: new FormControl(0),
        fecha: new FormControl(''),
        concepto: new FormControl(''),
        mes: new FormControl(''),
        monto: new FormControl(0),
        tipo: new FormControl(1),
        total: new FormControl(0),
        observaciones: new FormControl(''),
        cuenta: new FormControl(0)
    });
    @Input() id: number;
    @Output() submited: EventEmitter<void> = new EventEmitter();
  constructor(private  fb: FormBuilder, public datepipe: DatePipe,
              private backendService: BackendService) {
  }
    listCuentas: Cuenta[];
    registro: iRegistro;

    async ngOnInit() {
        this.listarCuentas(1);
     this.consultarRegistro(this.id);


  }

    async consultarRegistro<T extends (iRegistro) >(id: number) {
        const params = {
            id: id
        };
        await this.backendService.callBackEnd(params, 'consultaRegistro').subscribe(data => {
            this.registro = data.body;
            if (this.registro) {
                this.listarCuentas(this.registro.tipo)
                this.formRegistro.patchValue({
                    ...this.registro,
                    cuenta: this.registro.cuenta.id
                });
                console.log(this.formRegistro);
            }
        });
    }

    listarCuentas(tipo: number) {
        const param = {
            tipo: tipo
        };
        console.log(param);
        this.backendService.callBackEnd(param, 'listaGatosPorTipo').subscribe(lista => {
            this.listCuentas = lista.body;
        });
    }
    guardar() {
        const date =  this.datepipe.transform(new Date(this.formRegistro.controls.fecha.value), 'dd/MM/yyyy').toString();
       this.formRegistro.patchValue( {
           fecha: date,
           // tslint:disable-next-line:radix
          // monto: parseInt(this.formRegistro.controls.monto.value.toString()),
           tipo: this.formRegistro.controls.tipo == null ? 1 : this.formRegistro.controls.tipo.value
       });
       if (this.formRegistro.controls.id.value) {
           this.backendService.callBackEnd(this.formRegistro.value, 'EditarRegistroDiarios').subscribe(lista => {

           });
       } else {
           this.backendService.callBackEnd(this.formRegistro.value, 'CrearRegistroDiarios').subscribe(lista => {

           });
       }
        console.log(this.formRegistro.controls.monto.value);
        this.submited.emit();

        this.formRegistro = this.fb.group({
            id: new FormControl(''),
            fecha: new FormControl(''),
            tipo: new FormControl(''),
            concepto: new FormControl(''),
            monto: new FormControl(''),
            total: new FormControl(''),
            observaciones: new FormControl(''),
            cuenta: new FormControl('')
        });
    }


}
