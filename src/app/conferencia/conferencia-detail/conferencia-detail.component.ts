import { Component, Input } from '@angular/core';
import { Conferencia } from '../conferencia';

@Component({
  standalone: false,
  selector: 'app-conferencia-detail',
  templateUrl: './conferencia-detail.component.html',
  styleUrls: ['./conferencia-detail.component.css']
})
export class ConferenciaDetailComponent {

  @Input() conferencia?: Conferencia;

}
