// device.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private devicesSubject = new BehaviorSubject<AddedDevice[]>(this.loadDevicesFromLocalStorage());
  devices$: Observable<AddedDevice[]> = this.devicesSubject.asObservable();

  addDevice(device: AddedDevice) {
    const devices = this.loadDevicesFromLocalStorage();
    devices.push(device);
    this.saveDevicesToLocalStorage(devices);
    this.devicesSubject.next(devices);
  }

  getDevices(): Observable<AddedDevice[]> {
    return this.devices$;
  }

  private loadDevicesFromLocalStorage(): AddedDevice[] {
    const devicesJson = localStorage.getItem('devices');
    return devicesJson ? JSON.parse(devicesJson) : [];
  }

  private saveDevicesToLocalStorage(devices: AddedDevice[]) {
    localStorage.setItem('devices', JSON.stringify(devices));
  }
}

interface AddedDevice {
  id: string;
  type: string;
  connectivity: string;
  macAddress?: string;
  ipAddress?: string;
  loraAddress?: string;
}
