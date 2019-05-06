import * as React from 'react'

interface IndexPageProps {
  name: string;
  tagline: string;
}

export default class Header extends React.Component<IndexPageProps, {}> {
  public render() {
    const {
      name,
      tagline
    } = this.props;

    return (
      <div>
        <h1>{name}</h1>
        <h2>{tagline}</h2>
      </div>
    )
  }
}
