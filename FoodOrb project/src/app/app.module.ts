import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { NavComponent } from './home/nav/nav.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { ForgotpasswordComponent } from './registration/forgotpassword/forgotpassword.component';
import { SettingspageComponent } from './registration/settingspage/settingspage.component';
import { NetworkflowComponent } from './listing/networkflow/networkflow.component';
import { TrackComponent } from './ordering/track/track.component';
import { OrderComponent } from './ordering/order/order.component';
import { FriendslistComponent } from './friends/friendslist/friendslist.component';
import { PagenotfoundComponent } from './home/pagenotfound/pagenotfound.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SearchfriendPipe } from './searchfriend.pipe';
import { CartComponent } from './ordering/cart/cart.component';
import { SearchmenuPipe } from './searchmenu.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    SettingspageComponent,
    NetworkflowComponent,
    TrackComponent,
    OrderComponent,
    FriendslistComponent,
    PagenotfoundComponent,
    SearchPipe,
    SearchfriendPipe,
    CartComponent,
    SearchmenuPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
