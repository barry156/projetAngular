import { Component, OnInit} from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'
import { DestinationService } from '../services/destination.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.scss']
})
export class GraphComponent implements OnInit{
  continentAmountAfrica!:number;
  continentAmountEurope!:number;
  continentAmountNA!:number;
  continentAmountSA!:number;
  continentAmountAsia!:number;
  continentAmountOceania!:number;
  cnv!:any;

  constructor(destinationService :DestinationService){
    this.continentAmountAfrica=destinationService.getAfriqueDestinations().length;
    this.continentAmountEurope=destinationService.getEuropeDestinations().length;
    this.continentAmountNA=destinationService.getNADestinations().length;
    this.continentAmountSA=destinationService.getSADestinations().length;
    this.continentAmountAsia=destinationService.getAsieDestinations().length;
    this.continentAmountOceania=destinationService.getOceanieDestinations().length;

  }








  ngOnInit(): void {
    this.cnv=document.getElementById("my-chart");
    this.cnv.style.backgroundColor = "#add8e6"
    this.createChart()

}


createChart(): void {
  Chart.register(...registerables);
  const data = {
    labels: ['Afrique','Europe','Amérique du Nord','Amérique du Sud','Asie','Océanie'],
    datasets: [{
      label: 'Destinations par Continent',
      backgroundColor: 'rgb(240, 230, 81)',
      borderColor: 'rgb(240, 230, 81)',
      data: [this.continentAmountAfrica, this.continentAmountEurope, this.continentAmountNA, this.continentAmountSA,  this.continentAmountAsia, this.continentAmountOceania],
    }]
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      display: false
    }
  }
}

const config: ChartConfiguration = {
  type: 'bar',
  data: data,
  options: options
}

const chartItem: ChartItem = document.getElementById('my-chart') as ChartItem;
new Chart(chartItem, config);
}


}
