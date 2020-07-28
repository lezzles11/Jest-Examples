// A player can play, pause and resume the song
class Player {
  play(song) {
    this.currentlyPlayingSong = song;
    this.isPlaying = true;
  }
  pause() {
    this.isPlaying = false;
  }
  resume() {
    if (this.isPlaying) {
      throw new Error("Song is already playing");
    }
    this.isPlaying = true;
  }
  makeFavourite() {
    this.currentlyPlayingSong.persistFavoriteStatus(true);
  }
}
module.exports = Player;
