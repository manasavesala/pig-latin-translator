var sentenceScrambler = function(sentence) {
  var characterSplit = sentence.split(" ");
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  // var consonants = ["b" etc];
  for (x=0; x < characterSplit.length; x++) {
    if (vowels.includes(characterSplit[x])) {
      characterSplit[x] = characterSplit[x] + "ay ";
      }
    else if (characterSplit[x].length>1){
      var wordArray = characterSplit[x].split("");
      if(vowels.includes(wordArray[0])){
        wordArray[wordArray.length-1]=wordArray[wordArray.length-1]+"way";
      }
      characterSplit[x]=(wordArray.join(""));
    }
    return characterSplit.join(" ");
  }
}

$(document).ready(function() {
  $("button").click(function(){
    var inputSentence = $("#inputSentence").val();
    var scrambledSentence = sentenceScrambler(inputSentence);
    $("#output").text("Your coded sentence is: " + scrambledSentence);


    });

});
