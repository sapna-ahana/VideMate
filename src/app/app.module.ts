import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CardLayoutComponent } from './card-layout/card-layout.component';
import { FooterComponent } from './footer/footer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { RecieveDataFromApiServiceService } from './recieve-data-from-api-service.service';
import { HttpModule } from '@angular/http';
import { SafePipe } from './safe.pipe';
import { UpdateComponent } from './update/update.component';


const appRoutes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'view', component:ViewComponent},
  { path: 'edit', component:EditComponent},
  { path: 'update', component:UpdateComponent},
  { path: '', component:CardLayoutComponent},
  { path: 'home', component:CardLayoutComponent},
  
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    CardLayoutComponent,
    FooterComponent,
    PageNotFoundComponent,
    SafePipe,
    UpdateComponent,
    
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), FormsModule, HttpClientModule, HttpModule
  ],
  providers: [RecieveDataFromApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
