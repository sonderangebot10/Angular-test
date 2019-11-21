import { Component } from '@angular/core';


@Component({
  selector: 'dasboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  loading: boolean;
  data = 
  [
    {  
      "room": "Livingroom",
      "devices": [{"name": "F500", "type": "heater", "data": {"temperature": "21"}},
                {"name": "LED100", "type": "light", "data": {"state": false}}]
    }, 
    {
      "room": "Bedroom",
      "devices": [{"name": "LED150", "type": "light", "data": {"state": true}}]
    }
  ]
  modules : Device[] = [];
  
  ngOnInit() {
    this.loading = true;

    this.data.forEach(x =>{
        this.modules.push(new Module(x.room, x.devices));
      })

    setTimeout(()=>{
      this.loading = false;
    }, 1000);
  }
}

class Module {
  constructor(
    public room: string,
    public devices: Device[]
  ){}
}

class Device {
  constructor(
    name: string,
    type: string,
    data: string
  ){}
}