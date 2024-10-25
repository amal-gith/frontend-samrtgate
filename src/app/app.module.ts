import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UsersComponent } from './users/users.component';
import { AddusersComponent } from './addusers/addusers.component';
import { AdddevicesComponent } from './adddevices/adddevices.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { DevicesComponent } from './devices/devices.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { CardComponent } from './card/card.component';
import { CpuComponent } from './cpu/cpu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { SettingComponent } from './setting/setting.component';
import { EnergyComponent } from './energy/energy.component';
import { DetailsComponent } from './details/details.component';
import { InsideComponent } from './inside/inside.component';
import { TmpComponent } from './tmp/tmp.component';
import { HttpClientModule } from '@angular/common/http';
import { PageComponent } from './page/page.component';
import { DeviceManagerComponent } from './device-manager/device-manager.component';



@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AddusersComponent,
    AdddevicesComponent,
    DevicesComponent,
    CardComponent,
    CpuComponent,
    SettingComponent,
    EnergyComponent,
    DetailsComponent,
    InsideComponent,
    TmpComponent,
    PageComponent,
    DeviceManagerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatRadioModule,
    DashboardComponent, // Add as import
    LoginComponent, // Add as import
    CanvasJSAngularChartsModule,
    HttpClientModule, // Ajout du module HTTP ici
    HttpClientModule  ,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
