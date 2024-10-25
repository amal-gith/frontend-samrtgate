import { Component } from '@angular/core';
import { DeviceService } from '../adddevices/device.service';

interface Device {
  value: string;
  viewValue: string;
}

interface AddedDevice {
  id: string;
  type: string;
  connectivity: string;
  macAddress?: string;
  ipAddress?: string;
  loraAddress?: string;
}

@Component({
  selector: 'app-adddevices',
  templateUrl: './adddevices.component.html',
  styleUrls: ['./adddevices.component.css']
})
export class AdddevicesComponent {
  devices: Device[] = [
    { value: '0', viewValue: 'Smart Agriculture' },
    { value: '1', viewValue: 'AquaOptim' },
    { value: '2', viewValue: 'Healthcare' },
    { value: '3', viewValue: 'Industriel' },
    { value: '4', viewValue: 'Others' }
  ];

  deviceId: string = '';
  selectedDeviceType: string = '';
  selectedConnectivity: string = '';
  macAddress: string = '';
  addedDevices: AddedDevice[] = [];

  isFormVisible: boolean = true;  // Contrôle la visibilité du formulaire

  constructor(private deviceService: DeviceService) {
    // Souscription pour obtenir les appareils ajoutés
    this.deviceService.getDevices().subscribe(devices => {
      this.addedDevices = devices;
    });
  }
  addDevice() {
    const newDevice: AddedDevice = {
      id: this.deviceId,
      type: this.selectedDeviceType,
      connectivity: this.selectedConnectivity,
      macAddress: this.macAddress,  // Toujours capturer l'adresse MAC
    };
  
    this.deviceService.addDevice(newDevice);
  
    // Réinitialiser les champs du formulaire
    this.deviceId = '';
    this.selectedDeviceType = '';
    this.selectedConnectivity = '';
    this.macAddress = '';
  }
  

  closeForm() {
    this.isFormVisible = false;
    console.log('Form closed');
  }

  openForm() {
    this.isFormVisible = true;
  }
}
