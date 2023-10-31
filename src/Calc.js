function parImpar(a) {
    if (a % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}

function celsiusParaFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
}

function isNull(a) {
    if (a == null) {
        return true;
    } else {
        return false;
    }
}


function isQuadrado(A, B, C, D) {
    if (A === B && B === C && C === D) {
        return true;
    } else {
        return false;
    }
}


module.exports = {
    parImpar,
    celsiusParaFahrenheit,
    isNull,
    isQuadrado
};