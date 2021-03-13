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
                name: "Preston Dugas Law Firm",
                desc: "",
                bg:
                  "https://www.pjdlawfirm.com/wp-content/themes/pres/images/preston-dugas-logo.svg",
                link: "https://www.pjdlawfirm.com/"
              }}
            />

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
                  "https://static.wixstatic.com/media/12c37e_1228d72f59034b60a48139453b45e47b~mv2.png/v1/fill/w_298,h_57,al_c,q_85,usm_0.66_1.00_0.01/ViewTech_Logo_HorizontalWhite.webp",
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
                name: "QuestPro",
                desc: "",
                bg:
                  "https://www.questpro.com/wp-content/uploads/2016/05/cropped-qpro-logo.png",
                link: "https://www.questpro.com/"
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
            

            <Portfolios
              info={{
                name: "Scott's K9",
                desc: "",
                bg:
                  "https://scottsk9.com/wp-content/uploads/2020/07/scottsk9-logo-footer.png.webp",
                link: "https://scottsk9.com/"
              }}
            />


          </div>
        </div>
      </div>
    );
  }
}
