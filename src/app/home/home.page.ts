import { Component } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public scannerResult = '';
  constructor(
    private data: DataService,
    private barcodeScanner: BarcodeScanner) {}

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getMessages(): Message[] {
    return this.data.getMessages();
  }

  onStartScanningClicked(): void {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannerResult = barcodeData.text;
     }).catch(err => {
         console.log('Error', err);
         this.scannerResult = err;
     });
  }
}
