import { Component, NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { VeiwAllComponent } from './components/veiw-all/veiw-all.component';



const routes : Routes=[
  {
    path:'login',
    component:LoginComponent
  },

  {
    path : 'register',
    component:RegisterComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[{
      path:'login',
      component:LoginComponent
    },{
      path:'register',
      component:RegisterComponent
    },    
    ]
  },
  {
    path:'viewall',
    component:VeiwAllComponent
  },
  
  

  {
    path:'**',
    redirectTo:'home', pathMatch:'full'
  }
  
  
  
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
