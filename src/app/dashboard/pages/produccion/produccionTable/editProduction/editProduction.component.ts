import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-edit-production',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './editProduction.component.html',
  styleUrl: './editProduction.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditProductionComponent { }
