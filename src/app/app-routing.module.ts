import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';
//import { AddDeviceComponent } from './adddevices/adddevices.component';
import { DevicesComponent } from './devices/devices.component';
import { AdddevicesComponent } from './adddevices/adddevices.component';
import { CardComponent } from './card/card.component';
import { CpuComponent } from './cpu/cpu.component';
import { EnergyComponent } from './energy/energy.component';
import { DetailsComponent } from './details/details.component';
import { InsideComponent } from './inside/inside.component';
import { TmpComponent } from './tmp/tmp.component';
import { PageComponent } from './page/page.component';
import { DeviceManagerComponent } from './device-manager/device-manager.component';

const routes: Routes = [
  
  {path:'login',component:LoginComponent},
  
 // {path:'',component:LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' } ,
  {path: 'dashboard',component:DashboardComponent },
  {path: 'users',component:UsersComponent },
  {path:'addusers',component:AddusersComponent},
  {path:'adddevices',component:AdddevicesComponent},
  {path:'devices',component:DevicesComponent},
  {path:'card',component:CardComponent},
  {path:'cpu',component:CpuComponent},
  {path:'energy',component:EnergyComponent},
  {path:'details',component:DetailsComponent},
  {path:'inside',component:InsideComponent},
  {path:'tmp',component:TmpComponent},
  {path:'page',component:PageComponent},
  {path:'devicemanager',component:DeviceManagerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
