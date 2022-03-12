import { NgModule, ErrorHandler, Injectable } from '@angular/core';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { CatalogService } from './shared/services/catalog.service';
import { CatalogComponent } from './features/catalog/catalog.component';
import { CatalogItemComponent } from './features/catalog/catalog-item/catalog-item.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from './features/terms-of-use/terms-of-use.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Calculators imports

import { BmiCalculatorComponent } from '@features/calculators/bmi-calculator/bmi-calculator.component';
import { IdealWeightCalculatorComponent } from '@features/calculators/ideal-weight-calculator/ideal-weight-calculator.component';
import { WaterCalculatorComponent } from '@features/calculators/water-calculator/water-calculator.component';
import { MaxLengthDirective } from './shared/directive/max-length.directive';

// Explanations Impoprts
import { BmiExplanationComponent } from '@features/calculators/bmi-explanation/bmi-explanation.component';
import { WaterExplanationComponent } from '@features/calculators/water-explanation/water-explanation.component';
import { CtaCatalogItemsComponent } from './shared/components/cta-catalog-items/cta-catalog-items.component';

import { TooltipModule } from 'ng2-tooltip-directive';
import { environment } from '../environments/environment';

import * as Sentry from '@sentry/browser';

Sentry.init({
  dsn: 'https://0dee446ffb9e4f478a229b5cc4d28019@o1165374.ingest.sentry.io/6255046',
  environment: environment.production ? 'prod' : 'dev'
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    Sentry.captureException(error.originalError || error);
  }
}

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
    TermsOfUseComponent,
    CatalogComponent,
    CatalogItemComponent,
    BmiCalculatorComponent,
    IdealWeightCalculatorComponent,
    BmiExplanationComponent,
    CtaCatalogItemsComponent,
    MaxLengthDirective,
    WaterCalculatorComponent,
    WaterExplanationComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    TooltipModule
  ],
  providers: [
    CareersService,
    NewsService,
    CatalogService,
    Meta,
    Title,
    {provide: ErrorHandler, useClass: SentryErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
