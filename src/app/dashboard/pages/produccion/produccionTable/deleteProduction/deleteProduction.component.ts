import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { ProductionItem } from '@interfaces/production'; 
import { ProductionService } from '@services/production.service';

@Component({
  selector: 'app-delete-production',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './deleteProduction.component.html',
  styleUrl: './deleteProduction.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteProductionComponent {

  @Input() productItem?: ProductionItem;

  private productService = inject(ProductionService);

  delete(){
    this.productService.delete(this.productItem);
  }


}
