import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingnupComponent } from './components/singnup/singnup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { HeaderComponent } from './shaders/header/header.component';
import { LoadComponent } from './shaders/load/load.component';
import { PCCreateComponent } from './components/pc/pc-create/pc-create.component';
import { PeripheralsCreateComponent } from './components/peripherals/peripherals-create/peripherals-create.component';
import { UserEditComponent } from './components/users/user-edit/user-edit.component';
import { PCListComponent } from './components/pc/pc-list/pc-list.component';
import { PeripheralsListComponent } from './components/peripherals/peripherals-list/peripherals-list.component';
import { UserListComponent } from './components/users/user-list/user-list.component';
import { ListCasosComponent } from './components/casos/list-casos/list-casos.component';
import { CreateCasosComponent } from './components/casos/create-casos/create-casos.component';
import { SeguimientoCasoComponent } from './components/casos/seguimiento-caso/seguimiento-caso.component';
import { ListarReservacionesComponent } from './components/reservaciones/listar-reservaciones/listar-reservaciones.component';
import { CrearReservacionComponent } from './components/reservaciones/crear-reservacion/crear-reservacion.component';

@NgModule({
  declarations: [
    AppComponent,
    SingnupComponent,
    SigninComponent,
    TasksComponent,
    PrivateTasksComponent,
    HeaderComponent,
    LoadComponent,
    PCCreateComponent,
    PeripheralsCreateComponent,
    UserEditComponent,
    PCListComponent,
    PeripheralsListComponent,
    UserListComponent,
    ListCasosComponent,
    CreateCasosComponent,
    SeguimientoCasoComponent,
    ListarReservacionesComponent,
    CrearReservacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
