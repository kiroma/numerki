# Numerki
## 1. Opis
Numerki to gra oparta o zasady Totolotka.
## 2. Działanie
1. Pobieramy od użytkownika 6 liczb i zapisujemy je do tabeli.  
2. Komputer losuje 6 pseudolosowych liczb z zakresu 1-49.  
3. Sprawdzamy czy liczby wylosowane przez użytkownika są identyczne z liczbami wylosowanymi przez komputer.  
4. Wyświetlamy ilość trafień użytkownika oraz liczby wylosowane przez komputer w postaci komunikatu lotto.  
## 3. Specyfikacja
Kod bierze od użytkownika 6 liczb, oddzielonych spacjami w jednej linijce. Liczby te są podzielone na pojedyńcze wpisy do tablicy za pomocą komendy `split(" ")`, która dzieli wejście spacjami. Liczby te są sprawdzane po kolei:  
1. Czy jest wprowadzone dokładnie 6 liczb,  
2. Czy liczby są z przedziału 1-49,  
3. Czy liczby się nie powtarzają,  
Jeśli zostanie stwierdzone, że wszystko jest w porządku, tworzymy nową tabelę na wylosowane liczby. Kod generuje liczbę losową z przedziału 1-49, sprawdza czy liczba ta znajduje się już w tabeli i ją dodaje. Po wylosowaniu liczb porównuje się obie tabele, sprawdzając każdy rekord z każdym, jeśli jest trafienie, dodajemy 1 punkt dla użytkownika. Po sprawdzeniu wszystkich rekordów w tabelach, wyświetlamy wynik.  
Wynik jest wyświetlany w kodzie HTML poprzez dodanie elementu DOM. Adresujemy tu znaczniki `<p>` o odpowiednim ID i używamy funkcji `insertAdjacentHTML("beforeend", string)` aby przed końcem znacznika wstawić element `string`.  
Przed wyświetleniem wyniku tabele są dodatkowo sortowane. Ze względu na sposób w jaki liczby zostały pobrane od użytkownika liczby są w formie stringów, potrzebne jest więc użycie specjalnej formy komendy, mianowicie `tablica.sort(function (a, b) {return a - b});`. W takiej formie `sort()` traktuje wejście jako liczby a nie string.
### Praca Domowa
a. Zmodyfikować program tak, żeby sprawdzał czy użytkownik wpisał jakąkolwiek liczbę oraz czy wpisana przez użytkownika liczba jest z zakresu 1-49.  
b. Dokończyć program  
c. CSS  
d. Zmienić popup na html  
e. Sortujemy wynik
