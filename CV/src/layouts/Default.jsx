import Footer from "../componets/layout/Footer";
import Header from "../componets/layout/Header";
import { Outlet } from 'react-router-dom'

function Default() {
    return (
      <div className="bg-black">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    )
}

export default Default