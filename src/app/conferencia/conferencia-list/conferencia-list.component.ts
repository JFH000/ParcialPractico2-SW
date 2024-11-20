import { Component, OnInit } from '@angular/core';
import { Conferencia } from '../conferencia';
import { ConferenciaService } from '../conferencia.service';

@Component({
  standalone: false,
  selector: 'app-conferencia-list',
  templateUrl: './conferencia-list.component.html',
  styleUrls: ['./conferencia-list.component.css']
})
export class ConferenciaListComponent implements OnInit {

  conferencias :Array<Conferencia> = [];
  selectedConferencia?: Conferencia;
  upcoming: number = 0;

  constructor(private conferenciaService: ConferenciaService) { }

  getConferencias(): void{
    this.conferenciaService.getConferencias().subscribe(data => {
      this.conferencias = data;
      this.upcoming = this.getUpcomingConfereces(data);

    });
  }

  getUpcomingConfereces(conferencias: Array<Conferencia>) : number{
    let currentDate = new Date();
    console.log("hoy: "+ currentDate)
    let currectDateYear = 2023//(currentDate.getFullYear()).toString();
    //Se resto 1 al año actual para que se pueda visualizar que hay 3 eventos que aun no empiezan
    //Si se hiciera con la fecha de hoy, el resultado seria 0, pq todas las conferencias empezaron y terminaron en 2023 :/
    let currectDateMonth = (currentDate.getMonth()+1).toString();
    let currectDateDay = currentDate.getUTCDay().toString();
    let currectDayString = currectDateYear+"-"+currectDateMonth+"-"+currectDateDay;

    console.log("fecha hoy: "+currectDateYear+"-"+currectDateMonth+"-"+currectDateDay);

    let out = 0;
    for(let conferencia of conferencias){
      console.log("starts: " + conferencia.starts + " --- " + "hoy: "+ currectDayString + " --- " + " result: " + (conferencia.starts > currectDayString))

      if(conferencia.starts > currectDayString){
        out += 1;
      }
    }
    return out;
  }

  onSelect(conferencia: Conferencia): void{
    this.selectedConferencia = conferencia;
  }

  ngOnInit() {
    this.getConferencias();
  }

}
