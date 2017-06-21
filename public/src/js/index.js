import '../style/main.css';

import autocomplete from './components/autocomplete';
import airports from './model/airports';
import airlines from './model/airlines';
import flights from './model/flights';

// $('.inner').on('click', () => airports.search('melb'));
$('form').append(autocomplete.build('from', 'Where are you leaving from?', 'Depart'));
$('form').append(autocomplete.build('to', 'What is your destination?', 'Arrive'));
$('form').append(autocomplete.build('date', 'When are you leaving? (DD-MM-YYYY)', 'Date'));

$('#search-flights').click(() => flights.search());
