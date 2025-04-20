#!usr/bin/env

const {Command} = require('commander');
const fs = require('fs');

const program = new Command();

program
    .command('wordcount')
    .description('Outputs the number of words in a given file')
    .argument('<filepath>' , 'Path to text file')
    .action((filepath) => {
        try{
            const data = fs.readFileSync(filepath, 'utf-8');
            const words = data.trim().split(/\s+/);
            console.log(`Word count of given file: ${words.length}`);
        } catch(error){
            console.log(`Unable to read the file ${filepath}`);
        }
    });

program.parse();