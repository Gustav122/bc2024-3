const { program } = require("commander");
const fs = require("fs");

program
  .option("-i, --input <path>", "path to data.json")
  .option("-o, --output <path>", "path to output file")
  .option("-d, --display", "display results in console");

program.parse(process.argv);

