import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LandingLayoutComponent } from '@layout/landing-layout/landing-layout.component';
import { LoginLayoutComponent } from '@layout/login-layout/login-layout.component';
import { LandingPageComponent } from '@features/landing-page/landing-page.component';
import { ContactUsComponent } from '@features/contact-us/contact-us.component';
import { CareersComponent } from '@features/careers/careers.component';
import { LoginPageComponent } from './login/login-page.component';
import { FooterComponent } from '@layout/landing-layout/footer/footer.component';
import { HeaderComponent } from '@layout/landing-layout/header/header.component';
import { NavigationComponent } from '@layout/landing-layout/navigation/navigation.component';
import { AboutUsComponent } from '@features/about-us/about-us.component';
import { CareersItemComponent } from './features/careers/careers-item/careers-item.component';
import { CareersService } from './shared/services/careers.service';
import { NewsService } from './shared/services/news.service';
import { NewsComponent } from './features/news/news.component';
import { NewsItemComponent } from './features/news/news-item/news-item.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './features/terms-of-use/terms-of-use.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LandingLayoutComponent,
    LoginLayoutComponent,
    LandingPageComponent,
    ContactUsComponent,
    CareersComponent,
    LoginPageComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    AboutUsComponent,
    CareersItemComponent,
    NewsComponent,
    NewsItemComponent,
    PrivacyPolicyComponent,
    TermsOfUseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    CareersService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
