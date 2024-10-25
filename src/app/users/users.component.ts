import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddusersComponent } from '../addusers/addusers.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users: any[] = []; // This will hold the users data

  constructor(private dialog: MatDialog) {}

  openAddUserDialog() {
    const dialogRef = this.dialog.open(AddusersComponent, {
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.users.push(result);
      }
    });
  }
}
