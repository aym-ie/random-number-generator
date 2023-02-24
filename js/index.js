window.addEventListener('load',() => {
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
});

window.addEventListener('load',() => {
    var decYes = document.getElementById('ynDec');
    decYes.addEventListener('click', () => {
        if (decYes.innerText === "→.00") {
            decYes.innerText = "←.00";
        } else {
            decYes.innerText = "→.00";
        }
    });
});

window.addEventListener('load',() => {
    document.getElementById('submission').addEventListener('click', () => {

        let minbound = parseInt(document.getElementById('minNum').value);
        let maxbound = parseInt(document.getElementById('maxNum').value);

        var minExclude = document.getElementById('leftparenthesis').innerText;
        var maxExclude = document.getElementById('rightparenthesis').innerText;

        var decYes = document.getElementById('ynDec').innerText;

        var output = document.getElementById('resultant')

        if (minbound.toString() == 'NaN' || maxbound.toString() == 'NaN') {
            alert("Fill in a minimum and a maximum boundary!");
        }
        else if (minbound > maxbound) {
            alert("Make sure the minimum boundary is less than or equal to the maximum boundary!");
        }
        else if (decYes === "←.00") {
            minbound = Math.ceil(minbound);
            maxbound = Math.floor(maxbound);
            
            output.innerText = Math.random() * (maxbound - minbound) + minbound;
            output.style.display = 'flex';
        } 
        else {
            if (minExclude === "[" && maxExclude === "]") { // inclusive inclusive
                output.innerText = Math.floor(Math.random() * (maxbound - minbound + 1) + minbound);
                output.style.display = 'flex';
            }
            else if (minExclude === "(" && maxExclude === "]") { // exclusive inclusive
                output.innerText = Math.floor(Math.random() * (maxbound - minbound) + (minbound + 1));
                output.style.display = 'flex';
            }
            else if (minExclude === "[" && maxExclude === ")") { // inclusive exclusive
                output.innerText = Math.floor(Math.random() * (maxbound - minbound) + minbound);
                output.style.display = 'flex';
            }
            else /* minExclude === "(" && maxExclude === ")"  */ { // exclusive exclusive
                output.innerText = Math.floor(Math.random() * (maxbound - minbound - 1) + (minbound + 1));
                output.style.display = 'flex';
            }
        }
    });
});
