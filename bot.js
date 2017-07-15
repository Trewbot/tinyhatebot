/**
 *	@name tinyhatebot
 *	@author trewbot <trewbot@phene.co>
 *	2017.07.15
 *
 *	@see https://github.com/v21/tracerybot
 */

const tracery    = require('tracery-grammar'),
      grammar    = tracery.createGrammar(require('./grammar.json'));
grammar.addModifiers(tracery.baseEngModifiers);

//	This implementation currently DOES NOT tweet the responses.
var tweet = grammar.flatten("#origin#");
console.log(tweet);
