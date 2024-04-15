import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, inject } from '@angular/core';
import { ProductItem } from '@interfaces/product';
import { ProductService } from '@services/product.service';

@Component({
  selector: 'app-delete',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteComponent {

  @Input() productItem?: ProductItem;

  private productService = inject(ProductService);

  delete(){
    this.productService.delete(this.productItem);
  }



}
