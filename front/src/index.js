/*eslint-disable react/react-in-jsx-scope*/
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';
import app from './routes';

ReactDOM.render(
  app,
  document.getElementById('root')
);
registerServiceWorker();
