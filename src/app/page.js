import HomePage from "./components/Homepage";
import Card from "./components/Card";

export default function Page() {
  return (
    <div className="w-full min-h-screen p-4">
      <div>
        <div >
          <HomePage />
        </div>

        <div >
          <Card />
        </div>
      </div>
    </div>
  );
}
