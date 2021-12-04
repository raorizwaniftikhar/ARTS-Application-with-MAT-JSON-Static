import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RootJson } from '../../interfaces/interfaces';
import { ProfileDialogComponent } from '../profile/profile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title = 'Header Component';
  @Input() jsonData: RootJson | undefined;

  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      // width: '250px',
      data: this.jsonData?.myDetails
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
