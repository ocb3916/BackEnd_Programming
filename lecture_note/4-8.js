let output = "";

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8 - i; j++) {
        output += ' ';
    }
    for (let j = 0; j < i * 2 + 1; j++) {
        output += '*';
    }
    output += "\n";
}

console.log(output);