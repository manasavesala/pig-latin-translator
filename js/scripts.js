var sentenceScrambler = function(sentence) {

  var splitSentence = sentence.split(" ");
  var mappedLatin = splitSentence.map(function(word) {

    if (word.slice(0, 2).toLowerCase() == "qu") {
      return word.slice(2, word.length) + word.slice(0, 2) + "ay"
    }

    if ("AEIOUaeiou".includes(word[0]) && word.length == 1) {
      return word + "ay";
    }

    if ("AEIOUaeiou".includes(word[0])) {
      return word + "way";
    }

    if (!"AEIOUaeiou".includes(word[0])) {
      for (x = 0; x < word.length; x++) {
        if ("AEIOUaeiou".includes(word[x])) {
          var vowel = x
          return word.slice(x, word.length) + word.slice(0, x) + "ay";
        }
      }
    }
});
  return mappedLatin.join(" ");
}






    // var letter = /^[a-zA-Z]+$/;
    // if(word[0].match(letter)){


$(document).ready(function() {
  $("button").click(function(){
    var inputSentence = $("#inputSentence").val();
    $("#output").text(sentenceScrambler(inputSentence));


    });

});
