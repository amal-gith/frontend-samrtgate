import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeviceService } from '../adddevices/device.service';
import { AdddevicesComponent } from '../adddevices/adddevices.component';
import { SettingComponent } from '../setting/setting.component';

@Component({
  selector: 'app-device-manager',
  templateUrl: './device-manager.component.html',
  styleUrls: ['./device-manager.component.css']
})
export class DeviceManagerComponent implements OnInit {
  addedDevices: AddedDevice[] = [];

  constructor(private dialog: MatDialog, private deviceService: DeviceService) {}

  ngOnInit() {
    this.deviceService.getDevices().subscribe(devices => {
      this.addedDevices = devices;
    });
  }

  openAddUserDialog() {
    this.dialog.open(AdddevicesComponent, {
      width: '600px',
    });
  }

  openSettingDialog() {
    this.dialog.open(SettingComponent, {
      width: '600px',
    });
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
