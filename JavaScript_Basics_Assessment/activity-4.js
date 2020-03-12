const names = ['Alice', 'Bobby', 'Charlie'];
for (i = 0; i < 3; i++)
{
  var input = prompt(`Enter another name`);
  names.push(input);
}
for (j = 0; j < names.length; j++)
{
  console.log(names[j]);
}