import React from 'react';
import { FormattedMessage } from 'react-intl';
import './Lifecycle.css';
import LanguageSwitcher from 'views/common/LanguageSwitcher';
class Lifecycle extends React.Component {
  constructor(props) {
    // console.log('[Lifecycle:constructor] before super');

    super(props);

    // console.log('[Lifecycle:constructor] after super');

    this.state = {
      msg: 'Hello'
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('[Lifecycle:getDerivedStateFromProps] run in here');
  //   console.log('[Lifecycle:getDerivedStateFromProps] props: ' + JSON.stringify(props));
  //   console.log('[Lifecycle:getDerivedStateFromProps] state: ' + JSON.stringify(state));
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[Lifecycle:shouldComponentUpdate] run in here');
  //   console.log('[Lifecycle:shouldComponentUpdate] nextProps: ' + JSON.stringify(nextProps));
  //   console.log('[Lifecycle:shouldComponentUpdate] nextState: ' + JSON.stringify(nextState));
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('[Lifecycle:getSnapshotBeforeUpdate] run in here');
  //   console.log('[Lifecycle:getSnapshotBeforeUpdate] prevProps: ' + JSON.stringify(prevProps));
  //   console.log('[Lifecycle:getSnapshotBeforeUpdate] prevState: ' + JSON.stringify(prevState));
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('[Lifecycle:componentDidUpdate] run in here');
  //   console.log('[Lifecycle:componentDidUpdate] prevProps: ' + JSON.stringify(prevProps));
  //   console.log('[Lifecycle:componentDidUpdate] prevState: ' + JSON.stringify(prevState));
  //   console.log('[Lifecycle:componentDidUpdate] snapshot: ' + JSON.stringify(snapshot));
  // }

  render() {
    console.log('[Lifecycle:render]');

    return (
      <div className="doc-lifecycle" style={{textAlign: 'center'}}>
        <header>
          <h3>
            <FormattedMessage id="doc.Lifecycle.msg" />
          </h3>
          <fieldset>
            <div style={{display: 'inline-block', margin: '5px'}}>
              <label htmlFor="reactVersion" style={{marginRight: '4px'}}>
                <FormattedMessage id="doc.Lifecycle.react_version" />
              </label>
              <select id="reactVersion">
                <option value="16.2">≤16.2</option>
                <option value="16.3">16.3</option>
                <option value="16.4">≥16.4</option>
              </select>
            </div>
            <div style={{display: 'inline-block', margin: '5px'}}>
              <label htmlFor="language" style={{marginRight: '4px'}}>
              <FormattedMessage id="doc.Lifecycle.language" />
              </label>
              <LanguageSwitcher />
            </div>
          </fieldset>
        </header>
        <main className="py-5">
          <p style={{maxWidth: "400px", margin: "0 auto"}}>
            <FormattedMessage id="doc.Lifecycle.text" />
          </p>

          <div className="Main__area">
            <div className="Pannel Pannel__mounting">
              <h3 className="Pannel__title">Mounting</h3>
            </div>
            <ul className="Methods">
              <li className="Method Method--hasLink Method--main render" style={{gridArea: "3 / 2 / span 2 / span 1"}}>
                <a href="//reactjs.org/docs/react-component.html#constructor" target="_blank" rel="noopener noreferrer" title="Read docs for constructor (opens in a new tab)" dir="ltr">constructor</a>
              </li>
              <li className="Method Method--hasLink Method--endsInMiddle render" style={{gridArea: "9 / 3 / span 2 / span 2"}}>
                <a href="//reactjs.org/docs/react-component.html#shouldcomponentupdate" target="_blank" rel="noopener noreferrer" title="Read docs for shouldComponentUpdate (opens in a new tab)" dir="ltr">should­Component­Update</a>
              </li>
              <li className="Method Method--hasLink render" style={{gridArea: "6 / 2 / span 2 / span 4"}}>
                <a href="//reactjs.org/docs/react-component.html#static-getderivedstatefromprops" target="_blank" rel="noopener noreferrer" title="Read docs for getDerivedStateFromProps (opens in a new tab)" dir="ltr">get­Derived­State­From­Props</a>
              </li>
              <li className="Method Method--hasLink Method--main render" style={{gridArea: "12 / 2 / span 2 / span 4"}}>
                <a href="//reactjs.org/docs/react-component.html#render" target="_blank" rel="noopener noreferrer" title="Read docs for render (opens in a new tab)" dir="ltr">render</a>
              </li>
              <li className="Method Method--secondary pre-commit" style={{gridArea: "18 / 2 / span 2 / span 4"}}>
                <span dir="ltr">­React updates ­D­O­M and refs</span>
              </li>
              <li className="Method Method--hasLink Method--main commit" style={{gridArea: "21 / 2 / span 2 / span 1"}}>
                <a href="//reactjs.org/docs/react-component.html#componentdidmount" target="_blank" rel="noopener noreferrer" title="Read docs for componentDidMount (opens in a new tab)" dir="ltr">component­Did­Mount</a>
              </li>
            </ul>
            <div className="Pannel Pannel__updating">
              <h3 className="Pannel__title">Updating</h3>
            </div>

            <ul className="Methods">
              <li className="Method Method--hasLink Method--main render" style={{gridArea: "3 / 2 / span 2 / span 1"}}>
                <a href="//reactjs.org/docs/react-component.html#constructor" target="_blank" rel="noopener noreferrer" title="Read docs for constructor (opens in a new tab)" dir="ltr">constructor</a>
              </li>
              <li className="Method Method--hasLink render" style={{gridArea: "6 / 2 / span 2 / span 4"}}>
                <a href="//reactjs.org/docs/react-component.html#static-getderivedstatefromprops" target="_blank" rel="noopener noreferrer" title="Read docs for getDerivedStateFromProps (opens in a new tab)" dir="ltr">get­Derived­State­From­Props</a>
              </li>
              <li className="Method Method--hasLink pre-commit" style={{gridArea: "15 / 3 / span 2 / span 3"}}>
                <a href="//reactjs.org/docs/react-component.html#getsnapshotbeforeupdate" target="_blank" rel="noopener noreferrer" title="Read docs for getSnapshotBeforeUpdate (opens in a new tab)" dir="ltr">get­Snapshot­Before­Update</a>
              </li>
              <li className="Method Method--hasLink Method--main render" style={{gridArea: "12 / 2 / span 2 / span 4"}}>
                <a href="//reactjs.org/docs/react-component.html#render" target="_blank" rel="noopener noreferrer" title="Read docs for render (opens in a new tab)" dir="ltr">render</a>
              </li>
              <li className="Method Method--secondary pre-commit" style={{gridArea: "18 / 2 / span 2 / span 4"}}>
                <span dir="ltr">­React updates ­D­O­M and refs</span>
              </li>
              <li className="Method Method--hasLink Method--main commit" style={{gridArea: "21 / 3 / span 2 / span 3"}}>
                <a href="//reactjs.org/docs/react-component.html#componentdidupdate" target="_blank" rel="noopener noreferrer" title="Read docs for component­Did­Update (opens in a new tab)" dir="ltr">component­Did­Update</a>
              </li>
            </ul>

            <div className="Pannel Pannel__unmounting">
              <h3 className="Pannel__title">Unmounting</h3>
            </div>

            <ul className="Methods">
              <li className="Method Method--hasLink Method--main commit" style={{gridArea: "21 / 6 / span 2 / span 1"}}>
                <a href="//reactjs.org/docs/react-component.html#componentwillunmount" target="_blank" rel="noopener noreferrer" title="Read docs for componentWillUnmount (opens in a new tab)" dir="ltr">componentWillUnmount</a>
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default Lifecycle;
