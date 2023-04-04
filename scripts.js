palindromo("aba");
palindromo("radar");
palindromo("xyzzyx");
palindromo("bola");
palindromo("abcddcb");
palindromo("");
palindromo("x");

function palindromo(s) {
    for (var i = 0, j = s.length - 1; i < j; i++, j--) {
        if (s.charAt(i) != s.charAt(j)) {
            console.log(s + " não é palíndromo")
            return;
        }
    }
    console.log(s + " é palíndromo");
}