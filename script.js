function stringChop(str, size) {
  // your code here
	const chunkSize = parseInt(size, 10);

    // Validate the chunk size
    if (isNaN(chunkSize) || chunkSize <= 0) {
        return "Invalid chunk size.";
    }

    // Array to store the chunks
    const result = [];

    // Loop through the string and create chunks
    for (let i = 0; i < str.length; i += chunkSize) {
        // Extract a chunk of the specified length
        const chunk = str.substring(i, i + chunkSize);
        result.push(chunk);
    }

    return result.join(", "); 
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
