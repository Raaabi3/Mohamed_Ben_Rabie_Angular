import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent implements OnInit {
  serverID = 10;
  serverStatus = "offline";
  serverCreationStatus = false;
  serverCreation = "not created";
  serverName = "Server 1";
  serverCreated = false;
  servers = ['Server 2', 'Server 3'];
  server!: FormControl;

  getStatus() {
    return this.serverStatus;
  }

  onCreateServer() {
    this.serverCreation = "created";
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  ngOnInit() {
    this.server = new FormControl('', Validators.required);
  }
}
