import { Component } from "@angular/core";
import {BarcodeScanner} from "nativescript-barcodescanner";

@Component({
  selector: "main",
  templateUrl: "app.component.html"
})
export class AppComponent {

  constructor(private barcodeScanner: BarcodeScanner){

  }

  ngOnInit() {
        this.barcodeScanner.available().then((available) => {
            if(available) {
                this.barcodeScanner.hasCameraPermission().then((granted) => {
                    if(!granted) {
                        this.barcodeScanner.requestCameraPermission();
                    }
                });
            }
        });
    }

  tapMenu(menuTab: string){
    console.log(menuTab);

  }
}