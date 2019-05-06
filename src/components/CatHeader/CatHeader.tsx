import * as React from "react"

type CatHeaderProps = {
  title: string;
}

class CatHeader extends React.Component<CatHeaderProps> {
  render(): React.ReactNode {
    return (
      <div>
        <img
          src={`https://cataas.com/cat/says/${this.props.title}?color=red&size=50`}
          alt={this.props.title}
        />
      </div>
    )
  }
}

export default CatHeader
