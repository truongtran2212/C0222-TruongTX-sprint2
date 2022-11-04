import {Component} from '@angular/core';
import {ShareDataService} from './service/share-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop-online';

  quantityProduct = 0;

  constructor(private shareDataService: ShareDataService) {
    this.shareDataService.getClickEvent().subscribe(
      () => {
        this.ngOnInit();
      }
    );
  }
  ngOnInit(): void {
    this.quantityProduct = localStorage.length;
    if (localStorage.getItem('__paypal_storage__') !== null) {
      this.quantityProduct--;
    }
  }
}
