import { connect } from 'react-redux';

import Home from './Home';

const mSTP = (state) => ({
  entities: state.entities.entities,
});

export default connect(mSTP, null)(Home);
