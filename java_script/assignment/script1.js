const inputstr=document.getElementById("inputtext")
const Result=document.getElementById("result")


function replace() {
    let str = inputstr.value;

    let answer = "Space replace with (-): " + str.replaceAll(" ", "-");
    Result.textContent = answer;   
}


function firstword() {
    let str = inputstr.value;   
    let len = str.length;
    let firstterm = "";

    for (let i = 0; i < len; i++) {
        if (str.charAt(i) == " ") {
            break;
        }
        firstterm += str.charAt(i);
    }

    Result.textContent = "First word: " + firstterm;
}

function vowels() {
    let str = inputstr.value;   
    const vowels = "aeiouAEIOU";
    let count = 0;
    let len = str.length;

    for (let i = 0; i < len; i++) {
        if (vowels.includes(str.charAt(i))) {
            count++;
        }
    }

    Result.textContent = "String contains " + count + " vowels";
}



function Consonents() {
    let str = inputstr.value;   
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i);
        if (ch.match(/[a-zA-Z]/) && !vowels.includes(ch)) {
            count++;
        }
    }

    Result.textContent = "String contains " + count + " consonants";
}



function palindrom(){
    let str = inputstr.value;   
    let len=str.length-1
    let revstr=""
    for(i=len;i>=0;i--){

        revstr+=str.charAt(i)
    }
    if(str==revstr){
        Result.textContent= "The string is palindrom "
    }
    else{
        Result.textContent= "The string is not palindrom "
    }

}


function Revstr(){
    let str = inputstr.value;   
    let len=str.length-1
    let revstr=""
    for(i=len;i>=0;i--){

        revstr+=str.charAt(i)
    }
   Result.textContent="reverse string :"+revstr



}


function uppercase() {
    let str = inputstr.value;
    let res = str.toUpperCase();
    Result.textContent = "Result is : " + res;
}


function lowercase() {
    let str = inputstr.value;
    let res = str.toLowerCase();
    Result.textContent = "Result is : " + res;
}

// Extract the first word of a sentence.
function title(){
     let str = inputstr.value;
    len = str.length
    firstWord = ''
    for(i=0;i<len;i++){
        if(str.charAt(i) == " "){
            break
        }else{
            firstWord += str.charAt(i)
        }
    }
    Result.textContent="answer"+firstword
}


function spaces() {
    let str = inputstr.value;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === " ") {
            count++;
        }
    }

    Result.textContent = "Count of spaces: " + count;
}
function newlines() {
    let str = inputstr.value;
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === "\n") {
            count++;
        }
    }

    Result.textContent = "Count of new lines: " + count;
}




