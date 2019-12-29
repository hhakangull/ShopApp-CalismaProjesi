const http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var fs = require('fs');

// SERVER.JSON ve COMMANDS.JSON Dosyalarını Birleştirip Dosyaya Yazma
var jsonMerger = require("json-merger");
var result = jsonMerger.mergeFiles(["server.json", "commands.json"]);
console.log(result);
fs.readFile('output.json', 'utf8', function (err, data) {
    if (err) throw err;
    jsonData = JSON.parse(data);
    splitJsonName = jsonData.name.split(' ');
    mergeJsonName = (splitJsonName[0] + '-' + splitJsonName[1]).toLowerCase();
    console.log(mergeJsonName);

    fs.writeFile(mergeJsonName + '.json', JSON.stringify(result, null, 2), 'utf8', function (err) {
      
      if (err) {
         console.log("An error occured while writing JSON Object to File.");
         return console.log(err);
      }
      console.log("JSON file has been saved.");
   });
 });
