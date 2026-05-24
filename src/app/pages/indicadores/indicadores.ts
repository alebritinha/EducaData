import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-indicadores',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './indicadores.html',
  styleUrl: './indicadores.scss',
})
export class IndicadoresComponent {}
