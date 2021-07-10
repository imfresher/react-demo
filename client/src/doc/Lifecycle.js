import React from 'react';

class Lifecycle extends React.Component {
  constructor(props) {
    console.log('[Lifecycle:constructor] before super');

    super(props);

    console.log('[Lifecycle:constructor] after super');

    this.state = {
      msg: 'Hello'
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[Lifecycle:getDerivedStateFromProps] run in here');
    console.log('[Lifecycle:getDerivedStateFromProps] props: ' + JSON.stringify(props));
    console.log('[Lifecycle:getDerivedStateFromProps] state: ' + JSON.stringify(state));
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Lifecycle:shouldComponentUpdate] run in here');
    console.log('[Lifecycle:shouldComponentUpdate] nextProps: ' + JSON.stringify(nextProps));
    console.log('[Lifecycle:shouldComponentUpdate] nextState: ' + JSON.stringify(nextState));
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Lifecycle:getSnapshotBeforeUpdate] run in here');
    console.log('[Lifecycle:getSnapshotBeforeUpdate] prevProps: ' + JSON.stringify(prevProps));
    console.log('[Lifecycle:getSnapshotBeforeUpdate] prevState: ' + JSON.stringify(prevState));
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Lifecycle:componentDidUpdate] run in here');
    console.log('[Lifecycle:componentDidUpdate] prevProps: ' + JSON.stringify(prevProps));
    console.log('[Lifecycle:componentDidUpdate] prevState: ' + JSON.stringify(prevState));
    console.log('[Lifecycle:componentDidUpdate] snapshot: ' + JSON.stringify(snapshot));
  }

  render() {
    console.log('[Lifecycle:render]');

    return (
      <div className="doc-lifecycle">
        Test
      </div>
    );
  }
}

export default Lifecycle;
