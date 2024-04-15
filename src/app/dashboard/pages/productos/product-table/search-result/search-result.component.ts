import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { ProductItem } from '@interfaces/product';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchResultComponent {

    @Input() numbersFound: number = 0;
    @Input() productsFound: Array<ProductItem> = [];
    excelIconUrl!:SafeUrl; 

    constructor(private sanitizer: DomSanitizer){
      this.excelIconUrl = this.getIcon('assets/images/product/excel.svg');
    }
  
    getIcon(iconRoute: string): SafeUrl {
      return this.sanitizer.bypassSecurityTrustUrl(iconRoute);
    }

}
