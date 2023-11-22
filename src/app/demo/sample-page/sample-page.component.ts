import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { LoginService } from 'src/app/services/login.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-sample-page',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.scss']
})
export default class SamplePageComponent implements OnInit {
  accounts: any[] = [];

  constructor(
    private loginService: LoginService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.loginService.listAccounts().subscribe(data => {
      this.accounts = data;
      this.loadAccounts();
    });
  }


  openDeleteModal(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteAccount(id);
      }
    });
  }

  deleteAccount(id: number) {
    this.loginService.deleteAccount(id).subscribe(() => {
      this.loadAccounts(); // Recargar la lista después de eliminar
    }, error => {
      console.error('Error al eliminar la cuenta', error);
    });
  }

  loadAccounts() {
    this.loginService.listAccounts().subscribe(data => {
      this.accounts = data;
    });
  }
}
