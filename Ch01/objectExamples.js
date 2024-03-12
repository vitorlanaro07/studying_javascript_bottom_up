let book1 = {
    name : "Game of Thrones",
    edition : 7
}

let book2 = {
    name : "History",
    edition : 3
}

let book3 = {
    name : "English",
    edition : 6
}

let shelf = [book1, book2, book3];


console.log(book1.name);
console.log(book1['name'], `\n\n`);

console.log("for each");
shelf.forEach(book => {
    if(book != undefined){
        console.log(book.name);
    }
});

console.log(shelf[0]['name']);


book1.year = 2010;
book2.content = {};



console.log("for");
for (let i = 0; i < shelf.length; i++){
    console.log(shelf[i]);
}

console.log(book1?.year, book2?.year);