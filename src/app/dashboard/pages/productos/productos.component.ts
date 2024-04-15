import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
import { ProductService } from '@services/product.service';
import { TitleComponent } from '@shared/title/title.component';
import ProductTableComponent from './product-table/product-table.component';
import SearchResultComponent from './product-table/search-result/search-result.component';
import { ProductItem } from '@interfaces/product';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [
    CommonModule,
    TitleComponent,
    ProductTableComponent, 
    SearchResultComponent
  ],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ProductosComponent  { 

    public title: string = 'Mis productos';
    public subtitle: string  =  'Busca, registra o actualiza productos';
    public productsService = inject(ProductService);

    // ngOnInit(): void {
      
    // }
    constructor() {
      
    }

    addProduct() {
      const empanada: ProductItem = {
        id: 'ewe23423232323',
        pin: false,
        img: 'assets/images/product/photo/queque_mediano.jpg', // Suponiendo que 'assets/images/empanada.jpg' es una URL segura
        name: 'Empanada',
        tag: 'Comida',
        cost: 1.5, // Costo en dólares
        price: 3.0, // Precio de venta en dólares
        stock: 100, // Cantidad en stock
        utility: 1.5, // Utilidad por cada empanada vendida en dólares
        percent: 100 * ((3.0 - 1.5) / 1.5), // Porcentaje de utilidad (100% de ganancia)
        revenue: 150, // Ingresos generados por la venta de 100 empanadas (3.0 * 100)
        due: false,
        removed: false,
        creationDate: new Date('2024-04-08'), // Fecha de creación (hoy)
        modificationDate: new Date('2024-04-08') // Fecha de última modificación (hoy)
      };
      this.productsService.addProduct(empanada);
      console.log('add');
    }

    

}








