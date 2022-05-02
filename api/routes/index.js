const express = require('express');
const { User, Word } = require('../controllers');
const { UserMiddleware, WordMiddleware } = require('../middlewares');
const { BASE_URL } = require('../../utils/constants');
const { Router } = express;
const router = Router();

router.post(BASE_URL + '/words/guess',
  WordMiddleware.validateGuess,
  Word.guess
);

router.get(BASE_URL + '/words/most-guessed',
  Word.getMostGuessed
);

router.post(BASE_URL + '/users/matches',
  UserMiddleware.validateCountMatches,
  User.countMatches
);

router.get(BASE_URL + '/users/top-ten',
  User.getTop10
);

router.get('/', (_, res) => res.status(200).send({
  message: 'nothing to see here' 
}));

router.get(BASE_URL, (_, res) => res.status(200).send({
  message: 'You have reached /api/wordle/v1/, congrats!'
}));

router.get('*', (_, res) => res.status(400).send({
  message: 'unknown end-point.',
}));

module.exports = router;
