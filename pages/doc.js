import React, { Component } from 'react';
import { RedocStandalone } from 'redoc';

export default class extends Component {
  static getInitialProps({ query: { link } }) {
    return { specUrl: link };
  }
  render() {
    let code;
    if (this.props.specUrl) {
      code = (
        <RedocStandalone
          specUrl={this.props.specUrl}
          options={{
            nativeScrollbars: true
          }}
        />
      );
    } else {
      code = <div>You didn't pass query param "link"</div>;
    }
    return <>{code}</>;
  }
}
