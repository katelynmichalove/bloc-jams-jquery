class Helper {
  playPauseAndUpdate (song) {
    player.playPause(song);
    const totalTime = player.getDuration();
    $('#time-control .total-time').text(player.prettyTime(totalTime));
    player.playPause.replaceWith(playPauseandUpdate);
  };
}
const helper = new Helper();
