function add(numbers) {
   if (numbers === "") return 0;
     let delimiter = /,|\n/; // default delimiters: comma and newline
     if (numbers.startsWith("//")) {
       const parts = numbers.split("\n");
       delimiter = new RegExp(parts[0].substring(2));
       numbers = parts.slice(1).join("\n");
     }
     return numbers.split(delimiter).reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };