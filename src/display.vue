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
		function testString() {
			var inputString = props.value.replace(/\s/g, '');
			var inputTimeArray = inputString.split(",");
			for (var i = 0; i < inputTimeArray.length; i++) {
				inputTimeArray[i] = parseFloat(inputTimeArray[i]);
			}
			inputTimeArray.sort((a, b) => a - b);
			var returnTimeString = "";
			for (var i = 0; i < inputTimeArray.length; i++) {
				if (i == 2) {
					//returnTimeString.slice(0, -2);
					returnTimeString += " to "
				}
 				returnTimeString += convertTime(inputTimeArray[i]) + ", ";
			}
			if (inputTimeArray.length != 3) {
				returnTimeString = inputTimeArray.length + " times entered, expected 3  ";
			}
			return returnTimeString.slice(0, -2);
		}

		return testString;
	}
};

function convertTime(timeToConvert) {
	var returnString = "";
	if (timeToConvert >= 48) {
		returnString = timeToConvert/24 + " days";
	} else if (timeToConvert >= 24) {
		returnString = timeToConvert/24 + " day";
	} else if (timeToConvert > 0) {
		var hourFlag = false;
		if (timeToConvert >= 1 && timeToConvert < 2) {
			returnString = Math.floor(timeToConvert) + " h";
			hourFlag = true;
		} else if (timeToConvert >= 2) {
			returnString = Math.floor(timeToConvert) + " hrs";
			hourFlag = true;
		}

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
		returnString = "EMPTY"
	}
	return returnString;
}
</script>
