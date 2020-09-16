// Created by House Gardner
const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer(function(req, res) {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == '/') {
    fs.readFile('index.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    });
  }
  else if (page == '/api') {
    if('choice' in params){
        //params['choice']
        res.writeHead(200, {'Content-Type': 'application/json'});
        let objToJson;  /// value

        const choices = ['Rock','Paper','Scissors','Lizard','Spock']
        const randomIndex = (Math.floor(Math.random()*5)) // random option between
        let botChoice = choices[randomIndex]
        let pScore = 0;
        let cScore = 0;

        console.log(`Bot Choice: ${botChoice}`);
        console.log(params['choice']) // users choice from api call
        console.log(botChoice) // random logged bot choice

        if (botChoice ==='Paper' && (params['choice'] === 'Rock' || params['choice'] === 'Spock' )){
          cScore++
          objToJson={
             winner : 'bot',
             userChoice : `${params['choice']}`,
             botChoice : `${botChoice}`,
             pScore : `${pScore}`,
             cScore : `${cScore}`
           }
        }
        else if (botChoice ==='Rock' && (params['choice'] === 'Lizard' || params['choice'] === 'Scissors' )){
          cScore++
          objToJson={
             winner : 'bot',
             userChoice : `${params['choice']}`,
             botChoice : `${botChoice}`,
             pScore : `${pScore}`,
             cScore : `${cScore}`
           }
        }
        else if (botChoice ==='Scissors' && (params['choice'] === 'Lizard' || params['choice'] === 'Paper' )){
          cScore++
          objToJson={
             winner : 'bot',
             userChoice : `${params['choice']}`,
             botChoice : `${botChoice}`,
             pScore : `${pScore}`,
             cScore : `${cScore}`
           }
        }
        else if (botChoice ==='Spock' && (params['choice'] === 'Rock' || params['choice'] === 'Scissors' )){
          cScore++
          objToJson={
             winner : 'bot',
             userChoice : `${params['choice']}`,
             botChoice : `${botChoice}`,
             pScore : `${pScore}`,
             cScore : `${cScore}`
           }
        }
        else if (botChoice ==='Lizard' && (params['choice'] === 'Paper' || params['choice'] === 'Spock' )){
          cScore++
          objToJson={
             winner : 'bot',
             userChoice : `${params['choice']}`,
             botChoice : `${botChoice}`,
             pScore : `${pScore}`,
             cScore : `${cScore}`
           }
        }
//////////////////////////////////////// tie ////////////////////////////////////////////////
        else if (botChoice === params['choice']) {
          objToJson={
             winner : 'tie',
             userChoice :`${params['choice']}` ,
             botChoice : `${botChoice}`,
             pScore : `${pScore}`,
             cScore : `${cScore}`
           }
        }
//////////////////////////////////////// user wins ////////////////////////////////////////////////
        else{
          pScore++
          objToJson={
             winner : 'user',
             userChoice : `${params['choice']}`,
             botChoice : `${botChoice}`,
             pScore : `${pScore}`,
             cScore : `${cScore}`
           }
        }
        res.end(JSON.stringify(objToJson));
      }
      else{ // not a valid response
        const objToJson = {
          winner: "unknown",
          userChoice: "unknown",
          botChoice: "unknown"
        }
        res.end(JSON.stringify(objToJson));
      }
    }
  else if (page == '/css/style.css'){
    fs.readFile('css/style.css', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(data);
      res.end();
    });
  }else if (page == '/js/main.js'){
    fs.readFile('js/main.js', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/javascript'});
      res.write(data);
      res.end();
    });
  }else{
    figlet('404!!', function(err, data) {
      if (err) {
          console.log('Something went wrong...');
          console.dir(err);
          return;
      }
      res.write(data);
      res.end();
    });
  }
});

server.listen(8000);
