import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  user!: {
    id1: number;
    name1: string;
  }

  constructor(private act: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = {
      id1: this.act.snapshot.params['id'],
      name1: this.act.snapshot.params['name']

    }
  }
}
