import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-detalhes-material',

  standalone: true,

  imports: [
    CommonModule,
    RouterModule
  ],

  templateUrl: './detalhes-material.html',
  styleUrl: './detalhes-material.scss'
})

export class DetalhesMaterialComponent {

}