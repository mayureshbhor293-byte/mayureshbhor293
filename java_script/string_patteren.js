function printsquare(n)
{
    for(i=1;i<=n;i++)
    {
        line=" "
        for(j=1;j<=n;j++)
        {
            line += " *"
        }
        console.log(line)
    }



}
printsquare(5)
console.log("===================================================================================")

function patteren2(n)
{
    for(i=1;i<=n;i++)
    {
        line=" "
        for(j=1;j<=i;j++){
            line += " *"
        }
        console.log(line)
    }
}
patteren2(5)
console.log("===================================================================================")


function patteren3(n)
{
    for(i=1;i<=n;i++)
    {
        line=" "
        for(j=i;j<=n;j++){
            line += " *"
        }
        console.log(line)
    }
}
patteren3(5)
console.log("===================================================================================")

function patteren4(n) {
    for (let i = 1; i <= n; i++) {
        let line = "";

        // spaces
        for (let j = i; j <= n; j++) {
            line += " ";
        }

        // stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            line += "*";
        }

        console.log(line);
    }
     for (let i = n-1; i >= 1; i--) {
        let line = "";

        // spaces
        for (let j = i; j <= n; j++) {
            line += " ";
        }1

        // stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            line += "*";
        }

        console.log(line);
    }
}

patteren4(5);
console.log("===================================================================================")

function patteren6(n)
 {
    for (let i = 1; i <= n; i++) 
    {
        let line = "";

        // spaces
        for (let j = i; j <= n; j++) {
            line += " ";
        }

        // stars
        for (let k = 1; k <= (2 * i - 1); k++) {
            line += i;
        }

        console.log(line);
    }
}
patteren6(5)
console.log("===================================================================================")


// function patteren7()
// {




// }
// patteren7(5)

function patteren8(n) {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < n; j++) {
            if (i === 0 || i === n - 1 || j === 0 || j === n - 1) {
                line += "* ";
            } else {
                line += "  ";
            }
        }
        console.log(line);
    }
}

patteren8(5);
console.log("===================================================================================")

function patteren9(n) {
    for (let i = n - 1; i >= 1; i--) {
        let line = "";
        for (let j = i; j <= n; j++) {
            line += " ";
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            line += "*";
        }
        console.log(line);
    }

    for (let i = 2; i <= n; i++) {
        let line = "";
        for (let j = i; j <= n; j++) {
            line += " ";
        }
        for (let k = 1; k <= (2 * i - 1); k++) {
            line += "*";
        }
        console.log(line);
    }
}

patteren9(5);
console.log("===================================================================================")

// function patteren10(n) {
//     for (let i = 1; i <= n; i++) {
//         let line = "";
//         for (let j = 1; j <= n; j++) {
//             if ((i + j) % 2 === 0) {
//                 line += "* ";
//             } else {
//                 line += "  ";
//             }
//         }
//         console.log(line);
//     }
// }

// patteren10(5);

