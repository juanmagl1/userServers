import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from './users/users.module';
import { ServersModule } from './servers/servers.module';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './auth-guard.service';
import { AuthServiceService } from './auth.service.service';
import { ServersService } from './servers/services/servers.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    UsersModule,
    ServersModule,
    FormsModule
  ],
  providers: [AuthGuardService,
  AuthServiceService,
ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
