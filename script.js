async function disease() {
  try {
    const input = document.querySelector('#input').value;

    const response = await fetch(`https://disease.sh/v3/covid-19/countries/${input}`);
    const data = await response.json();

    console.log(data);

    const values = [
      { id: 'country', value: data.country },
      { id: 'continent', value: data.continent },
      { id: 'latitude', value: data.countryInfo.lat },
      { id: 'longitude', value: data.countryInfo.long },
      { id: 'population', value: data.population },
      { id: 'cases', value: data.cases },
      { id: 'death', value: data.deaths },
      { id: 'tdeath', value: data.todayDeaths },
      { id: 'recovery', value: data.recovered },
      { id: 'test', value: data.tests },
      { id: 'critical', value: data.critical },
      { id: 'trecovery', value: data.recoveredPerOneMillion },
    ];

    values.forEach(({ id, value }) => {
      document.querySelector(`#${id}`).value = value;
    });
  } catch (error) {
    console.error(error);
  }
}

disease();
