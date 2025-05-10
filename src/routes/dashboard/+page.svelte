<script>
  // Example data for demonstration
  let patient = {
    name: 'Jane Doe',
    age: 68,
    condition: 'Stable',
    lastCheckIn: '2025-05-07'
  };
</script>

<h1>Dashboard</h1>
<p>Patient: {patient.name}</p>
<p>Age: {patient.age}</p>
<p>Condition: {patient.condition}</p>
<p>Last Check-In: {patient.lastCheckIn}</p>
<a href="/monitoring">
	<button style="margin-top: 2rem; padding: 0.5rem 1rem; background-color: #2563eb; color: white; border: none; border-radius: 5px;">
		Gå til Monitorering
	</button>
</a>
