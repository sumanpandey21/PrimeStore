import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/Homepage";
import Card from "./components/Card";

export default function Home() {
  return (
    <div>
      <Header/>
        <div >
            <HomePage/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      <Footer/>
    </div>
  );
}
