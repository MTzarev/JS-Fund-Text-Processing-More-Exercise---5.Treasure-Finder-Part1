function treasureFinder(array) {
    let keyNums = array.shift().split(" ").map(Number);
    let newArr = array.join("/").split("/");
    let firstCommand = newArr[0];
    let keyIndex = 0;
    let secondArr = []
    
    for (let j = 0; j < firstCommand.length; j++) {
        let letter = firstCommand.charCodeAt(j);
        let decreaser = keyNums[keyIndex];
        let newLetter = letter - decreaser;
        keyIndex++;
        if (keyIndex === keyNums.length) {
            keyIndex = 0;
        }
        secondArr.push((String.fromCharCode(newLetter)))
    }
    let type1 = secondArr.indexOf(`&`)
    let type2 = secondArr.lastIndexOf(`&`) 
    let type = secondArr.join(``).substring(type1+1, type2)
    let coordinate1 = secondArr.indexOf(`<`)
    let coordinate2 = secondArr.indexOf(`>`)
    let coordinates = secondArr.join(``).substring(coordinate1+1, coordinate2)
    
    console.log(`Found ${type} at ${coordinates}`);
}

// treasureFinder(["1 2 1 3",
//     "ikegfp'jpne)bv=41P83X@",
//     "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find"]);
treasureFinder(["1 4 2 5 3 2 1",
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@","find"]);