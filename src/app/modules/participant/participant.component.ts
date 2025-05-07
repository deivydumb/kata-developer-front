import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.css']
})
export class ParticipantComponent implements OnInit {

  constructor(private readonly router:Router) { }

  ngOnInit(): void {
  }


  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
