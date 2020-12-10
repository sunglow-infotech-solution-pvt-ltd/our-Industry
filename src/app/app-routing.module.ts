import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { HeaderComponent } from './header/header.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
 // {path:'',component:FirstComponentComponent}
//   {path:'',redirectTo:'',pathMatch:'full'},
   {path:'',component:MainContentComponent},
   {path:'about-us',component:AboutUsComponent},
   {path:'contact-us',component:ContactUsComponent},
   {path:'sign-up',component:SingUpComponent},
   {path:'send-message',component:SendMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
