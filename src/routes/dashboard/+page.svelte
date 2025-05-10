<script>
  import { goto } from '$app/navigation';

  // Simulated patient status data (replace with API later if needed)
  const patients = [
    { name: 'Anna Hansen', status: 'God', lastCheckIn: 'I dag kl. 08:45' },
    { name: 'Peter Madsen', status: 'Neutral', lastCheckIn: 'I går kl. 19:10' },
    { name: 'Lise Sørensen', status: 'Dårlig', lastCheckIn: 'I dag kl. 06:30' }
  ];

  const goToMonitoring = () => {
    goto('/monitoring');
  };
</script>

<h1>Pårørende Dashboard</h1>

<p>Her får du et hurtigt overblik over de seneste registreringer.</p>

<ul>
  {#each patients as patient}
    <li>
      <strong>{patient.name}</strong>: {patient.status}  
      <em>({patient.lastCheckIn})</em>
    </li>
  {/each}
</ul>

<button on:click={goToMonitoring}>Se detaljeret overvågning</button>

<style>
  h1 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }
  ul {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
  }
  li {
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  button {
    background-color: #0070f3;
    color: white;
    border: none;
    padding: 0.6rem 1.2rem;
    border-radius: 6px;
    cursor: pointer;
  }
</style>
