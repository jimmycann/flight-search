import '../style/main.css';

import autocomplete from './components/autocomplete';
import airports from './model/airports';

// $('.inner').on('click', () => airports.search('melb'));
$('form').append(autocomplete.build('from', 'Where are you leaving from?', 'Depart'));
$('form').append(autocomplete.build('to', 'What is your destination?', 'Arrive'));
