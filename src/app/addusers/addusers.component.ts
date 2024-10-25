import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css'],
})
export class AddusersComponent {
  userform: FormGroup;

  constructor(private dialogRef: MatDialogRef<AddusersComponent>) {
    this.userform = new FormGroup({
      Name: new FormControl('', [Validators.required]),
      ID: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      Number_of_Gateways :new FormControl('', [Validators.required]),
      Number_of_Devices :new FormControl('', [Validators.required]),
    });
  }

  addUser() {
    if (this.userform.valid) {
      const userData = this.userform.value;
      this.dialogRef.close(userData);
    }
  }
}
