class Portfolio extends React.Component {
  render() {
    return (
      <div className={"portfolio "}>
        <div className="container-fluid">
          <div className="row"> 

            <Portfolios
              info={{
                name: "F1IT",
                desc: "",
                bg:
                  "https://f1it.com/wp-content/themes/f1/images/F1IT-Color-Logo.svg",
                link: "https://f1it.com/"
              }}
            />

            <Portfolios
              info={{
                name: "Clearfork Foods",
                desc: "",
                bg:
                  "../../images/clear.svg",
                link: "https://clearforkfoods.com/",
              }}
            />

            <Portfolios
              info={{
                name: "Texas Bingo",
                desc: "",
                bg:
                  "https://texasbingo.com/wp-content/themes/bingo/images/texas-bingo-logo.png",
                link: "https://texasbingo.com/"
              }}
            />

            <Portfolios
              info={{
                name: "Help Center",
                desc: "",
                bg:
                  "https://helpcentertx.org/wp-content/themes/help/images/help-center-logo.svg",
                link: "https://helpcentertx.org/"
              }}
            />

            <Portfolios
              info={{
                name: "The Enterprise Team",
                desc: "",
                bg:
                  "https://theenterpriseteam.com/wp-content/uploads/2022/11/the-enterprise-team-logo-300x116.png",
                link: "https://theenterpriseteam.com/"
              }}
            />

            <Portfolios
              info={{
                name: "Winters-Oliver",
                desc: "",
                bg:
                  "https://wintersoliver.com/wp-content/uploads/2020/11/woia-logo.png",
                link: "https://wintersoliver.com/"
              }}
            />

            <Portfolios
              info={{
                name: "Tulumi",
                desc: "Digital Marketing",
                bg:
                  "https://tulumi.com/storage/2021/10/Tulumi-Logo_FF0013-02-1-v2.png",
                link: "https://tulumi.com/"
              }}
            />

            <Portfolios
              info={{
                name: "Strength Metrix",
                desc: "",
                bg:
                  "https://www.strengthmetrix.com/wp-content/uploads/2018/02/sm-logov2-wht.svg",
                link: "https://www.strengthmetrix.com/"
              }}
            />

            <Portfolios
              info={{
                name: "Rebirth",
                desc: "Medical Aesthetics",
                bg: "../../images/WLS-Rebirth-Logo-Fin.png",
                link: "https://rebirthma.com/"
              }}
            />

            <Portfolios
              info={{
                name: "Dixon Associates",
                desc: "",
                bg:
                  "https://dixon-associates.com/wp-content/uploads/2020/08/dixon-assoc-logo.png",
                link: "https://dixon-associates.com/"
              }}
            />

            <Portfolios
              info={{
                name: "Clifton Crofford Studios",
                desc: "",
                bg:
                  "https://cliftoncroffordstudios.com/wp-content/themes/cxc/assets/images/cxc-logo.png",
                link: "https://cliftoncroffordstudios.com/"
              }}
            />

            {/*<Portfolios
              info={{
                name: "QGrads",
                desc: "",
                bg:
                  "https://qgrads.com/wp-content/themes/qgrads/images/svg/qgrads-logo.svg",
                link: "https://qgrads.com/"
              }}
            />*/}

            <Portfolios
              info={{
                name: "Adair Eyewear",
                desc: "",
                bg:
                  "https://adaireyewear.com/wp-content/uploads/2019/07/adair-logo.png",
                link: "https://adaireyewear.com/"
              }}
            />

            {/* <Portfolios
              info={{
                name: "Store And Move",
                desc: "",
                bg:
                  "https://www.972getasam.com/wp-content/themes/sam/dist/assets/images/sam-logo.jpg",
                link: "https://www.972getasam.com/"
              }}
            /> */}           
            

            {/* <Portfolios
              info={{
                name: "Scott's K9",
                desc: "",
                bg:
                  "https://scottsk9.com/wp-content/uploads/2020/07/scottsk9-logo-footer.png.webp",
                link: "https://scottsk9.com/"
              }}
            /> */}          


          </div>
        </div>
      </div>
    );
  }
}
