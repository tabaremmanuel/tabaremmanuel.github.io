class Top extends React.Component{
  render(){
    return(
      <div className={'top '}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 text-center">
              <a href="javscript:void(0)" onClick={this.props.click}>
                <img src="./images/2024/144x144.png" />
              </a>
              {/* <h1 children="Emmanuel Tabar" /> */}
              {/* <a className="btn btn-dark mx-1" href="javscript:void(0)" onClick={this.props.click}>
                <h5 className="mb-0" children="See my work" />
              </a> */}
              {/* <a className="btn btn-dark mx-1" href="javscript:void(0)" onClick={this.props.showAbout}>
                <h5 className="mb-0" children="About me" />
              </a> */}
              {/* <form action="" method="POST" class="d-flex justify-content-center mt-5">
              <div>
                <input class="w-100 my-2 p-2" type="text" name="email" placeholder="Email" />
                <textarea class="w-100 my-2 p-2" name="message" placeholder="Message"></textarea>
                <div class="h-captcha" data-sitekey="3472aee1-9e8a-4ceb-a111-6615d920b0e0"></div>
                <input class="btn btn-dark" type="submit" value="Message Me!" />
              </div>
              </form> */}
            </div>
          </div>
        </div>
      </div>      
    )
  }
}
