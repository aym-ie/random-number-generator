function showError(message) {
    const error = document.getElementById('error');
    const result = document.getElementById('resultant');

    result.textContent = '';
    result.classList.remove('is-visible');
    result.hidden = true;

    error.textContent = message;
    error.classList.add('is-visible');
    error.hidden = false;
}

function showResult(message) {
    const error = document.getElementById('error');
    const result = document.getElementById('resultant');

    error.textContent = '';
    error.classList.remove('is-visible');
    error.hidden = true;

    result.textContent = message;
    result.classList.add('is-visible');
    result.hidden = false;
}

window.addEventListener('load', () => {
    var leftpara = document.getElementById('leftparenthesis');
    var rightpara = document.getElementById('rightparenthesis');
    leftpara.addEventListener('click', () => {
        if (leftpara.innerText === "(") {
            leftpara.innerText = "[";
        } else {
            leftpara.innerText = "(";
        }
    });
    rightpara.addEventListener('click', () => {
        if (rightpara.innerText === ")") {
            rightpara.innerText = "]";
        } else {
            rightpara.innerText = ")";
        }
    });

    var decYes = document.getElementById('ynDec');
    decYes.addEventListener('click', () => {
        if (decYes.innerText === "→.000") {
            decYes.innerText = "←.000";
        } else {
            decYes.innerText = "→.000";
        }
    });

    document.getElementById('submission').addEventListener('click', () => {

        let minbound = parseInt(document.getElementById('minNum').value);
        let maxbound = parseInt(document.getElementById('maxNum').value);

        var minExclude = document.getElementById('leftparenthesis').innerText;
        var maxExclude = document.getElementById('rightparenthesis').innerText;

        var decYes = document.getElementById('ynDec').innerText;

        if (minbound.toString() == 'NaN' || maxbound.toString() == 'NaN') {
            showError('Must have both minimum and maximum!');
        }
        else if (minbound > maxbound) {
            showError('The minimum must be greater than or equal to the maximum!');
        }
        else if (decYes === "←.000") {
            minbound = Math.ceil(minbound);
            maxbound = Math.floor(maxbound);

            showResult(String((Math.random() * (maxbound - minbound) + minbound).toFixed(3)));
        }
        else {
            if (minExclude === "[" && maxExclude === "]") { // inclusive inclusive
                showResult(String(Math.floor(Math.random() * (maxbound - minbound + 1) + minbound)));
            }
            else if (minExclude === "(" && maxExclude === "]") { // exclusive inclusive
                showResult(String(Math.floor(Math.random() * (maxbound - minbound) + (minbound + 1))));
            }
            else if (minExclude === "[" && maxExclude === ")") { // inclusive exclusive
                showResult(String(Math.floor(Math.random() * (maxbound - minbound) + minbound)));
            }
            else /* minExclude === "(" && maxExclude === ")"  */ { // exclusive exclusive
                showResult(String(Math.floor(Math.random() * (maxbound - minbound - 1) + (minbound + 1))));
            }
        }
    });
});
