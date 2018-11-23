import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.components";
import {AdminPageComponent} from "./admin-page/admin-page.components";
import {PageNotFoundComponent} from "./page-not-found.components";

import {MatButtonModule, MatToolbarModule} from '@angular/material';

const appRoutes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'admin-page', component: AdminPageComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    imports: [
        MatButtonModule,
        MatToolbarModule,

        BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, MainPageComponent, AdminPageComponent, PageNotFoundComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
