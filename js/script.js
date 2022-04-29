// Copyright (c) 2022 Madeleine Forgeron All rights reserved
//
// Created by: Madeleine Forgeron
// Created on: April 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates random number.
 */
function tempHotOrCold() {
   	// initialize variables
	let temperature = ""	
	// get user input
	let guess = parseFloat(document.getElementById('guess').value)


  	// if guess is right says correct
	if (guess <= 9){
		temperature = "It's cold Brrr"
	} 
	//if not says incorrect	
	else {
		temperature = "IT'S HOT"
	}

  // display the results
  document.getElementById('temperature').innerHTML = temperature
}
