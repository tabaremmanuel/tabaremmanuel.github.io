class ToggleMenu extends React.Component{
  render(){
    return(
      <a className="toggle-menu" onClick={this.props.click} href="javascript:void(0)">
        <div className="bar1" />
        <div className="bar2" />
        <div className="bar3" />
      </a>
    )
  }
}
