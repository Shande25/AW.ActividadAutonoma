import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as epicData from '../../../../public/json/epicData.json';
import { Epic } from './utils/epic';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
epics: Epic[]=(epicData as any).default;
}
