import React, {Component} from 'react';

export default class ErrorBoundary extends Component<any, any> {

  state = {
    error: false
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(`zavanton - componentDidCatch`);
    console.log(error);
    this.setState({error: true})
  }

  render() {
    if (this.state.error) {
      return <h1>Error</h1>;
    }

    return this.props.children;
  }
};
