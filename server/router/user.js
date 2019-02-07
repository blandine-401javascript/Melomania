const express = require('express');
const router = express.Router();
const util = require('../util');
const chalk = require('chalk');


router.post('/create', (req, res) => {
  console.log('create');
});

router.post('/update', (req, res) => {
  console.log('update');
});

router.post('/checkAnswer', (req, res) => {
  util.checkAnswer('something', 'genre', 'index');
  console.log('update');
});

router.get('/leaderboard', (req, res) => {
  console.log('leadernoard');
});

router.get('/newSong', (req, res) => {
  util.pickSongAndAnswerOptions((songAndAnswerOptions) => {
    console.log(chalk.blue("inside route ", songAndAnswerOptions));
    res.json({ data: songAndAnswerOptions });
  });
});


module.exports = router
