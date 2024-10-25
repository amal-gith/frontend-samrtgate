import { Component } from '@angular/core';

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
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  devices: Device[] = [
    { value: '0', viewValue: 'Smart Agriculture' },
    { value: '1', viewValue: 'AquaOptim' },
    { value: '2', viewValue: 'Healthcare' },
    { value: '3', viewValue: 'Industriel' },
    { value: '4', viewValue: 'Others' }
  ];

  // Form fields
  deviceId: string = '';
  selectedDeviceType: string = '';
  selectedConnectivity: string = '';
  macAddress: string = '';
  ipAddress: string = '';
  loraAddress: string = '';

  // List of added devices
  addedDevices: AddedDevice[] = [];

  // Method to add a device
  addDevice() {
    const newDevice: AddedDevice = {
      id: this.deviceId,
      type: this.selectedDeviceType,
      connectivity: this.selectedConnectivity,
      macAddress: this.selectedConnectivity === 'Bluetooth' ? this.macAddress : undefined,
      ipAddress: this.selectedConnectivity === 'Wi-Fi' ? this.ipAddress : undefined,
      loraAddress: this.selectedConnectivity === 'LoRa' ? this.loraAddress : undefined,
    };

    this.addedDevices.push(newDevice);

    // Reset form fields
    this.deviceId = '';
    this.selectedDeviceType = '';
    this.selectedConnectivity = '';
    this.macAddress = '';
    this.ipAddress = '';
    this.loraAddress = '';
  }

  // Define the openAddUserDialog method
  openAddUserDialog() {
    // Placeholder for opening a dialog or performing an action
    console.log('Add User Dialog opened.');
  }
}
