
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var adjectiveInput = $("input#adjective").val();
    var adverbInput = $("input#adverb").val();
    var verbInput = $("input#verb").val();
    var personInput = $("input#person").val();
    var cityInput = $("input#city").val();
    var landmarkInput = $("input#landmark").val();
    var placeInput = $("input#place").val();
    var thingInput = $("input#thing").val();
    var emotionInput = $("input#emotion").val();
    var exclamationInput = $("input#exclamation").val();
    var quoteInput = $("input#quote").val();
    var timeInput = $("input#time").val();
    var weatherInput = $("input#weather").val();
    var bodypartInput = $("input#bodypart").val();
    var bodypart2Input = $("input#bodypart2").val();

    $(".adjective").text(adjectiveInput);
    $(".adverb").text(adverbInput);
    $(".verb").text(verbInput);
    $(".person").text(personInput);
    $(".city").text(cityInput);
    $(".landmark").text(landmarkInput);
    $(".place").text(placeInput);
    $(".thing").text(thingInput);
    $(".emotion").text(emotionInput);
    $(".exclamation").text(exclamationInput);
    $(".quote").text(quoteInput);
    $(".time").text(timeInput);
    $(".weather").text(weatherInput);
    $(".bodypart").text(bodypartInput);
    $(".bodypart2").text(bodypart2Input);

    $("#blanks").hide();
    $("#story").show();

    event.preventDefault();
  });
});
