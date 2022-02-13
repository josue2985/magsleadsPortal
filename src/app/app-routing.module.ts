import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from '@layout/landing-layout/landing-layout.component';
import { LoginLayoutComponent } from '@layout/login-layout/login-layout.component';
import { LandingPageComponent } from '@features/landing-page/landing-page.component';
import { ContactUsComponent } from '@features/contact-us/contact-us.component';
import { CareersComponent } from '@features/careers/careers.component';
import { LoginPageComponent } from './login/login-page.component';
import { AboutUsComponent } from '@features/about-us/about-us.component';
import { CareersItemComponent } from '@features/careers/careers-item/careers-item.component';
import { NewsComponent } from '@features/news/news.component';
import { NewsItemComponent } from '@features/news/news-item/news-item.component';
import { CatalogComponent } from '@features/catalog/catalog.component';
import { CatalogItemComponent } from '@features/catalog/catalog-item/catalog-item.component';
import { PrivacyPolicyComponent } from '@features/privacy-policy/privacy-policy.component';
import { TermsOfUseComponent } from '@features/terms-of-use/terms-of-use.component';

const routes: Routes = [
  { path: '',
    component: LandingPageComponent,
    pathMatch: 'full'
  },
  { path: '',
    component: LandingLayoutComponent,
    children : [
      { path: 'about-us' , component: AboutUsComponent},
      { path: 'contactus' , component: ContactUsComponent},
      { path: 'careers' , component: CareersComponent},
      {
        path: 'careers/:careerName', component: CareersItemComponent
      },
      { path: 'news' , component: NewsComponent},
      {
        path: 'news/:newsName', component: NewsItemComponent
      },
      {
        path: 'calculadora', component: CatalogComponent
      },
      {
        path: 'calculadora/:calculatorName', component: CatalogItemComponent
      },
      { path: 'privacy-policy' , component: PrivacyPolicyComponent},
      { path: 'terms-of-use' , component: TermsOfUseComponent},
    ]
  },
  { path: '',
    component: LoginLayoutComponent,
    children : [
      { path: 'login' , component: LoginPageComponent},
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  LandingLayoutComponent,
  LandingPageComponent,
  ContactUsComponent,
  CareersComponent,
  LoginLayoutComponent,
  LoginPageComponent
];
