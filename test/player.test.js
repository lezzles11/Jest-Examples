let Player = require("../Player");

let Song = require("../Song");

let player;

let song;

beforeEach(() => {
  player = new Player();

  song = new Song();
});

describe("Players should be able to play songs", () => {
  test("should be able to play a Song", () => {
    player.play(song);

    expect(player.currentlyPlayingSong).toEqual(song);
    // demonstrates the use of custom matchers
    expect(player).toBePlaying(song);
  });
});
