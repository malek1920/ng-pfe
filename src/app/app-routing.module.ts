import { AdminJournalComponent } from './components/dashboard/admin-journal/admin-journal.component';
import { AdminFolderComponent } from './components/dashboard/admin-folder/admin-folder.component';
import { BureaucomptableComponent } from './components/dashboard/bureaucomptable/bureaucomptable.component';
import { AddBureauComptableComponent } from './components/dashboard/bureaucomptable/add/add.component';
import { EditBureauComptableComponent } from './components/dashboard/bureaucomptable/edit/edit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { RequestResetPasswordComponent } from './password/request-reset-password/request-reset-password.component';
import { ResponseResetPasswordComponent } from './password/response-reset-password/response-reset-password.component';
import { RegisterComponent } from './register/register.component';
import { NewsComponent } from './news/news.component';
import { AdminHomeComponent } from './components/dashboard/admin-home/admin-home.component';
import { ListusersComponent } from './components/dashboard/listusers/listusers.component';
import { ListofpermissionsComponent } from './components/dashboard/listofpermissions/listofpermissions.component';
import { ListofroleComponent } from './components/dashboard/listofrole/listofrole.component';
import { EditComponent } from './components/dashboard/listofrole/edit/edit.component';
import { EditPermissionComponent } from './components/dashboard/listofpermissions/edit-permission/edit-permission.component';
import { PermissiontoroleComponent } from './components/dashboard/permissiontorole/permissiontorole.component';
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

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'contact', component: ContactComponent },
  { path:'register', component:RegisterComponent },
  { path:'login', component:LoginComponent },
  { path: 'request-password-reset', component: RequestResetPasswordComponent},
  { path: 'response-password-reset', component: ResponseResetPasswordComponent},
  { path: 'dashboard', component: AdminHomeComponent,
  children: [
    
    { path: 'users', component: ListusersComponent},
    
    /* bureau */
    { path: 'bureaucomptable', component: BureaucomptableComponent},
    { path: 'addbureaucomptable', component: AddBureauComptableComponent},
    { path: 'editbureaucomptable/:id', component: EditBureauComptableComponent},

    /* client */
    { path: 'client', component: ClientComponent},
    { path: 'addclient', component: AddClientComponent},
    { path: 'editclient/:id', component: EditClientComponent},

    /* mv comptable global */
    { path: 'mvglobal', component: MvComptableGlobalComponent},
    { path: 'addmvglobal', component: AddMvComptableGlobalComponent},
    { path: 'editmvglobal/:id', component: EditMvComptableGlobalComponent},

    /* mv comptable */
    { path: ':id/mv', component: MvComptableComponent},
    { path: ':id/addmv', component: AddMvComptableComponent},
    { path: ':id/editmv/:idmv', component: EditMvComptableComponent},

    /**/
    { path: 'offre', component: OffreComponent},
    { path: 'addoffre', component: AddOffreComponent},

    { path: 'bilans', component: BilansComponent}, 
    { path: 'addbilans', component: AddbilansComponent}, 

    /**/
    { path: 'sendemail', component: SendemailComponent},

    { path: 'bureaucomptable/dossier/:id', component: AdminFolderComponent},
    { path: 'bureaucomptable/dossier/:id/journal/:id', component: AdminJournalComponent},
    { path: 'listofroles', component: ListofroleComponent},
    { path: 'permissions', component: ListofpermissionsComponent},
    { path: 'role/edit-role/:id', component: EditComponent},
    { path: 'permission/edit-permission/:id', component: EditPermissionComponent},
    { path: 'role-has-permission/:id', component: PermissiontoroleComponent},



       ]
  }]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
