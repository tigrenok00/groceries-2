import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import {BarcodeScanner} from "nativescript-barcodescanner";

@Component({
    selector: "orders",
    templateUrl: "pages/orders/orders.html"
})
export class OrdersComponent implements OnInit {

    constructor(
                private route: ActivatedRoute,
                private barcodeScanner: BarcodeScanner,
                private router: Router) { }

    ngOnInit() {

    }

    scan() {

        this.barcodeScanner.scan({
            formats: "QR_CODE, EAN_13",
            cancelLabel: "Stop scanning",
            message: "Go scan something",
            preferFrontCamera: false,
            showFlipCameraButton: false,
            resultDisplayDuration: 500
        }).then((result) => {
            alert({
                title: "Scan result",
                message: "Format: " + result.format + ",\nValue: " + result.text,
                okButtonText: "OK"
            });
        },
         (errorMessage) => {
      console.log("No scan. " + errorMessage);
    });
    }

}