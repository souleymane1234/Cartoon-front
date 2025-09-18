    import Home from '../pages/Home'
    import Watch from '../pages/Watch'
    import TopCartoons from '../pages/TopCartoons'
    import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
    import Layout from '../components/Layout'

    function MyRoutes() {

      return (
        <>
          
          <Router>
            <Routes>
              <Route
                path="/*"
                element={<Layout />}
              >
                <Route index element={<Home />} />
                <Route path="watch" element={<Watch />} />
                <Route path="top-cartoons" element={<TopCartoons />} />
                {/* Ajoute d'autres routes ici si nécessaire */}
                <Route path="*" element={<div>Page Not Found</div>} />
              </Route>
            </Routes>
          </Router>
        </>
      )
    }

    export default MyRoutes;