class Portfolios extends React.Component{
    render(){
        return (
            <div id={ this.props.info.name.toLowerCase().replace(/\s/g, '') + '-port' } className="px-0 col-12 col-sm-6 col-md-4 portfolio-item" style={ { backgroundImage: 'url(' + this.props.info.bg + ')' } }>
                <a target="_blank" href={this.props.info.link} className="mx-0 h-100 w-100 row align-items-center text-center portfolio-details">
                    <div className="w-100">
                        <h4 children={this.props.info.name} />
                        <h5 children={this.props.info.desc} />
                        &times;
                        <br />
                        <i className="fa fa-wordpress " />
                    </div>
                </a>
            </div>
        );
    }
}