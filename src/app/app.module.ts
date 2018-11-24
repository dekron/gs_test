import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.components";
import {AdminPageComponent} from "./admin-page/admin-page.component";
import {PageNotFoundComponent} from "./page-not-found.components";

import {MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule, MatIconModule, MatCheckboxModule} from '@angular/material';
import {StructuresListComponent} from "./admin-page/structures-list/structures-list.component";

const appRoutes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'admin-page', component: AdminPageComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatTableModule,
        MatIconModule,
        MatCheckboxModule,

        BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent,
        MainPageComponent,
        AdminPageComponent, StructuresListComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
