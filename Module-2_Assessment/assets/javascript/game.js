const wordList = ['Andromeda', 'Betelgeuse', 'Celestial',
  'Dipper', 'Eclipse', 'Ganymede', 'Hubble', 'Interstellar',
  'Jupiter', 'Oumuamua', 'Pluto', 'Satellite'];
const clueList = [
  'The closest neighboring galaxy of the Milky Way',
  'A prominent red giant star in the constellation Orion',
  'The word often used to describe objects in space',
  'Nickname for two notable constellations, big and little',
  'When the Earth or Moon fully obscures all sunlight',
  'The largest moon in the solar system, orbits Jupiter',
  'A legendary astronomer, also the name of a telescope',
  'Being between stars, outside the solar system',
  'A gas giant, the largest planet in our solar system',
  'Name of a notable asteroid from outside the solar system',
  'A dwarf planet that was once the ninth main planet',
  'An object that orbits a planet, natural or manmade'];
var message = document.querySelector('#message');
var wins = document.querySelector('#wins');
var blanks = document.querySelector('#blanks');
var guess = document.querySelector('#guess');
var clue = document.querySelector('#clue');
var guesses = document.querySelector('#guesses');
var letters = document.querySelector('#letters');
var guessArr = [];
var updateStr = '';
var winCnt = 0;
var guessCnt = 15;
var index = Math.floor(Math.random()*wordList.length);
var curWord = wordList[index];
wins.innerText = winCnt;
clue.innerText = clueList[index];
guesses.innerText = guessCnt;
for(x=0;x<curWord.length;x++)
{
  updateStr += '_ ';
}
blanks.innerText = updateStr;
document.addEventListener('keypress', keyCheck);
function keyCheck(event)
{
  var key = event.key.toUpperCase();
  guess.innerText = key;
  if(!guessArr.includes(key))
  {
    guessArr.push(key);
    guessCnt--;
    guesses.innerText = guessCnt;
    letters.innerText = letterStr(guessArr);
  }
  if(guessCnt==0)
  {
    message.innerText = 'Sorry! Try again!';
    gameReset();
  }
  if(curWord.toUpperCase().includes(key))
  {
    updateStr = blankStr(curWord, guessArr);
    blanks.innerText = updateStr;
    if(!updateStr.includes('_'))
    {
      message.innerText = curWord;
      winCnt++;
      wins.innerText = winCnt;
      gameReset();
    }
  }
}
function letterStr(arr)
{
  var newStr = '';
  for(x=0;x<arr.length;x++)
  {
    newStr += arr[x];
    if(x<arr.length-1)
    {
      newStr += ', ';
    }
  }
  return newStr;
}
function gameReset()
{
  index = Math.floor(Math.random()*wordList.length);
  curWord = wordList[index];
  guessArr = [];
  guessCnt = 15;
  blanks.innerText = blankStr(curWord, guessArr);
  guess.innerText = '';
  clue.innerText = clueList[index];
  guesses.innerText = guessCnt;
  letters.innerText = '';
}
function blankStr(word, arr)
{
  var newStr = '';
  for(x=0;x<word.length;x++)
  {
    if(arr.includes(word[x].toUpperCase()))
    {
      newStr += word[x]+' ';
    }
    else
    {
      newStr += '_ ';
    }
  }
  return newStr;
}