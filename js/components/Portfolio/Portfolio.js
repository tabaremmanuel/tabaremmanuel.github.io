class Portfolio extends React.Component {
  render() {
    return (
      <div className={"portfolio "}>
        <div className="container-fluid">
          <div className="row">  

            <Portfolios
              info={{
                name: "Neighbors House Grocery",
                desc: "",
                bg:
                  "https://neighborshousegrocery.com/wp-content/uploads/2019/03/favicon.png",
                link: "https://neighborshousegrocery.com/"
              }}
            />

            <Portfolios
              info={{
                name: "ViewTechGroup",
                desc: "",
                bg:
                  "https://viewtechgroup.com/wp-content/uploads/2019/08/viewtech-logo.jpg",
                link: "https://viewtechgroup.com"
              }}
            />

            <Portfolios
              info={{
                name: "Texas Virtual Schools",
                desc: "Powering Bright Minds",
                bg:
                  "https://txvs.org/wp-content/themes/twentynineteen-child/img/txvs-vector.svg",
                link: "https://txvs.org/"
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
                name: "Sanus Vivere",
                desc: "Health and Wellness",
                bg:
                  "https://sanusviverehealthandwellness.com/wp-content/uploads/2019/02/sanus-vivere-logo.png",
                link: "https://sanusviverehealthandwellness.com/"
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

            <Portfolios
              info={{
                name: "QGrads",
                desc: "",
                bg:
                  "https://qgrads.com/wp-content/themes/qgrads/images/svg/qgrads-logo.svg",
                link: "https://qgrads.com/"
              }}
            />

            <Portfolios
              info={{
                name: "QuestPro",
                desc: "",
                bg:
                  "https://www.questpro.com/wp-content/uploads/2016/05/cropped-qpro-logo.png",
                link: "https://www.questpro.com/"
              }}
            />

            <Portfolios
              info={{
                name: "Store And Move",
                desc: "",
                bg:
                  "https://www.972getasam.com/wp-content/themes/dfwc/img/logo.jpg",
                link: "https://www.972getasam.com/"
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
