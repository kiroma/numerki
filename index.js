function validateinput(input)
{
	if(input.length != 6)
	{
		alert("Musisz wprowadzić 6 liczb!");
		return false;
	}
	for(var i = 0; i < 6; i++)
	{
		if(input[i] < 1 || input[i] > 49)
		{
			alert("Musisz wprowadzić liczby w zakresie od 1 do 49!");
			return false;
		}
	}
	return true;
};

function checkfordoubles(array, input)
{
	for(var i = 0; i < array.length; i++)
	{
		if(input == array[i])
			return false;
	}
	return true;
};

function countdoubles(a, b)
{
	var doubles = 0;
	for(var i = 0; i < a.length; i++)
	{
		for(var j = 0; j < b.length; j++)
		{
			if(a[i] == b[j])
				doubles++;
		}
	}
	return doubles;
};


do
{
	var user = prompt("Podaj 6 liczb w zakresie 1-49 oddzielonych spacją", "np. \"1 23 44 49 12 7\"").split(" ");
}while(!validateinput(user));

var results = new Array;
for (var i = 0; i < 6; i++)
{
	do
	{
		var n = Math.floor(Math.random()*49)+1;
	}while(!checkfordoubles(results, n));
	results[i] = n;
}

var hits = countdoubles(user, results);

document.write("Wprowadzone liczby to: ")
for(var i = 0; i < user.length; i++)
	document.write(user[i] + " ");
document.write("<br> Wylosowane liczby to: ")
for(var i = 0; i < results.length; i++)
	document.write(results[i] + " ");
document.write("<br> Trafiono " + hits + " liczb.");

console.log(results);
