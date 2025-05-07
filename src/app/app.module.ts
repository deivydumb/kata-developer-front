import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import {  HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './modules/admin/admin.component';
import { ParticipantComponent } from './modules/participant/participant.component';
import { CreateKataComponent } from './modules/create-kata/create-kata.component';
import { EvaluationParticipantsComponent } from './modules/evaluation-participants/evaluation-participants.component';
import { RankingComponent } from './modules/ranking/ranking.component';
import { EvaluationComponent } from './modules/evaluation/evaluation.component';
import { RegisterKataComponent } from './modules/register-kata/register-kata.component';
import { ConfirmationComponent } from './modules/confirmation/confirmation.component';
import { ResultsComponent } from './modules/results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ParticipantComponent,
    CreateKataComponent,
    EvaluationParticipantsComponent,
    RankingComponent,
    EvaluationComponent,
    RegisterKataComponent,
    ConfirmationComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
