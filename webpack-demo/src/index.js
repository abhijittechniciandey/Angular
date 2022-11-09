import _ from 'lodash';
import getMessage from './message';
import './styles.css'

function component() {
const element = document.createElement('div');
// Lodash, now imported by this script
element.innerHTML = _.join(['Hello', 'webpack', getMessage()], ' ');
element.classList.add('hello');
return element;
}
document.body.appendChild(component());

