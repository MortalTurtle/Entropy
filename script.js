str = process.argv[2].toString();

alph= new Array();
for (let i = 0; i < str.length; i++)
	if (alph[str[i]])
		alph[str[i]]++;
	else
		alph[str[i]] = 1;

let N = 0;
for (let i in alph)
{
	N++;
	alph[i] /= str.length;
}
var entropy = 0;
if (N > 1)
{
	for (let i in alph)
		entropy -= alph[i] * Math.log(alph[i]);
	entropy /= Math.log(N);
}
console.log(alph)
console.log(entropy)