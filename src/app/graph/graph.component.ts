import { Component, OnInit} from '@angular/core';
import {Chart, ChartConfiguration, ChartItem, registerables} from 'node_modules/chart.js'

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
  continentAmountAntarctica!:number;
  cnv!:any;

  constructor(){
  }








  ngOnInit(): void {
    this.cnv=document.getElementById("my-chart");
    this.cnv.style.backgroundColor = "#add8e6"
    this.continentAmountAfrica=27;
    this.continentAmountEurope=50;
    this.continentAmountNA=33;
    this.continentAmountSA=15;
    this.continentAmountAsia=22;
    this.continentAmountOceania=17;
    this.continentAmountAntarctica=1;
    this.createChart()

}


createChart(): void {
  Chart.register(...registerables);
  const data = {
    labels: ['Afrique','Europe','Amérique du Nord','Amérique du Sud','Asie','Océanie','Antarctique'],
    datasets: [{
      label: 'Destinations par Continent',
      backgroundColor: 'rgb(240, 230, 81)',
      borderColor: 'rgb(240, 230, 81)',
      data: [this.continentAmountAfrica, this.continentAmountEurope, this.continentAmountNA, this.continentAmountSA,  this.continentAmountAsia, this.continentAmountOceania,this.continentAmountAntarctica],
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
