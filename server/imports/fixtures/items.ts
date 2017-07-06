import { Items } from '../../../both/collections/items.collection';
import { Item } from '../../../both/models/item.model'; 

export function loadItems() {
  if (Items.find().cursor.count() === 0) {
    const items: Item[] = [{
      name: "Android TV",
      excerpt: "Android TV Quad Core V.7.0",
      price: 150,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/android-tv-6.jpg",
      station: "electronics",
      success: true
    }, {
      name: "Speakers BT Genius",
      excerpt: "Speakers BT Genius 100 Watts",
      price: 200,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/geniusBT.JPG",
      station: "electronics",
      success: true
    }, {
      name: "Televisor AOC",
      excerpt: "Tv AOC 43 Inches, Smart TV",
      price: 300,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/AOC.jpg",
      station: "electronics",
      success: true
    }, {
      name: "Cafetera NESPRESSO",
      excerpt: "Cafetera NESPRESSO Inissia",
      price: 200,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/cafetera-nespresso.jpg",
      station: "electronics",
      success: true
    }, {
      name: "iPhone 6s 16 GB",
      excerpt: "iPhone 6s 16 GB Color Negro",
      price: 450,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/iphone.jpeg",
      station: "electronics",
      success: true
    }, {
      name: "Star Wars Ep. IV",
      excerpt: "Star Wars from George Lucas",
      price: 150,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/android-tv-6.jpg",
      station: "movies",
      success: true
    }, {
      name: "Seven Samurai",
      excerpt: "Seven Samurai from Akira Kurosawa",
      price: 150,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/7samurai2.jpg",
      station: "movies",
      success: true
    }, {
      name: "A Clockwork Orange",
      excerpt: "A Clockwork Orange from Stanley Kubrick",
      price: 150,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/clockwork.jpg",
      station: "movies",
      success: true
    }, {
      name: "300",
      excerpt: "300 from Zack Snyder",
      price: 150,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/300.jpg",
      station: "movies",
      success: true
    }, {
      name: "The Terminator",
      excerpt: "The Terminator from James Cameron",
      price: 150,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/the-terminator-1.jpg",
      station: "movies",
      success: true
    }, {
      name: "Super Mario Bros 64",
      excerpt: "Super Mario Bros 64",
      price: 80,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/mario64.jpg",
      station: "videogames",
      success: true
    }, {
      name: "The Legend Of Zelda: Ocarina Of Time",
      excerpt: "The Legend Of Zelda: Ocarina Of Time",
      price: 80,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/zelda.jpg",
      station: "videogames",
      success: true
    }, {
      name: "Megaman X",
      excerpt: "Megaman X",
      price: 80,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/megamanx.JPG",
      station: "videogames",
      success: true
    }, {
      name: "Borderlands",
      excerpt: "Borderlands",
      price: 80,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/borderlands.jpg",
      station: "videogames",
      success: true
    }, {
      name: "God Of War",
      excerpt: "God Of War",
      price: 80,
      url: "https://snuuper.s3.amazonaws.com/snuuperTest/godOfWar.jpg",
      station: "videogames",
      success: true
    }];
 
    items.forEach((item: Item) => Items.insert(item));
  }
}