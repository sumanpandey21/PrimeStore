import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Homepage";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <Header />
      <div >
        <HomePage />
        <div className="overflow-x-scroll no-scrollbar">
          <div className="flex w-70 ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
