import * as React from "react"

type CatHeaderProps = {
  title: string;
}

class CatHeader extends React.Component<CatHeaderProps> {
  render(): React.ReactNode {
    return (
      <div>
        <h4>Works</h4>
        <img src={`https://cataas.com/cat/says/${this.props.title}?color=red&size=50`} />
      </div>
    )
  }
}

export default CatHeader
