import { Component} from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html'
})
export class SwitchesComponent  {

  persona: any = {
    genero: '',
    notificaciones: false
  }

  tyc: boolean = false;

}
