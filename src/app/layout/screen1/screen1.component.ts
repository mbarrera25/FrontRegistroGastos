import { Component, OnInit } from '@angular/core';
import {iRegistro} from '../../models/Registro';
import {Subscription} from 'rxjs';
import {tryCatch} from 'rxjs/internal-compatibility';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {BackendService} from '../../service/backend.service';
import { MatDialog } from '@angular/material/dialog';
import { RegistroDialogComponent } from './new-registro/registro.dialog/registro.dialog.component';

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
        tipo: new FormControl(''),
    });
    valor: any;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private backendService: BackendService,
                private _dialog: MatDialog,
                private  fb: FormBuilder
              ) { this.getRegistros();

    }

  ngOnInit() {

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
}
