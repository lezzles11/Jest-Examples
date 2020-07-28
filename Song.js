/*
Exercises C: Songs 
Add the property name , album and author for the class song. They should be initialized in the constructor. 
And add a method getDescription which should return the The name of this song is ${name} and it is from the album ${album}. 
It is written by ${author} on called.

Exercise D: Song Information
Create a Song.test.js which should test for correctness of the properties name ,album and author . 
And also test for the correctness of the getDescription method.

Exercise E: Same Album? 
Create an extra method on the Song Class called isInSameAlbum(otherSong)to check if two songs are in the same album. 
It should return true if they belong to the same album and return false if they are not. 
Please update your Song.test.js accordingly to include this case.
*/

class Song {
  constructor(name, album, author) {
    this.name = name;
    this.album = album;
    this.author = author;
  }
  getDescription() {
    return `The name of this song is ${this.name} and it is from the album ${this.album}. It is written by ${this.author}.`;
  }

  //   persistFavoriteStatus = function (value) {
  //     console.log("hi");
  //   };
}
let newSong = new Song("lesley", "lesley's album", "lesley's the author");
console.log(newSong.getDescription());
