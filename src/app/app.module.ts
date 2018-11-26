import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./components/main-page/main-page.components";
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {PageNotFoundComponent} from "./page-not-found.components";

import {MatButtonModule, MatCardModule, MatTableModule, MatToolbarModule, MatIconModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StructuresListComponent} from "./components/admin-page/structures-list/structures-list.component";

import { LocalStorageService } from './services/local-storage/local-storage.service';
import {StructuresEditComponent} from "./components/admin-page/structure-edit/structure-edit.component";

const appRoutes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'admin-page', component: AdminPageComponent,
        children: [
            { path: '', component: StructuresListComponent },
            { path: 'structure/add', component: StructuresEditComponent },
            { path: 'structure/:id', component: StructuresEditComponent }
        ]},
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
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatSelectModule,

        BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
    declarations: [
        AppComponent,
        MainPageComponent,
        AdminPageComponent, StructuresListComponent, StructuresEditComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        LocalStorageService
    ]
})
export class AppModule {
}
