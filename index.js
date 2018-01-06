function validateinput(input) // Funkcja do sprawdzania czy użytkownik poprawnie wprowadził liczby
{
    if (input.length != 6) // Sprawdzamy czy wprowadził dokładnie 6 liczb
    {
        alert("Musisz wprowadzić 6 liczb!"); // Jeśli nie, informujemy użytkownika
        return false; // I zwracamy błąd
    }
    for (var i = 0; i < 6; i++) // W pętli sprawdzamy każdą liczbę
    {
        if (input[i] < 1 || input[i] > 49) // Jeśli jakaś liczba wychodzi poza zakres
        {
            alert("Musisz wprowadzić liczby w zakresie od 1 do 49!"); // Informujemy użytkownika
            return false; // Zwracamy błąd
        }
    }
    for (var i = 0; i < 6; i++) // Sprawdzamy czy liczby się powtarzają
    {
        for (var j = 0; j < 6; j++) 
        {
            if (input[i] == input[j] && i != j) // Jeśli liczba się powtarza i nie jest to ta sama liczba
            {
                alert("Liczby nie mogą się powtarzać!"); // Informujemy użytkownika
                return false; // I zwracamy błąd
            }
        }
    }
    return true; // Jeśli wszystko gra zwracamy sukces
}

function checkfordoubles(array, input) // Funkcja do sprawdzenia czy input powtarza się w tablicy array
{
    for (var i = 0; i < array.length; i++) // Tworzymy pętlę o wielkości tablicy
    {
        if (input == array[i]) // Jeśli wartość znajduje się w tablicy
            return false; // Zwracamy błąd
    }
    return true; // Jeśli żadna liczba w tablicy nie jest taka sama jak w tablicy, zwracamy sukces
}

function countdoubles(a, b) // Funkcja porównuje dwie tabele i zwraca ile razy powtórzyły się liczby
{
    var doubles = 0; // Inicjalizujemy wartość do zwrotu
    for (var i = 0; i < a.length; i++) // Tworzymy pętlę dla tabeli a
    {
        for (var j = 0; j < b.length; j++) // Tworzymy pętlę dla tabeli b
        {
            if (a[i] == b[j]) // Jeśli jakaś wartość w tabeli a jest równa wartości w tabeli b
                doubles++; // Zwiększamy liczbę trafień
        }
    }
    return doubles; // Zwracamy ile jest powtórzeń
}


do //Tworzymy nieskończoną pętlę
{
    var user = prompt("Podaj 6 liczb w zakresie 1-49 oddzielonych spacją", "np. \"1 23 44 49 12 7\"").split(" "); // Bierzemy wejście od użytkownika, i tworzymy tablicę za pomocą "split()"
} while (!validateinput(user)); // Pętla się dopiero skończy gdy użytkownik wprowadzi poprawną ilość liczb w określonym zakresie.

var results = new Array; // Inicjalizujemy tablicę na wylosowane liczby
for (var i = 0; i < 6; i++) // Tworzymy pętlę która stworzy tablicę z losowymi nie powtarzającymi się liczbami
{
    do // Tworzymy nieskończoną pętlę
    {
        var n = Math.floor(Math.random() * 49) + 1; // Tworzymy tymczasową zmienną do której zapiszemy wylosowaną liczbę
    } while (!checkfordoubles(results, n)); // Sprawdzamy czy liczba nie powtórzyła się już w tabeli
    results[i] = n; // Zapisujemy wylosowaną liczbę do tabeli
}

var hits = countdoubles(user, results); // Sprawdzamy ile trafień ma użytkownik.

user.sort(function (a, b) {return a - b});  // Sortujemy liczby, używamy specjalnego kodu żeby porównać liczby które są stringami

results.sort(function (a, b) {return a - b});

document.getElementById("user").insertAdjacentHTML("beforeend", user); // Dodajemy na koniec obiektu o ID "user" to co wpisał użytkownik,
document.getElementById("result").insertAdjacentHTML("beforeend", results); // Wynik sortowania
document.getElementById("score").insertAdjacentHTML("beforeend", hits); // I liczbę trafień.
