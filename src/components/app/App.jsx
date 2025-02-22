import { lazy, Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import AppHeader from "../appHeader/AppHeader"
import AppFooter from "../appFooter/AppFooter"
import Spinner from "../spinner/Spinner"

import "../../style/style.scss"
import "./App.scss"

const PageNotFound = lazy(() => import("../pages/PageNotFound"))
const MainPage = lazy(() => import("../pages/MainPage"))
const OurCoffee = lazy(() => import("../pages/OurCoffee"))
const ForYourPleasure = lazy(() => import("../pages/ForYourPleasure"))
// const ForYourPleasure = lazy(() => import("../pages/ForYourPleasure"))

function App() {
  return (
    <Router>
      <div className="app">
        {/* <AppHeader color="white" /> */}
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/OurCoffee" element={<OurCoffee />} />
              <Route path="/ForYourPleasure" element={<ForYourPleasure />} />
              {/* <Route
                path="/ForYourPleasure/:comicId"
                element={<SingleComicPage />}
                /> */}

              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </main>
        <AppFooter />
      </div>
    </Router>
  )
}

export default App
