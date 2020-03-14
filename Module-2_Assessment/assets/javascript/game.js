const wordList = ['Andromeda', 'Betelgeuse', 'Celestial',
'Dipper', 'Eclipse', 'Ganymede', 'Hubble', 'Interstellar',
'Jupiter', 'Oumuamua', 'Pluto', 'Satellite'];
var curWord = wordList[Math.floor(Math.random()*12)];
var guessArr = [];
var guess = document.querySelector('#guess');
var blanks = document.querySelector('#blanks');
var message = document.querySelector('#message');
var updateStr = '';
for(x=0;x<curWord.length;x++)
{
  updateStr += '_ ';
}
blanks.innerText = updateStr;
updateStr = '';
document.addEventListener('keypress', keyCheck);
function keyCheck (event)
{
  var key = event.key.toUpperCase();
  guess.innerText = key;
  guessArr.push(key);
  if(curWord.toUpperCase().includes(key))
  {
    for(x=0;x<curWord.length;x++)
    {
      if(guessArr.includes(curWord[x].toUpperCase()))
      {
        updateStr += curWord[x]+' ';
      }
      else
      {
        updateStr += '_ ';
      }
    }
    blanks.innerText = updateStr;
    if(updateStr.includes('_'))
    {
      message.innerText = 'Good guess!';
    }
    else
    {
      message.innerText = 'You win!';
    }
    updateStr = '';
  }
  else
  {
    message.innerText='Guess again!';
  }
}