import LeftPannel from "./components/LeftPannel";
import Navbar from "./components/Navbar";
import RightPannel from "./components/RightPannel";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <div className="h-[calc(100%-21%)] my-[54px] flex justify-between px-20 text-space-cadet">
        <div className="w-[40%] h-full flex flex-col justify-between">
          <LeftPannel />
        </div>
        <div className="w-[45%] h-full flex flex-col justify-between">
          <RightPannel />
        </div>
      </div>
    </main>
  );
}
