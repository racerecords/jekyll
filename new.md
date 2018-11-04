---
layout: page
title: New
permalink: /new/
---

<form accept-charset="UTF-8" action="https://6drpw7vjfh.execute-api.us-east-1.amazonaws.com/Prod/record" method="POST"> 
	<div>
		<div class='border'>
			<ul>
				<label>Name:</label>
				<input name='name'>
			</ul>
		</div>
		<div class='border'>
			<h2>Weather</h2>
			<ul>
				<label>Weather:</label>
				<input name="weather">

				<label>Temperature:</label>
				<input name='temperature' type='number'>

				<label>Humidity:</label>
				<input name='humidity' type='number'>

				<label>Barometer:</label>
				<input name='barometer'>

				<label>Wind Speed:</label>
				<input name='windSpeed' type='number'>

				<label>Wind Direction:</label>
				<input name='windDirection'>
			</ul>
		</div>
		<div class='border'>
			<ul class='formFooter'>
				<label>Group#</label>
				<input name='group' type='number'>

				<label>Track:</label>
				<input name='track' type='text'>

				<label>Region:</label>
				<input name='region' type='text'>

				<label>Date:</label>
				<input name='date' type='date'>

				<label>Session:</label>
				<input name='session' type='text'>

				<label>Session Start:</label>
				<input name='start' type='datetime-local'> 

				<label>Session End:</label>
				<input name='end' type='datetime-local'> 

				<label>Classes:</label>
				<input name='classes'>

				<label>Ambient Befor:</label>
				<input name='ambientBefore' type='number'>

				<label>Reader:</label>
				<input name='reader'>

				<label>Recorder:</label>
				<input name='recorder'>

				<label>Site Certification Date:</label>
				<input name='siteCertificationDate' type='date'>

				<label>Meter Factory Calibration Date:</label>
				<input name='factoryCalibrationDate' type='date'>

				<label>Field Calibration Time:</label>
				<input name='fieldCalibrationTime' type='datetime-local'>

				<label>Battery Level:</label>
				<input name='batteryLevel' type='number'>

				<label>Microphone Location:</label>
				<input name='microphoneLocation'>
			</ul>
		</div>
	</div>
	<input type="submit">
</form>
