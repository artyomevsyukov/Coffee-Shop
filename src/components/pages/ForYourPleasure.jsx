import PageHero from "../pageHero/PageHero"
import AppHeader from "../appHeader/AppHeader"
import AboutOur from "../aboutOur/AboutOur"
import Divider from "../divider/Divider"

import img from "../../assets/AboutOurGoodsImg.jpg"
import CoffeeCardList from "../CoffeeCardList/CoffeeCardList"
import useCoffeeData from "../../hooks/useCoffeeData"

const ForYourPleasure = () => {
  const { data, loading, error, refetch } = useCoffeeData()
  return (
    <section>
      <PageHero title="For your pleasure" backgroundImage="coffee-shop.jpg">
        <AppHeader color="white" />
      </PageHero>
      <AboutOur data={{ img }} align="center" title="About Our Beans">
        <p>
          Extremity sweetness difficult behaviour he&nbsp;of. On <br />
          disposal of&nbsp;as&nbsp;landlord horrible.
          <br />
          <br />
          Afraid at&nbsp;highly months do&nbsp;things on&nbsp;at. Situation{" "}
          <br />
          recommend objection do&nbsp;intention <br />
          so&nbsp;questions. As&nbsp;greatly removed calling pleased
          improve&nbsp;an. <br />
          Last ask him cold feel <br /> met spot shy want. Children
          me&nbsp;laughing we <br />
          prospect answered followed. At&nbsp;it&nbsp;went <br /> is&nbsp;song
          that held help face.
        </p>
      </AboutOur>
      <Divider />
      <CoffeeCardList
        data={data}
        loading={loading}
        error={error}
        refetch={refetch}
      />
    </section>
  )
}

export default ForYourPleasure
