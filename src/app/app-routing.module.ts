import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { ParticipantComponent } from './modules/participant/participant.component';
import { AdminComponent } from './modules/admin/admin.component';
import { CreateKataComponent } from './modules/create-kata/create-kata.component';
import { EvaluationParticipantsComponent } from './modules/evaluation-participants/evaluation-participants.component';
import { RankingComponent } from './modules/ranking/ranking.component';
import { EvaluationComponent } from './modules/evaluation/evaluation.component';
import { RegisterKataComponent } from './modules/register-kata/register-kata.component';
import { ResultsComponent } from './modules/results/results.component';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'participant', component: ParticipantComponent },
  { path : 'admin', component: AdminComponent , canActivate: [RoleGuard]},
  { path: 'admin/create-kata', component: CreateKataComponent, canActivate: [RoleGuard] },
  { path: 'admin/evaluation', component: EvaluationParticipantsComponent, canActivate: [RoleGuard] },
  { path: 'ranking', component: RankingComponent },
  { path: 'evaluation/:kataId', component: EvaluationComponent, canActivate: [RoleGuard] },
  { path: 'register-kata', component: RegisterKataComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
