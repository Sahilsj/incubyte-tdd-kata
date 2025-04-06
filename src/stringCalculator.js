function add(numbers) {
    if (numbers === "") return 0;
      const delimitersNormalized = numbers.replace(/\n/g, ",");
    return delimitersNormalized.split(",").reduce((sum, num) => sum + Number(num), 0);
}

module.exports = { add };