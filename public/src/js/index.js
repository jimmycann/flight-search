import '../style/main.css';

import search from './components/search';
import flights from './model/flights';

search.build();

$('#search-flights').click(() => flights.search());
