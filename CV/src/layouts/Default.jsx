import Footer from "../componets/layout/Footer";
import Header from "../componets/layout/Header";
import { Outlet } from 'react-router-dom'

function Default() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    )
}

export default Default