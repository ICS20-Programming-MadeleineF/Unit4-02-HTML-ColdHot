// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates random number.
 */
function makeRandomNumber() {
   	// initialize variables
	let temperature = ""
	
	// get user input
	let guess = parseInt(document.getElementById('guess').value)
  let randomNumber = Math.floor(Math.random() * 6) + 1


  	// if guess is right says correct
	if (guess == randomNumber){
		number = "CORRECT!!!   " + randomNumber + '  is the right number'
	} 
	//if not says incorrect	
	else {
		number = "INCORRECT " + '  The correct number is ' + randomNumber + '.'
	}

  // display the results
  document.getElementById('number').innerHTML = number
}














+