const wordList = ['Andromeda', 'Betelgeuse', 'Celestial',
'Dipper', 'Eclipse', 'Ganymede', 'Hubble', 'Interstellar',
'Jupiter', 'Oumuamua', 'Pluto', 'Satellite'];
var curWord = wordList[Math.floor(Math.random()*12)];
var guessArr = [];
var message = document.querySelector('#message');
var wins = document.querySelector('#wins');
var guess = document.querySelector('#guess');
var blanks = document.querySelector('#blanks');
var guesses = document.querySelector('#guesses');
var letters = document.querySelector('#letters');
var updateStr = '';
var winCnt = 0;
var guessCnt = 15;
wins.innerText = winCnt;
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
    message.innerText = 'You lose! Try again!';
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
  curWord = wordList[Math.floor(Math.random()*12)];
  guessArr = [];
  guessCnt = 15;
  blanks.innerText = blankStr(curWord, guessArr);
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