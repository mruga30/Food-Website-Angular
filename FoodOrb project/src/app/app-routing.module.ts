import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendslistComponent } from './friends/friendslist/friendslist.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';
import { NetworkflowComponent } from './listing/networkflow/networkflow.component';
import { CartComponent } from './ordering/cart/cart.component';
import { OrderComponent } from './ordering/order/order.component';
import { TrackComponent } from './ordering/track/track.component';
import { ForgotpasswordComponent } from './registration/forgotpassword/forgotpassword.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { SettingspageComponent } from './registration/settingspage/settingspage.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'settings', component: SettingspageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'friends', component: FriendslistComponent },
  { path: 'feed', component: NetworkflowComponent },
  { path: 'track', component: TrackComponent },
  { path: 'order', component: OrderComponent },
  { path: 'cart', component: CartComponent },
  { path: 'logout', component: HomepageComponent },
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
