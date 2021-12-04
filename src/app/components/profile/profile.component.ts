import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyDetails } from './../../interfaces/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileDialogComponent {
  title = 'Profile Component';
  profile: MyDetails | undefined
  constructor(
    public dialogRef: MatDialogRef<ProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MyDetails,
  ) {
    console.log('data 👉 ', data)
    this.profile = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
