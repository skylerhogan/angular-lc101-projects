import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Photos';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.coinbuzz.com%2Fwp-content%2Fuploads%2F2015%2F03%2Fbitcoin-logo-plain.png&f=1&nofb=1';
  image3 = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F8%2F88%2FDuckDuckGo_logo.svg%2F1200px-DuckDuckGo_logo.svg.png&f=1&nofb=1';

  constructor() { }

  ngOnInit() {
  }

}