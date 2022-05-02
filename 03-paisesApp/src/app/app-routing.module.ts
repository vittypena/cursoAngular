import { Component, NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes =[
    {
        path: '',   //la ruta en la que cargara el componente
        component: PorPaisComponent,    
        pathMatch: 'full'   //Para que concuerde con la ruta de manera estricta, si no al ser '' vacio pillaria todo porque todo empieza por vacio
    },
    { path: 'region', component: PorRegionComponent},
    { path: 'capital', component: PorCapitalComponent},
    { path: 'pais/:id', component: VerPaisComponent },   //ruta dinamica segun el id
    { path: '**', redirectTo: ''}   //ruta por defecto al home si no se incluye ninguna de las anteriores
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}