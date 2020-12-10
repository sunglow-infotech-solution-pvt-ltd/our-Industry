import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MyInterceptor } from './my.interceptor';
import { FirstComponentComponent } from './first-component/first-component.component';
import { formatInterceptor } from './format.interceptor';
import { HeaderInterceptor } from './header.interceptor';
import { errorInterceptor } from './error.interceptor';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { BannerCrousalComponent } from './banner-crousal/banner-crousal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ResponsiveDesignTemplateComponent } from './pages/responsive-design-template/responsive-design-template.component';
import { ProfessionalVideoGraphyComponent } from './pages/professional-video-graphy/professional-video-graphy.component';
import { LogoDesignComponent } from './pages/logo-design/logo-design.component';
import { DigitalPaintingComponent } from './pages/digital-painting/digital-painting.component';
import { CareerFinanceManagementComponent } from './pages/career-finance-management/career-finance-management.component';
import { OurAppsComponent } from './pages/our-apps/our-apps.component';
import { OurWebsComponent } from './pages/our-webs/our-webs.component';
import { ItProblemSolutionConsoleComponent } from './pages/it-problem-solution-console/it-problem-solution-console.component';
import { ItTrainingAndPlacementDashboardComponent } from './pages/it-training-and-placement-dashboard/it-training-and-placement-dashboard.component';
import { ExamScheduleComponent } from './pages/exam-schedule/exam-schedule.component';
import { PageNotFoundComponent } from './dummyContent/page-not-found/page-not-found.component';
import { UnAuthorizedComponent } from './dummyContent/un-authorized/un-authorized.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    OurServicesComponent,
    BannerCrousalComponent,
    AboutUsComponent,
    SingUpComponent,
    ContactUsComponent,
    SendMessageComponent,
    ResponsiveDesignTemplateComponent,
    ProfessionalVideoGraphyComponent,
    LogoDesignComponent,
    DigitalPaintingComponent,
    CareerFinanceManagementComponent,
    OurAppsComponent,
    OurWebsComponent,
    ItProblemSolutionConsoleComponent,
    ItTrainingAndPlacementDashboardComponent,
    ExamScheduleComponent,
    PageNotFoundComponent,
    UnAuthorizedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: formatInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: errorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
