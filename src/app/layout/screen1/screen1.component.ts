import { Component, OnInit } from '@angular/core';
import {iRegistro} from '../../models/Registro';
import {Subscription} from 'rxjs';
import {tryCatch} from 'rxjs/internal-compatibility';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BackendService} from '../../service/backend.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistroDialogComponent } from './new-registro/registro.dialog/registro.dialog.component';
import {DatePipe} from '@angular/common';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-screen1',
  templateUrl: './screen1.component.html',
  styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
    listRegisto?: iRegistro[]

    private _listSubscription: Subscription
    columnasregistro: string[] = ['fecha','tipo','cliente',"ingreso",'egreso','total','observaciones','editar'];
    formFiltros: FormGroup  = this.fb.group({
        filtro: new FormControl(''),
        desde: new FormControl(''),
        hasta: new FormControl(''),
        mes: new FormControl(''),
        tipo: new FormControl(1),
        cuenta: new FormControl(''),
    });
    valor: any;
    listCuentas: any;
    ok: boolean = false;

    constructor(private router: Router, public datepipe: DatePipe,
                private route: ActivatedRoute,
                private backendService: BackendService,
                private _dialog: MatDialog,
                private  fb: FormBuilder
              ) { this.getRegistros();

    }

  ngOnInit() {
      this.listarCuentas(1);
  }

    async getRegistros() {
        let fecha = new Date();
        let params={
            mes: fecha.getMonth() + 1
        }
        this.backendService.callBackEnd(params,'listarRegistros').subscribe(resp => {
            if (resp.status == 200) {
                this.listRegisto = resp.body;
                console.log(this.listRegisto);
            }else {
                console.error(resp.body)
            }
        });
    }


    openForm( id:number ) {
        const dialogRef =this._dialog.open( RegistroDialogComponent, {
            width: '800px',
            data: id
        } );
        dialogRef.afterClosed().subscribe(r=>{
            this.getRegistros();
        })
    }

    cambio(){

    }

    prueba() {

        console.log(this.formFiltros.controls.filtro.value);
    }

    filtrar(value: any) {
        if (value==1){
            let desde = this.datepipe.transform(new Date(this.formFiltros.controls.desde.value), 'yyyy-MM-dd').toString();
            let hasta = this.datepipe.transform(new Date(this.formFiltros.controls.hasta.value), 'yyyy-MM-dd').toString();
            this.listRegisto = this.listRegisto.filter(reg =>
                reg.fecha.slice(0,10)>= desde && reg.fecha.slice(0,10) <=hasta
            )
            console.log(desde + ' -- ' + hasta);
            console.log(this.listRegisto)

        }
        if (value==2){
            this.listRegisto = this.listRegisto.filter(reg =>
                reg.tipo==1
            )
            console.log(this.listRegisto)
        }
        if (value==3){
            this.listRegisto = this.listRegisto.filter(reg =>
                reg.tipo==2
            )
            console.log(this.listRegisto)
        }
        if (value==4){
                let valor = this.formFiltros.controls.cuenta.value;
                console.log(this.formFiltros.controls.cuenta.value);
                this.listRegisto = this.listRegisto.filter(reg =>
                    reg.cuenta.id === valor
                )
                console.log(this.listRegisto);
        }
    }
    borrarFiltro(){
        this.getRegistros();
    }
    listarCuentas(tipo: number) {
        const param = {
            tipo: tipo
        };
        console.log(param);
        this.backendService.callBackEnd(param, 'listaGatosPorTipo').subscribe(lista => {
            this.listCuentas = lista.body;
            console.log(this.listCuentas);
        });
    }

    getTotal(value:number) {
        let ing = this.listRegisto.filter(i => i.tipo==value);
        return ing.map(r=> r.monto).reduce((acc,value) => acc + value,0)
    }

    generar(listRegisto: iRegistro[]) {
        this.backendService.callBackEnd(listRegisto,"donwloadReportExcel",false).subscribe(l => {
            console.log(l);
            if (l.status == 200){
                Swal.fire({
                    icon: 'success',
                    text: 'se ha generado el reporte con exito...'
                })
                console.log("se ha generado el reporte con exito...");
            }
        })
    }
}
