import { Component } from 'react';

// Error boundary can only be created using Class based Components.
// It is a regular class based component but it is a component which
// implements the componentDidCatch() {} lifecycle method.
// componentDidCatch() can be added to any class based component and whenver we
// add that, it makes that class based component an Error Boundary!
// This lifecycle method will be triggered whenever one of the child components
// throws an error or generates an error!
// we return this.props.children because we want to wrap our error boundary
// component around the components which should be protected by that component.
export default class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }

  // we get error object parameter automatically passesd by React
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}
