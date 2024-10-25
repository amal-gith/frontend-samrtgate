import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanvasJS } from '@canvasjs/angular-charts';


@Component({
  selector: 'app-tmp',
  templateUrl: './tmp.component.html',
  styleUrls: ['./tmp.component.css']
})
export class TmpComponent implements OnInit {
  private apiUrl = 'http://192.168.1.38/temperature/last'; // URL de votre API

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.loadChart();
  }

  loadChart(): void {
    this.http.get<any>(this.apiUrl) // Adaptez en fonction des données retournées par l'API
      .subscribe(
        data => {
          console.log('Data received:', data); // Vérifiez les données ici
          var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            zoomEnabled: true,
            title: {
              text: "The CPU Temperature of the Gateway"
            },
            axisX: {
              title: "Time",
              valueFormatString: "HH:mm:ss",
              labelAngle: -45
            },
            axisY: {
              title: "Temperature (°C)",
              minimum: 0
            },
            data: [{
              type: "line",
              color: "#FF0000",
              dataPoints: this.generateDataPoints(data)
            }]
          });
          chart.render();
        },
        error => {
          console.error('Error fetching temperature data', error);
        }
      );
  }

  generateDataPoints(data: any): any[] {
    // Exemple pour une seule donnée
    return [{
      x: new Date(), // Utilisez la date actuelle ou adaptez selon les données
      y: data.temperature // Assurez-vous que `temperature` est un champ valide
    }];
  }
}