import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Membresia } from '../../../models/membresia';
import { MembresiaService } from '../../../services/membresia.service';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listarmembresia',
  standalone: true,
  imports: [
    MatTableModule,MatButtonModule,RouterLink, MatIconModule],
  templateUrl: './listarmembresia.component.html',
  styleUrl: './listarmembresia.component.css'
})
export class ListarmembresiaComponent implements OnInit{
  displayedColumns: string[] = [
    'codigo',
    'precio',
    'fechaInicio',
    'fechaFin',
    'descripcion',
    'descuento',
    'accion01',
    'accion02'
  ];
  
  dataSource: MatTableDataSource<Membresia> = new MatTableDataSource();
  constructor(private mS: MembresiaService) {}
  ngOnInit(): void {
    this.mS.list().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.mS.getList().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
  }
  eliminar(id: number) {
    this.mS.eliminar(id).subscribe((data) => {
      this.mS.list().subscribe((data) => {
        this.mS.setList(data);
      });
    });
  }
}
