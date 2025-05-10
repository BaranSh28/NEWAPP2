<script>
	let patientData = [
		{ name: 'Patient A', heartRate: 72, oxygen: '98%' },
		{ name: 'Patient B', heartRate: 89, oxygen: '94%' },
		{ name: 'Patient C', heartRate: 102, oxygen: '90%' }
	];
</script>

<h1>Monitoring Dashboard</h1>

<table>
	<thead>
		<tr>
			<th>Patient</th>
			<th>Heart Rate (BPM)</th>
			<th>Oxygen Saturation</th>
		</tr>
	</thead>
	<tbody>
		{#each patientData as patient}
			<tr>
				<td>{patient.name}</td>
				<td>{patient.heartRate}</td>
				<td>{patient.oxygen}</td>
			</tr>
		{/each}
	</tbody>
</table>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
		margin-top: 1rem;
	}
	th, td {
		padding: 0.5rem 1rem;
		border: 1px solid #ccc;
		text-align: left;
	}
</style>
