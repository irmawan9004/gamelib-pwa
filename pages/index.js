import Header from "../components/Header";
import Meta from "../components/Meta";
import List from "../components/List";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <Meta title="GameLib Game Enjoyer" />

      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
