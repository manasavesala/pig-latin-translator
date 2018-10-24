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
      var letter = /^[a-zA-Z]+$/;
      if(wordArray[0].match(letter)){
        if(vowels.includes(wordArray[0])){
          wordArray[wordArray.length-1]=wordArray[wordArray.length-1]+"way";
        }
        // could these nested ifs below become one for loop?
        if(!vowels.includes(wordArray[0])){
          if(!vowels.includes(wordArray[1])){
            if(!vowels.includes(wordArray[2])){
              wordArray[wordArray.length]=wordArray[0]+wordArray[1]+wordArray[2]+"ay";
              wordArray[0]="";
              wordArray[1]="";
              wordArray[2]="";
            }
            else if ((wordArray[1]===("q"||"Q"))&&(wordArray[2]===("u"||"U"))){
                wordArray[wordArray.length]=wordArray[0]+wordArray[1]+wordArray[2]+"ay";
                wordArray[0]="";
                wordArray[1]="";
                wordArray[2]="";
              }
            else{
              wordArray[wordArray.length]=wordArray[0]+wordArray[1]+"ay";
              wordArray[0]="";
              wordArray[1]="";
            }
          }
          else{
            if((wordArray[0]===("q"||"Q"))&&(wordArray[1]===("u"||"U"))){
              wordArray[wordArray.length]=wordArray[0]+wordArray[1]+"ay";
              wordArray[0]="";
              wordArray[1]="";
            }
            else{
              wordArray[wordArray.length]=wordArray[0]+"ay";
              wordArray[0]="";
            }

          }
        }
      }
      characterSplit[x]=(wordArray.join(""));
    }
  }
  return characterSplit.join(" ");
}

$(document).ready(function() {
  $("button").click(function(){
    var inputSentence = $("#inputSentence").val();
    var scrambledSentence = sentenceScrambler(inputSentence);
    $("#output").text("Your coded sentence is: " + scrambledSentence);


    });

});
