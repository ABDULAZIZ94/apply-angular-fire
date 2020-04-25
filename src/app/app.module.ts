import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
// import { OrdersComponent } from './orders/orders.component';
// import { OrdersListComponent } from './orders-list/orders-list.component';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { environment } from "src/environments/environment";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule, SETTINGS as FIRESTORE_SETTINGS } from '@angular/fire/firestore';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { SocialLoginModule } from './social-login/social-login.module';
// import { WriterModule } from './writers/writer.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomepageComponent,
    // OrdersComponent,
    // OrdersListComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFirestoreModule,
    // WriterModule,
    // SocialLoginModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
