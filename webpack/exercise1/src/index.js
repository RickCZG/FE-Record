import _ from 'lodash';
// import './style.css';
// import Icon from './icon.jpeg'
// import Data from './data.xml';
import Library from './library';

if(module.hot) {
	module.hot.accept('./library', function () {
		console.log('Accepting the updated library module!');
		Library.log();
	})
}

function component() {
  var element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  // element.classList.add('hello');

  // var myIcon = new Image();
  // myIcon.src = Icon;
  // element.appendChild(myIcon);

  // console.log(Data);
  element.innerHTML = _.join(['Fuck', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());