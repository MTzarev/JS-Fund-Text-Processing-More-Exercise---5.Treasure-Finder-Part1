function treasureFinder(array) {
    let keyNums = array.shift().split(" ").map(Number);
    let commands = [];

    // Gather the commands until "find" command is encountered
    let currentIndex = 0;
    while (array[currentIndex] !== "find") {
        let string = array[currentIndex];
        commands.push(string);
        currentIndex++;
    }

    // Process each command separately
    for (let command of commands) {
        let decryptedCommand = "";
        let keyIndex = 0;
        for (let j = 0; j < command.length; j++) {
            let letter = command.charCodeAt(j);
            let decreaser = keyNums[keyIndex];
            let newLetter = letter - decreaser;
            // Wrap around if below the range of printable characters
            while (newLetter < 32) {
                newLetter += 95;
            }
            decryptedCommand += String.fromCharCode(newLetter);
            keyIndex = (keyIndex + 1) % keyNums.length; // Move to the next key index
        }

        // Decrypt the message
        let secondArr = decryptedCommand.split('');
        let type1 = secondArr.indexOf('&');
        let type2 = secondArr.lastIndexOf('&');
        let type = secondArr.slice(type1 + 1, type2).join('');

        let coordinate1 = secondArr.indexOf('<');
        let coordinate2 = secondArr.indexOf('>');
        let coordinates = secondArr.slice(coordinate1 + 1, coordinate2).join('');

        console.log(`Found ${type} at ${coordinates}`);
    }
}

treasureFinder(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA", "find"]);
