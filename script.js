async function fetchData() {
  const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '3b0d9b1b99msh92e75bdee9e2749p185ed4jsnc7215d1aada2',
        'X-RapidAPI-Host': 'concerts-artists-events-tracker.p.rapidapi.com'
      }
  };
  
  const res = await fetch('https://concerts-artists-events-tracker.p.rapidapi.com/location?name=Toronto&minDate=2022-10-09&maxDate=2022-10-12&page=1', options)
  const record = await res.json()

  document.getElementById("concerts").innerHTML = record.data.map(item => `<li>${item.name}</li>`).join('');
}
fetchData(); 