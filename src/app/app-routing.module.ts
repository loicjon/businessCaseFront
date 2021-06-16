import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './views/login/login.component';
import {GarageListComponent} from './views/admin-board/garage/garage-list/garage-list.component';
import {GarageDetailsComponent} from './views/admin-board/garage/garage-details/garage-details.component';
import {AddGarageComponent} from './views/admin-board/garage/add-garage/add-garage.component';
import {AdminViewComponent} from './views/admin-board/admin-view/admin-view.component';
import {BrandListComponent} from './views/admin-board/brand/brand-list/brand-list.component';
import {BrandDetailsComponent} from './views/admin-board/brand/brand-details/brand-details.component';
import {AddBrandComponent} from './views/admin-board/brand/add-brand/add-brand.component';
import {FuelListComponent} from './views/admin-board/fuel/fuel-list/fuel-list.component';
import {FuelDetailsComponent} from './views/admin-board/fuel/fuel-details/fuel-details.component';
import {AddFuelComponent} from './views/admin-board/fuel/add-fuel/add-fuel.component';
import {ModelListComponent} from './views/admin-board/model/model-list/model-list.component';
import {ModelDetailsComponent} from './views/admin-board/model/model-details/model-details.component';
import {AddModelComponent} from './views/admin-board/model/add-model/add-model.component';
import {PictureListComponent} from './views/admin-board/picture/picture-list/picture-list.component';
import {PictureDetailsComponent} from './views/admin-board/picture/picture-details/picture-details.component';
import {AddPictureComponent} from './views/admin-board/picture/add-picture/add-picture.component';
import {AdListComponent} from './views/admin-board/ad/ad-list/ad-list.component';
import {AdDetailsComponent} from './views/admin-board/ad/ad-details/ad-details.component';
import {AddAdComponent} from './views/admin-board/ad/add-ad/add-ad.component';
import {RegisterComponent} from './views/register/register.component';
import {ContactComponent} from './views/contact/contact.component';
import {HomeComponent} from './views/home/home.component';
import {SingleAdComponent} from './views/single-ad/single-ad.component';
import {AuthGuardService} from './guards/auth.guard';
import {ErrorComponent} from './views/error/error.component';
import { CarListComponent} from './views/car-list/car-list/car-list.component';
import {ProfileComponent} from './views/profile/profile.component';
import {ProfessionalBoardComponent} from './views/professional-board/professional-board.component';
import {TestComponent} from './views/test/test.component';
import {CarviewComponent} from './views/carview/carview.component';
import { RoleGuardService} from './guards/role.guard.service';
import {AdminLandingComponent} from './views/admin-board/admin-landing/admin-landing.component';
import {ProfessionalListComponent} from './views/admin-board/professional/professional-list/professional-list.component';
import {ProfessionalDetailsComponent} from './views/admin-board/professional/professional-details/professional-details.component';
import {AddProfessionalComponent} from './views/admin-board/professional/add-professional/add-professional.component';
import {CarListGridComponent} from './views/car-list-grid/car-list-grid.component';
import {AboutComponent} from './views/about/about.component';

const routes: Routes = [

  { path: 'car/:carId/view', component: SingleAdComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent},
  { path: 'car', component: CarListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'admin', component: AdminViewComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'superadmin'
    } },
  { path: 'adminland', component: AdminLandingComponent,
    canActivate: [RoleGuardService],
    data: {
      expectedRole: 'superadmin'
    } },
  { path: 'professional', component: ProfessionalBoardComponent, canActivate: [AuthGuardService]},
  { path: 'test', component: TestComponent},
  { path: 'about', component: AboutComponent},
  { path: 'carview', component: CarviewComponent},
  { path: 'cargrid', component: CarListGridComponent},
  { path: 'profile', component: ProfileComponent},

  { path: 'ads', component: AdListComponent},
  { path: 'ads/:id', component: AdDetailsComponent},
  { path: 'ad/add', component: AddAdComponent},

  { path: 'brands', component: BrandListComponent, canActivate: [AuthGuardService]},
  { path: 'brands/:id', component: BrandDetailsComponent},
  { path: 'brand/add', component: AddBrandComponent},

  { path: 'fuels', component: FuelListComponent, canActivate: [AuthGuardService]},
  { path: 'fuels/:id', component: FuelDetailsComponent},
  { path: 'fuel/add', component: AddFuelComponent},

  { path: 'garages', component: GarageListComponent, canActivate: [AuthGuardService]},
  { path: 'garages/:id', component: GarageDetailsComponent},
  { path: 'garage/add', component: AddGarageComponent},

  { path: 'models', component: ModelListComponent, canActivate: [AuthGuardService]},
  { path: 'models/:id', component: ModelDetailsComponent},
  { path: 'model/add', component: AddModelComponent},

  { path: 'pictures', component: PictureListComponent, canActivate: [AuthGuardService]},
  { path: 'pictures/:id', component: PictureDetailsComponent},
  { path: 'picture/add', component: AddPictureComponent},

  { path: 'professionals', component: ProfessionalListComponent, canActivate: [AuthGuardService]},
  { path: 'professionals/:id', component: ProfessionalDetailsComponent},
  { path: 'professional/add', component: AddProfessionalComponent},

  { path: 'not-found', component: ErrorComponent},
  { path: '**', redirectTo: 'not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
