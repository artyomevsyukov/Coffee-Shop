import { lazy, Suspense } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom"

import AppFooter from "../appFooter/AppFooter"
import Spinner from "../spinner/Spinner"
import CoffeeInfo from "../pages/CoffeeInfo"

import "../../style/style.scss"
import "./App.scss"
import PageHero from "../pageHero/PageHero"
import AppHeader from "../appHeader/AppHeader"

const PageNotFound = lazy(() => import("../pages/PageNotFound"))
const MainPage = lazy(() => import("../pages/MainPage"))
const OurCoffee = lazy(() => import("../pages/OurCoffee"))
const ForYourPleasure = lazy(() => import("../pages/ForYourPleasure"))

function App() {
  return (
    <Router>
      <div className="app">
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              {/* <Route path="/OurCoffee" element={<OurCoffee />} /> */}
              <Route
                path="/OurCoffee"
                element={
                  <>
                    <PageHero
                      title="Our Coffee"
                      backgroundImage="coffee-shop.jpg">
                      <AppHeader color="white" />
                    </PageHero>
                    <Outlet />
                  </>
                }>
                <Route index element={<OurCoffee />} />
                <Route path=":coffeeId" element={<CoffeeInfo />} />
              </Route>
              <Route path="/OurCoffee/:coffeeId" element={<CoffeeInfo />} />
              <Route path="/ForYourPleasure" element={<ForYourPleasure />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </main>
        <AppFooter />
      </div>
    </Router>
  )
}

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route
//             path="/OurCoffee"
//             element={
//               <>
//                 <PageHero title="Our Coffee" backgroundImage="coffee-shop.jpg">
//                   <AppHeader color="white" />
//                 </PageHero>
//                 <Outlet />
//               </>
//             }>
//             <Route index element={<OurCoffee />} />
//             <Route path=":coffeeId" element={<CoffeeInfo />} />
//           </Route>
//           <Route path="/" element={<MainPage />} />
//           <Route path="/ForYourPleasure" element={<ForYourPleasure />} />
//           <Route path="*" element={<PageNotFound />} />
//         </Routes>
//         <AppFooter />
//       </div>
//     </Router>
//   )
// }

export default App
