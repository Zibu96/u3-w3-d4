
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import MyHomePage from "./components/MyHomePage"
import MyNav from "./components/MyNav"
import MyArticleDetail from "./components/MyArticleDetail"


function App() {


  return (
    <>
    <BrowserRouter>
      <MyNav />
      <Routes>
      <Route path="/"   element={<MyHomePage />} />
      <Route path="/article/:artid" element={<MyArticleDetail />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
