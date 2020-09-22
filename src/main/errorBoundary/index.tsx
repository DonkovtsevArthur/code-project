import React from "react";

type IProps = {
  children: any;
};

type IState = {
  hasError: boolean;
};

class ErrorBoundary extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    return this.state.hasError ? <h1>Ошибка страницы</h1> : this.props.children;
  }
}

export default ErrorBoundary;
