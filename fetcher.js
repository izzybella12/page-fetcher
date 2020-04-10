const request = require('request');
const fs = require('fs');

// Takes a URL as a command-line argument 
// Also takes a local file path and download the resource to the specified path
// It should print out a message like: "Downloaded and saved 1235 bytes to ./index.html"

let infoToFetchUnrefined = process.argv
let infoToFetch= process.argv.splice(2);
let uRL = infoToFetch[0];
let localPathFile = infoToFetch[1];

if (localPathFile[0] !== "." || localPathFile[1] !== "/") {
  console.log("EIIHHNNNN WRON! Return a proper path file pleeease.")
}

request(uRL, (error, response, body) => {
  
  if (error) {
    console.log("Sorry, something's wrong. Please verify that it's a working address.");
  } 
  if (response.statusCode !== 200) {
    console.log("Something is seriously wrong with you URL...");
  } else {
    fs.writeFile(localPathFile, body, function (err) {
      if (err) {
        console.log("Sorry, the info you provided is WRONG. Come again?");
      } else {
        console.log(`Downloaded and saved ${body.length} bytes to ${localPathFile}`);
      }
    });
  }
});








