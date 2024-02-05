import { Component, Input } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-sub-tarjetas',
  standalone: true,
  imports: [CardModule],
  templateUrl: './sub-tarjetas.component.html',
  styleUrl: './sub-tarjetas.component.css'
})
export class SubTarjetasComponent {

  @Input() data: any = {}

}
