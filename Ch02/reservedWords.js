// testing an object with a reserverd words

var book = {
    title: 'O man',
    year: 2019,
    testin: () => {
        if (book.title === book.year){
            return true;
        } else {
            return false;
        }
    },
    get: "off",
    null: "holy",
    for: "reserved",
    while: "word",
    false: 'can',
    throw: "be",
    return: "used",
    await: "inside",
    targe: "an",
    try: "object"
}

console.log(book);




let café = 1;
let ééé = 'helo';

console.log(\u00E9\u00E9\u00E9);

caf\u00e9;
caf\u{e9};

console.log(café, caf\u00e9, caf\u{e9});

console.log("\u{1F600}");

