/*
window.addEventListener('load', () => {
    document.getElementById('yes').addEventListener('click', () => {
        var decOpt = document.getElementById('hidden');
        var yncheck = document.getElementById('yes');
    
        if (yncheck.checked == true) {
            decOpt.style.display = 'block';
            document.getElementById('numOfDec').setAttribute('required', true);
        } else {
            decOpt.style.display = 'none';
            document.getElementById('numOfDec').setAttribute('required', false);
        }
    });
});
*/

window.addEventListener('load',() => {
    document.getElementById('submission').addEventListener('click', () => {

        let minbound = parseInt(document.getElementById('minNum').value);
        let maxbound = parseInt(document.getElementById('maxNum').value);

        var minExclude = document.getElementById('exclusiveMin').checked;
        var maxExclude = document.getElementById('exclusiveMax').checked;

        var decYes = document.getElementById('yes').checked;

        // var decAmount = parseInt(document.getElementById('numOfDec').value);

        var output = document.getElementById('resultant')

        if (minbound.toString() == 'NaN' || maxbound.toString() == 'NaN') {
            alert("Fill in a minimum and a maximum boundary!");
        }
        else if (minbound > maxbound) {
            alert("Make sure the minimum boundary is less than or equal to the maximum boundary!");
        }
        else if (decYes == true) {
            minbound = Math.ceil(minbound);
            maxbound = Math.floor(maxbound);
            
            output.innerHTML = Math.random() * (maxbound - minbound) + minbound;
            output.style.display = 'block';
        } 
        else {
            if (minExclude != true && maxExclude != true) { // inclusive inclusive
                output.innerHTML = Math.floor(Math.random() * (maxbound - minbound + 1) + minbound);
                output.style.display = 'block';
            }
            else if (minExclude == true && maxExclude != true) { // exclusive inclusive
                output.innerHTML = Math.floor(Math.random() * (maxbound - minbound) + (minbound + 1));
                output.style.display = 'block';
            }
            else if (minExclude != true && maxExclude == true) { // inclusive exclusive
                output.innerHTML = Math.floor(Math.random() * (maxbound - minbound) + minbound);
                output.style.display = 'block';
            }
            else /* (minExclude == true && maxExclude == true)  */ { // exclusive exclusive
                output.innerHTML = Math.floor(Math.random() * (maxbound - minbound - 1) + (minbound + 1));
                output.style.display = 'block';
            }
        }
    });
});
