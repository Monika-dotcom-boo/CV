import Footer from "./componets/layout/Footer";
import Header from "./componets/layout/Header";
import background from "./assets/background.jpg";


function App() {
  return (
    <div className="bg-black">
      <Header />
      <section>
        <img src={background} alt="Background" />
      </section>
      <Footer />
    </div>
  );
}

export default App;


