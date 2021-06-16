import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';
import {AuthInterceptor, authInterceptorProviders} from './helpers/auth.interceptor';
import { LoginComponent } from './views/login/login.component';
import {AuthService} from './services/auth/auth.service';
import { AdminViewComponent } from './views/admin-board/admin-view/admin-view.component';

import { BrandDetailsComponent } from './views/admin-board/brand/brand-details/brand-details.component';
import { BrandListComponent } from './views/admin-board/brand/brand-list/brand-list.component';
import { AddBrandComponent } from './views/admin-board/brand/add-brand/add-brand.component';

import { FuelDetailsComponent } from './views/admin-board/fuel/fuel-details/fuel-details.component';
import { FuelListComponent } from './views/admin-board/fuel/fuel-list/fuel-list.component';
import { AddFuelComponent } from './views/admin-board/fuel/add-fuel/add-fuel.component';
import { GarageDetailsComponent } from './views/admin-board/garage/garage-details/garage-details.component';
import { GarageListComponent } from './views/admin-board/garage/garage-list/garage-list.component';
import { AddGarageComponent } from './views/admin-board/garage/add-garage/add-garage.component';
import { PictureListComponent } from './views/admin-board/picture/picture-list/picture-list.component';
import { PictureDetailsComponent } from './views/admin-board/picture/picture-details/picture-details.component';
import { AddPictureComponent } from './views/admin-board/picture/add-picture/add-picture.component';
import { AddUserComponent } from './views/admin-board/user/add-user/add-user.component';
import { UserDetailsComponent } from './views/admin-board/user/user-details/user-details.component';
import { UserListComponent } from './views/admin-board/user/user-list/user-list.component';
import { AddModelComponent } from './views/admin-board/model/add-model/add-model.component';
import { ModelDetailsComponent } from './views/admin-board/model/model-details/model-details.component';
import { ModelListComponent } from './views/admin-board/model/model-list/model-list.component';
import { AddAdComponent } from './views/admin-board/ad/add-ad/add-ad.component';
import { AdDetailsComponent} from './views/admin-board/ad/ad-details/ad-details.component';
import { AdListComponent } from './views/admin-board/ad/ad-list/ad-list.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ResearchBarComponent } from './components/research-bar/research-bar.component';
import { ContactComponent } from './views/contact/contact.component';
import { ErrorComponent } from './views/error/error.component';
import { HomeComponent } from './views/home/home.component';
import { RegisterComponent } from './views/register/register.component';
import { SingleAdComponent } from './views/single-ad/single-ad.component';
import {AuthGuardService} from './guards/auth.guard';
import {NgxSliderModule} from '@angular-slider/ngx-slider';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {RoleGuardService} from './guards/role.guard.service';
import { CarListComponent } from './views/car-list/car-list/car-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProfileComponent } from './views/profile/profile.component';
import { ProfessionalBoardComponent } from './views/professional-board/professional-board.component';
import { TestComponent } from './views/test/test.component';
import { CarviewComponent } from './views/carview/carview.component';
import { AdminLandingComponent } from './views/admin-board/admin-landing/admin-landing.component';
import { ProfessionalDetailsComponent } from './views/admin-board/professional/professional-details/professional-details.component';
import { ProfessionalListComponent } from './views/admin-board/professional/professional-list/professional-list.component';
import { AddProfessionalComponent } from './views/admin-board/professional/add-professional/add-professional.component';
import { AboutComponent } from './views/about/about.component';
import { CarListGridComponent } from './views/car-list-grid/car-list-grid.component';
import { ResearchsComponent } from './views/researchs/researchs.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


// tslint:disable-next-line:typedef
export function getToken() {
  return localStorage.getItem('auth-token');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminViewComponent,
    BrandDetailsComponent,
    BrandListComponent,
    AddBrandComponent,
    FuelDetailsComponent,
    FuelListComponent,
    AddFuelComponent,
    GarageDetailsComponent,
    GarageListComponent,
    AddGarageComponent,
    PictureListComponent,
    PictureDetailsComponent,
    AddPictureComponent,
    AddUserComponent,
    UserDetailsComponent,
    UserListComponent,
    AddModelComponent,
    ModelDetailsComponent,
    ModelListComponent,
    AddAdComponent,
    AdDetailsComponent,
    AdListComponent,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    ResearchBarComponent,
    ContactComponent,
    ErrorComponent,
    HomeComponent,
    RegisterComponent,
    SingleAdComponent,
    CarListComponent,
    ProfileComponent,
    ProfessionalBoardComponent,
    TestComponent,
    CarviewComponent,
    AdminLandingComponent,
    ProfessionalDetailsComponent,
    ProfessionalListComponent,
    AddProfessionalComponent,
    AboutComponent,
    CarListGridComponent,
    ResearchsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoadingBarRouterModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken
      }
    }),
    NgxSliderModule,
    NgxPaginationModule
  ],
  providers: [
    AuthService,
    authInterceptorProviders,
    AuthGuardService,
    RoleGuardService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
