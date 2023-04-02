import Gato from './classGato.js';
import Cachorro from './classCachorro.js';

const gato = new Gato('Flocos', 'poltrona', 'ração');

gato.comer()
gato.falar()
gato.dormir()

const dog = new Cachorro('Tyrion lanister', 'Caminha', 'frango')

dog.falar()
dog.dormir()
dog.comer()