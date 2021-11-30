import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Screen1Component } from './screen1.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Screen1RoutingModule } from './screen1-routing.module';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { NewRegistroComponent } from './new-registro/new-registro.component';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { RegistroDialogComponent} from './new-registro/registro.dialog/registro.dialog.component';

@NgModule({
  declarations: [Screen1Component, NewRegistroComponent, RegistroDialogComponent],
    imports: [
        CommonModule,
        Screen1RoutingModule,
        FlexLayoutModule.withConfig({addFlexToParent: false}),
        MatTableModule,
        MatCardModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatRadioModule,
        MatInputModule,
        FormsModule,
        MatDatepickerModule,
    ],
    exports:[
        MatInputModule
    ]
})
export class Screen1Module { }
