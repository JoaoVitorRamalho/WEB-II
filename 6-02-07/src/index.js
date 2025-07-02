import {createRoot} from 'react-dom/client';
import App from './app';

const rootEl = document.getElementById('root');
const rootApp = createRoot(rootEl);

rootApp.render(<App/>);