function add(numbers) {
   if (!numbers) return 0;

       let delimiter = /,|\n/;

       // Handle custom delimiter
       if (numbers.startsWith("//")) {
           const [delimiterLine, ...rest] = numbers.split("\n");
           const customDelimiter = delimiterLine.slice(2);
           delimiter = new RegExp(customDelimiter);
           numbers = rest.join("\n");
       }

       const numberArray = numbers.split(delimiter).map(Number);

       // Check for negatives
       const negatives = numberArray.filter(num => num < 0);
       if (negatives.length > 0) {
           throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
       }

       return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };