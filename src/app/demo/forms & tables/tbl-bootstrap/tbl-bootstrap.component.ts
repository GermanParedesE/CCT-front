import { Component, OnInit }  from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { AgrupationService} from 'src/app/services/agrupation.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tbl-bootstrap',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './tbl-bootstrap.component.html',
  styleUrls: ['./tbl-bootstrap.component.scss']
})

export default class TblBootstrapComponent implements OnInit {
  agrupations: any[] = [];

  constructor(
    private agrupationService: AgrupationService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.agrupationService.listAgrupations().subscribe(data => {
      this.agrupations = data;
      this.loadAgrupations();
    });
  }

  openDeleteModal(id: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteAgrupation(id);
      }
    });
  }

  deleteAgrupation(id: number) {
    this.agrupationService.deleteAgrupation(id).subscribe(() => {
      // Luego de eliminar, recarga la lista de agrupaciones
      this.loadAgrupations();
    }, error => {
      console.error('Error al eliminar la agrupación', error);
    });
  }
  loadAgrupations() {
    this.agrupationService.listAgrupations().subscribe(data => {
      this.agrupations = data;
    });
  }

}
