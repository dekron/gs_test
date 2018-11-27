import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {AdminPageComponent} from "./components/admin-page/admin-page.component";
import {PageNotFoundComponent} from "./page-not-found.components";

import {
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule,
    MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StructuresListComponent} from "./components/admin-page/structures-list/structures-list.component";

import {LocalStorageService} from './services/local-storage/local-storage.service';
import {StructuresEditComponent} from "./components/admin-page/structure-edit/structure-edit.component";
import {SourceService} from "./services/source/source.service";
import {TemplateTwoToOneComponent} from "./components/partial/template/template-two-to-one/template-two-to-one.component";
import {BlockNumberComponent} from "./components/partial/blocks/blocks-number/block-number.component";

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
        TemplateTwoToOneComponent,
        BlockNumberComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
    providers: [
        LocalStorageService,
        SourceService
    ],
    entryComponents: [BlockNumberComponent,
    ]
})
export class AppModule {
}
