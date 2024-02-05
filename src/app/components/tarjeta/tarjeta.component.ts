import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { SubTarjetasComponent } from '../sub-tarjetas/sub-tarjetas.component';


@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [

    CardModule,
    DialogModule,
    SubTarjetasComponent
  ],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {

  @Input() data: any = {}



  visible: boolean = false;

  showDialog() {
   this.visible = true;
  }

}
