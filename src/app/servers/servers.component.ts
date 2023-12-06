import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowNewServer:boolean = false;
  serverCreationStatus = "No server was created!";
  serverName = '';
  serverCreated = false;

  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    } ,2000);
  }

  ngOnInit(){

  }


  onCreateServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }


}
