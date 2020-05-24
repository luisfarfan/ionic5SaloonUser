import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
declare var google: any;


@Component({
  selector: 'app-location-modal',
  templateUrl: './location-modal.page.html',
  styleUrls: ['./location-modal.page.scss'],
})
export class LocationModalPage implements OnInit {

  autocomplete1: { 'query': string };

  autocompleteItems1: any = [];
  GoogleAutocomplete;

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete1 = { query: '' };
    this.autocompleteItems1 = [];
  }

  onSearchChange1(event) {
    if (this.autocomplete1.query == '') {
      this.autocompleteItems1 = [];
      return;
    }

    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete1.query }, (predictions, status) => {
      this.autocompleteItems1 = [];
      console.log(predictions, status);

      predictions.forEach(element => {
        this.autocompleteItems1.push(element.description);
      });
    });
  }

  selectSearchResult1(item) {
    console.log(item);
    this.autocompleteItems1 = [];
    this.autocomplete1.query = item;
    this.modalCtrl.dismiss({
      addr: item
    });
  }

}
