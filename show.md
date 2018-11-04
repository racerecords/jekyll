---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: page
permalink: /show/
---

<body>
	<div class='group#'>
		<label>Group#</label>
		<div id='groupNumber'></div>
	</div>
	<div>
		<h1>Official Sound Report</h1>
		<ul>
			
			<label>Track:</label>
			<li class='flex' id='track'></li>

			<label>Region:</label>
			<li class='flex' id='region'></li>
			
			<label>Date:</label>
			<li class='flex' id='date'></li>

			<label>Session:</label>
			<li class='flex' id='session'></li>

			<label>Session Start:</label>
			<li class='flex' id='start'> </li>

			<label>Session End:</label>
			<li class='flex' id='end'> </li>

			<label>Classes:</label>
			<li class='flex' id='classes'></li>

			<label>Weather:</label>
			<li class='flex' id='weather'></li>

			<label>Temperature:</label>
			<li class='flex' id='temperature'></li>

			<label>Humidity:</label>
			<li class='flex' id='humidity'></li>

			<label>Barometer:</label>
			<li class='flex' id='barometer'></li>

			<label>Wind Speed:</label>
			<li class='flex' id='windSpeed'></li>

			<label>Wind Direction:</label>
			<li class='flex' id='windDirection'></li>

			<label>Ambient Befor:</label>
			<li class='flex' id='ambientBefore'></li>
		</ul>
	</div>

	<table>

		<thead>
			<tr>
				<th>No.</th>
				<th>Class</th>
				<th>READING</th>
			</tr>
		</thead>

		<tbody id='readingsTable'>
		</tbody>

	</table>

	<ul class='formFooter'>
		<label>Reader:</label>
		<li class='flex' id='reader'></li>

		<label>Recorder:</label>
		<li class='flex' id='recorder'></li>

		<label>Site Certification Date:</label>
		<li class='flex' id='siteCertificationDate'></li>

		<label>Meter Factory Calibration Date:</label>
		<li class='flex' id='factoryCalibrationDate'></li>

		<label>Field Calibration Time:</label>
		<li class='flex' id='fieldCalibrationTime'></li>

		<label>Battery Level:</label>
		<li class='flex' id='batteryLevel'></li>

		<label>Microphone Location:</label>
		<li class='flex' id='microphoneLocation'></li>
	</ul>

</body>
