function add(numbers) {
   if (numbers === "") return 0;
     let delimiter = /,|\n/;
     if (numbers.startsWith("//")) {
       const parts = numbers.split("\n");
       delimiter = new RegExp(parts[0].substring(2));
       numbers = parts.slice(1).join("\n");
     }
     const numberArray = numbers.split(delimiter).map(Number);
     const negatives = numberArray.filter(n => n < 0);
     if (negatives.length) {
       throw new Error("negative numbers not allowed " + negatives.join(","));
       }
      return numberArray.reduce((sum, num) => sum + num, 0);
}

module.exports = { add };