import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';

Reactotron
  .configure({name: 'redux Reactotron demo'}) // we can use plugins here -- more on this later
  .use(reactotronRedux())
  .connect() // let's connect!
