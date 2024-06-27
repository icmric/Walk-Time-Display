<template>
	<div>{{ testString() }}</div>
</template>

<script>
export default {
	props: {
		value: {
			type: String,
			default: "Time 1",
		},
	},
	setup(props) {
		// Main funciton that manages everything
		function testString() {
			var inputString = props.value.replace(/\s/g, ''); // Removes all spaces
			var inputTimeArray = inputString.split(",");

			for (var i = 0; i < inputTimeArray.length; i++) { // Converts inputs into floats
				inputTimeArray[i] = parseFloat(inputTimeArray[i]);
			}

			inputTimeArray.sort((a, b) => a - b);
			var returnTimeString = "";
			for (var i = 0; i < inputTimeArray.length; i++) { // Loops over times and converts them to updated format
				if (i == 2) { // Adds "to" between 2nd and 3rd time
					returnTimeString += " to ";
				}
 				
				returnTimeString += convertTime(inputTimeArray[i]); // Converts time to updated format
				
				if (i == 0) { // Adds ", " between 1st and 2nd time
					returnTimeString += ", ";
				}
			}
			
			// if specific length is required, use below
			// if (inputTimeArray.length != 3) { // shows error if incorrect number of times entered
			// 	returnTimeString = inputTimeArray.length + " times entered, expected 3  ";
			// }

			return returnTimeString;
		}

		return testString;
	}
};

function convertTime(timeToConvert) {
	
	if (isNaN(timeToConvert)) {
		return "Invalid Input";
	}

	var returnString = "";
	var dayFlag = false;
	// Days
	if (timeToConvert >= 48) {
		dayFlag = true;
		returnString = Math.floor(timeToConvert/24) + " days";
		timeToConvert = Math.floor(timeToConvert % 24);
		if (timeToConvert > 0) { // Adds space if days AND hours
			returnString += " ";
		}
	} else if (timeToConvert >= 24) {
		dayFlag = true;
		returnString = Math.floor(timeToConvert/24) + " day";
		timeToConvert = Math.floor(timeToConvert % 24);
		if (timeToConvert > 0) {
			returnString += " ";
		}
	} // to display days and no hours, change below if to else if
	if (timeToConvert > 0 || dayFlag) {
		// Hours
		var hourFlag = false;
		if (timeToConvert >= 1 && timeToConvert < 2) {
			returnString += Math.floor(timeToConvert) + " h";
			hourFlag = true;
		} else if (timeToConvert >= 2) {
			returnString += Math.floor(timeToConvert) + " hrs";
			hourFlag = true;
		}

		// Minutes
		var mins = (timeToConvert - Math.floor(timeToConvert)) * 60;
		if (mins == 1) {
			if (hourFlag) {
				returnString += " ";
			}
			returnString += Math.round(mins) + " min";
		} else if (mins > 1) {
			if (hourFlag) {
				returnString += " ";
			}
			returnString += Math.round(mins) + " mins";
		}
	} else {
		// catch all if negative input 
		returnString = "Negative Input";
	}
	return returnString;
}
</script>
