
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    event.preventDefault();

    var blanks = ["adjective", "adjective2", "adjective3", "adjective4", "adverb", "verb", "person",
    "man", "cop", "woman", "city", "landmark", "place", "building1", "building2","building3",
    "building4","thing","thing2","thing3","emotion","emotion2","quote","time","weather","weather2",
    "bodypart","bodypart2"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    $("#blanks").hide();
    $("#story").show();
  });
});
