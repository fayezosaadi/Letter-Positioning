var str = process.argv.slice(2).join("");
console.log(str);


function getFrequency(str) {
  var freq = {};
  for (var i = 0; i < str.length; i++) {
    var character = str.charAt(i).toLowerCase();
    if (character !== " "){
      if (freq[character]) {
        freq[character].push(i);
      }
      else {
        freq[character] = [i];
      }
    }
  }
  return freq;
}
console.log(getFrequency(str));