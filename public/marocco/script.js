const esponente = document.getElementById('esponente');
const result = document.getElementById('result');
const content = document.getElementById('content');
const submit = document.getElementById('submit');

function binomialTheorem(a, b, n) {
    if (n < 0) {
        return "Il numero deve essere >= 0";
    } else if (n === 0) {
        return 1;
    }

    let formula = '';
    for (let i = 0; i <= n; i++) {
        let coefficient = binomialCoefficient(n, i);
        let aPower = n - i;
        let bPower = i;
        formula += coefficient !== 1 ? `${coefficient}·` : '';
        formula += aPower > 0 ? (aPower > 1 ? `${a}<sup>${aPower}</sup>` : `${a}`) : '';
        formula += bPower > 0 ? (aPower > 0 ? `·${b}` + (bPower > 1 ? `<sup>${bPower}</sup>` : '') : `${b}`) : '';
        if (i < n) {
            formula += ' + ';
        }
    }
    return formula;
}

function binomialCoefficient(n, k) {
    let result = 1;
    for (let i = 0; i < k; i++) {
        result *= (n - i) / (i + 1);
    }
    return result;
}

function drawPascalTriangle(n) {
    let triangle = [];
    for (let i = 0; i <= n; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            row.push(binomialCoefficient(i, j));
        }
        triangle.push(row);
    }
    return triangle;
}

function displayPascalTriangle(n) {
    if (n < 0) {
        return "<p>Il numero deve essere >= 0</p>";
    }
    let triangle = drawPascalTriangle(n);
    let table = '<div class="table-responsive"><table class="table table-borderless table-dark text-center">';
    for (let i = 0; i < triangle.length; i++) {
        let row = '<tr>';
        // Aggiungi i numeri del triangolo
        for (let j = 0; j < triangle[i].length; j++) {
            row += `<td>${triangle[i][j]}</td>`;
        }
        row += '</tr>';
        table += row;
    }
    table += '</table></div>';
    return table;
}

submit.onclick = () => {
    let n = parseInt(esponente.value);
    result.innerHTML = binomialTheorem('a', 'b', n);
    content.innerHTML = displayPascalTriangle(n);
}st