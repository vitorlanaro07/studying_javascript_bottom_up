async function inputData() {
    process.stdin.setEncoding("utf-8");         // Read Unicode strings, not bytes
    
    for await (const chunk of process.stdin){
        console.log(chunk, " - ");
    }
}

inputData();