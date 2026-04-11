import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ServerComponent} from './server/server.component';
import {ServersComponent} from './servers/servers.component';
import {UsersComponent} from './users/users.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ProfileComponent} from './profile/profile.component';
import {ActivityComponent} from './users/activity/activity.component';
import {SetttingsComponent} from './users/setttings/setttings.component';
import {UserComponent} from './user/user.component';
import {AddUserComponent} from './add-user/add-user.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'server', component: ServerComponent},
  {path: 'servers', component: ServersComponent},
  {
    path: 'users', component: UsersComponent, children: [
      {
        path: 'activity', component: ActivityComponent
      },
      {path: 'settings', component: SetttingsComponent}
    ]
  },
  {path: 'profile', component: ProfileComponent, data: {title1: 'Bonjour, je suis le composant Profile'}},
  {path: 'user/:id/:name', component: UserComponent},
  {
    path: 'login', loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {path: 'add', component: AddUserComponent},
  {path: 'list', component: ListUsersComponent},
  {path: 'update/:id', component:AddUserComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
