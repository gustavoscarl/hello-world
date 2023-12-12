import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer = false;
  allowUserName = false;
  serverCreationStatus = 'No server was created'
  serverName = 'Testserver';
  serverCreated = false;
  userName = '';
  usernameStatus = '';
  servers = ['Testserver', 'Testserver2']

  constructor(){
    setTimeout (() => {
      this.allowNewServer = true;
    }, 2000);

    console.log("userName:", this.userName);
;
  }

  onUsernameAllow() {
   (this.userName.length > 0) ? this.allowUserName = true : this.allowUserName = false;
  }

  onUsernameClick() {
    this.usernameStatus = 'Username is ' + this.userName;
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName)
  }

//   onUpdateServerName(event: Event) {
//     this.serverName = (<HTMLInputElement>event.target).value
//   }

}
