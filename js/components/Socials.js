class Socials extends React.Component{
    render(){
        return (
            <div className="social text-center">
              <a href="https://www.facebook.com/zoan.trophy.1" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a
                href="https://ph.linkedin.com/in/emmanuel-tabar-007869100"
                target="_blank"
              >
                <i className="fa fa-linkedin" />
              </a>
              <a
                href="https://www.onlinejobs.ph/jobseekers/info/689062"
                target="_blank"
              >
                <img src="../../images/oljph.png" />
              </a>
              <a href="mailto:tabar.emmanuel@gmail.com">
                <i className="fa fa-envelope" />
              </a>
              <a href="skype:emmanuel.tabar?chat" target="_blank">
                <i className="fa fa-skype" />
              </a>
            </div>
        )
    }
}