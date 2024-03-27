let text =  "a";

console.log(text.length, text[0]);

let love = "\ud83d\udc99";

let euro = "€";
let love2 = "❤";


console.log(euro.length, love2.length);


let text1 = "acasa";
let i = 0;

for (let each of text1){
    i++;
    console.log(each, i);
}

console.log(`"She said 'Hi'", he said.`);

let hisName = "Vitor";

console.log(`His name is ${hisName}.`);

let breakline = "\n testing" +
                "\ that's it" +
                "\ Crazy" 
            

console.log(breakline);



let breakline2 = 
"one\
 two\
 three"
console.log(breakline2);


let breakline3 = `1
2
casa
1
2
`
console.log(breakline3);

let apostropheEscape = 'You\'re right, it\'s possible!'
console.log(apostropheEscape);


//escape sequecence

let verticalTab = "casa \v casa";   //new line with tab
console.log(verticalTab + "\n");

let horizontalTab = "casa \t casa" //tab in the same line
console.log(horizontalTab + "\n");

//hexadecimal
console.log("\x28");


//unicode between 0 and 10FFFF
console.log("\u{1000}")

let hello = "Hello, World";

console.log(hello.charAt(0));
console.log(hello.charCodeAt(0));
console.log(hello.codePointAt(1));
console.log(hello.concat("!"));
console.log(hello.endsWith("Hello"));
console.log(hello.trim());


filename = "dox.txt"
linenumber = 17
exception = {
    message:"Error ir that",
    stack:"Line"
}

let errorMessage = `\
\u2718 Test failure at ${filename}:${linenumber}:
${exception.message}
Stack trace:
${exception.stack}
`;

console.log(errorMessage);

//regex

let textRegex = "testing: 1, 2, 3";
let pattern = /\d+/g;                               //matches all instaces of one or more digits

console.log(pattern.test(textRegex));               //test if is possible
console.log(textRegex.search(pattern));             //position of first match
console.log(textRegex.match(pattern));              //return an array of all matches
console.log(textRegex.replace(pattern, "#"));       //replace all digits for #
console.log(textRegex.split(/\D+/));                //split on nondigits





