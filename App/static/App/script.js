// simple MediaElement init. We use jQuery because index.html loaded it.
$(document).ready(function () {
  $('audio.fc-media').mediaelementplayer({
    features: ['playpause','current','progress','duration','volume'],
    audioWidth: '100%',
    audioHeight: 60,
    startVolume: 0.8,
    // ensure only one audio plays at a time
    success: function(mediaElement, originalNode) {
      mediaElement.addEventListener('play', function() {
        $('audio.fc-media').each(function(){
          if (this !== originalNode && this.player !== undefined) {
            try { this.player.pause(); } catch(e){ this.pause(); }
          }
        });
      });
    }
  });
});
