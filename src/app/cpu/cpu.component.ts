import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
 
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
@Component({
  selector: 'app-cpu',
  templateUrl: './cpu.component.html',
  styleUrls: ['./cpu.component.css']
})
export class CpuComponent {
	options: any;

	constructor() {
	  this.options = {
		theme: "light2", // "light1", "light2", "dark1", "dark2"
		animationEnabled: true,
		zoomEnabled: true,
		title: {
		  text: "The Process of the Central Processing Unit (CPU) of the Gateway"
		},
		data: [{
		  type: "area",
		  dataPoints: this.generateDataPoints(1000)
		}]
	  };
	}
  
	generateDataPoints(noOfDps: number) {
	  let dataPoints = [];
	  let xVal = 1, yVal = 100;
  
	  for (let i = 0; i < noOfDps; i++) {
		yVal += Math.round(5 + Math.random() * (-5 - 5));
		dataPoints.push({ x: xVal, y: yVal });
		xVal++;
	  }
  
	  return dataPoints;
	}
  }
  