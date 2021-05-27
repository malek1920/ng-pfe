import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ResponseResetPasswordComponent } from './password/response-reset-password/response-reset-password.component';
import { RequestResetPasswordComponent } from './password/request-reset-password/request-reset-password.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/authservices/auth.service';
import { TokenService } from './services/authservices/token.service';
import { AuthroutesService } from './services/authservices/authroutes.service';

import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { SubheaderComponent } from './subheader/subheader.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdvantagesComponent } from './advantages/advantages.component';
import { NewsComponent } from './news/news.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { AdminHomeComponent } from './components/dashboard/admin-home/admin-home.component';
import { AdminFooterComponent } from './components/dashboard/admin-footer/admin-footer.component';
import { ListusersComponent } from './components/dashboard/listusers/listusers.component';

import { DataTablesModule } from 'angular-datatables';
import { MainservService } from './mainserv.service';
import { AdminNavbarComponent } from './components/dashboard/admin-navbar/admin-navbar.component';
import { SecNavbarComponent } from './components/dashboard/sec-navbar/sec-navbar.component';
import { ListofroleComponent } from './components/dashboard/listofrole/listofrole.component';
import { ListofpermissionsComponent } from './components/dashboard/listofpermissions/listofpermissions.component';
import { StatsComponent } from './components/dashboard/stats/stats.component';
import { httpInterceptorProviders } from './services/authservices/authinter.interceptor';

import { EditComponent } from './components/dashboard/listofrole/edit/edit.component';
import { EditPermissionComponent } from './components/dashboard/listofpermissions/edit-permission/edit-permission.component';
import { PermissiontoroleComponent } from './components/dashboard/permissiontorole/permissiontorole.component';
import { PricingComponent } from './pricing/pricing.component';
import { BureaucomptableComponent } from './components/dashboard/bureaucomptable/bureaucomptable.component';
import { AdminFolderComponent } from './components/dashboard/admin-folder/admin-folder.component';
import { AdminJournalComponent } from './components/dashboard/admin-journal/admin-journal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AddBureauComptableComponent } from './components/dashboard/bureaucomptable/add/add.component';
import { EditBureauComptableComponent } from './components/dashboard/bureaucomptable/edit/edit.component';
import { ClientComponent } from './components/dashboard/client/client.component';
import { AddClientComponent } from './components/dashboard/client/add/add.component';
import { EditClientComponent } from './components/dashboard/client/edit/edit.component';
import { MvComptableGlobalComponent } from './components/dashboard/mv-comptable-global/mv-comptable-global.component';
import { AddMvComptableGlobalComponent } from './components/dashboard/mv-comptable-global/add/add.component';
import { EditMvComptableGlobalComponent } from './components/dashboard/mv-comptable-global/edit/edit.component';
import { MvComptableComponent } from './components/dashboard/mv-comptable/mv-comptable.component';
import { AddMvComptableComponent } from './components/dashboard/mv-comptable/add/add.component';
import { EditMvComptableComponent } from './components/dashboard/mv-comptable/edit/edit.component';
import { OffreComponent } from './components/dashboard/offre/offre.component';
import { AddOffreComponent } from './components/dashboard/offre/add/add.component';
import { SendemailComponent } from './components/dashboard/sendemail/sendemail.component';
import { BilansComponent } from './components/dashboard/bilans/bilans.component';
import { AddbilansComponent } from './components/dashboard/addbilans/addbilans.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    RequestResetPasswordComponent,
    ResponseResetPasswordComponent,
    SubheaderComponent,
    GalleryComponent,
    AdvantagesComponent,
    NewsComponent,
    SidebarComponent,
    AdminHomeComponent,
    AdminFooterComponent,
    ListusersComponent,
    AdminNavbarComponent,
    SecNavbarComponent,
    ListofroleComponent,
    ListofpermissionsComponent,
    StatsComponent,
    EditComponent,
    EditPermissionComponent,
    PermissiontoroleComponent,
    PricingComponent,
    BureaucomptableComponent,
    AdminFolderComponent,
    AdminJournalComponent,
    EditUserComponent,
    AddBureauComptableComponent,
    EditBureauComptableComponent,
    ClientComponent,
    ClientComponent,
    AddClientComponent,
    EditClientComponent,
    MvComptableGlobalComponent,
    AddMvComptableGlobalComponent,
    EditMvComptableGlobalComponent,
    MvComptableComponent,
    AddMvComptableComponent,
    EditMvComptableComponent,
    OffreComponent,
    AddOffreComponent,
    SendemailComponent,
    BilansComponent,
    AddbilansComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    DataTablesModule,
    NgxDatatableModule

  ],
  providers: [AuthService, MainservService, httpInterceptorProviders, TokenService, AuthroutesService, { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
