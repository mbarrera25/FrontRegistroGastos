import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Cuenta} from '../../models/Cuenta';
import {BackendService} from '../../service/backend.service';
import Swal from 'sweetalert2';

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
  tipoColumnas: string[] = ['concepto', 'tipo', 'accion'];
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

    borrar(concepto: any) {
        Swal.fire({
            text: 'estas seguro que deseas eliminar este concepto?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'si!'
        }).then((result) => {
            if (result.isConfirmed) {
        console.log(concepto);
        this.backendService.callBackEnd(concepto, 'deleteGasto', false).subscribe(resp => {
            if (resp.status === 200) {
                Swal.fire({
                    icon: 'success',
                    text: 'se ha eliminado el concepto con exito...'
                });
                this.listarCuentas();
            } else if (resp.status === 400) {
                Swal.fire({
                    icon: 'error',
                    text: resp.body
                });
            }
        });
    }
        }
    );
            }
}
