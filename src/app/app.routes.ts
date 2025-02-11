import { RouterModule, Routes } from '@angular/router';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path : 'chemin1', component: Comp1Component},
    {path : 'chemin2', component: Comp2Component},
    {path : '', redirectTo: 'chemin1', pathMatch:'full'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})

export class AppRoutingModule {}
