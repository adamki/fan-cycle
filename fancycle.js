$(document).ready(function() {

  $("#justin").click(function(){
    toggleSong("#baby");
    increaseViews('#baby');
    colorize("#baby");
  });

  $('#selena').click(function(){
    toggleSong('#come-and-get-it');
    increaseViews('#come-and-get-it');
    colorize("#come-and-get-it");
  });

  $('#miley').click(function(){
    toggleSong('#wrecking-ball');
    increaseViews('#wrecking-ball');
    colorize("#wrecking-ball");
  });

  $("#colorize").click(function(){
    colorize("#baby");
  });

  function toggleSong(songID){
    $(songID).toggleClass('hidden');
  };

  function increaseViews(songID) {
    var counter = $(songID).find("#view-counter").text();
    counter ++;
    $(songID).find("#view-counter").text(counter);
  };

  function colorize(songID){
    $(songID).toggleClass('color');
  };
});


