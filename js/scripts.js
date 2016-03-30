
$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var adjectiveInput = $("input#adjective").val();
    var adjective2Input = $("input#adjective2").val();
    var adjective3Input = $("input#adjective3").val();
    var adjective4Input = $("input#adjective4").val();
    var adverbInput = $("input#adverb").val();
    var verbInput = $("input#verb").val();
    var personInput = $("input#person").val();
    var manInput = $("input#man").val();
    var copInput = $("input#cop").val();
    var womanInput = $("input#woman").val();
    var cityInput = $("input#city").val();
    var landmarkInput = $("input#landmark").val();
    var placeInput = $("input#place").val();
    var building1Input = $("input#building1").val();
    var building2Input = $("input#building2").val();
    var building3Input = $("input#building3").val();
    var building4Input = $("input#building4").val();
    var thingInput = $("input#thing").val();
    var thing2Input = $("input#thing2").val();
    var thing3Input = $("input#thing3").val();
    var emotionInput = $("input#emotion").val();
    var emotion2Input = $("input#emotion2").val();
    var quoteInput = $("input#quote").val();
    var timeInput = $("input#time").val();
    var weatherInput = $("input#weather").val();
    var weather2Input = $("input#weather2").val();
    var bodypartInput = $("input#bodypart").val();
    var bodypart2Input = $("input#bodypart2").val();

    $(".adjective").text(adjectiveInput);
    $(".adjective2").text(adjective2Input);
    $(".adjective3").text(adjective3Input);
    $(".adjective4").text(adjective4Input);
    $(".adverb").text(adverbInput);
    $(".verb").text(verbInput);
    $(".person").text(personInput);
    $(".man").text(manInput);
    $(".cop").text(copInput);
    $(".woman").text(womanInput);
    $(".city").text(cityInput);
    $(".landmark").text(landmarkInput);
    $(".place").text(placeInput);
    $(".building1").text(building1Input);
    $(".building2").text(building2Input);
    $(".building3").text(building3Input);
    $(".building4").text(building4Input);
    $(".thing").text(thingInput);
    $(".thing2").text(thing2Input);
    $(".thing3").text(thing3Input);
    $(".emotion").text(emotionInput);
    $(".emotion2").text(emotion2Input);
    $(".quote").text(quoteInput);
    $(".time").text(timeInput);
    $(".weather").text(weatherInput);
    $(".weather2").text(weather2Input);
    $(".bodypart").text(bodypartInput);
    $(".bodypart2").text(bodypart2Input);

    $("#blanks").hide();
    $("#story").show();

    event.preventDefault();
  });
});
