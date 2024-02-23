import LeftPannel from "./components/LeftPannel";
import Navbar from "./components/Navbar";
import RightPannel from "./components/RightPannel";

export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />
      <div className="my-[54px] flex h-[calc(100%-21%)] justify-between px-20 text-space-cadet">
        <div className="flex h-full w-[40%] flex-col justify-between">
          <LeftPannel />
        </div>
        <div className="flex h-full w-[45%] flex-col justify-between">
          <RightPannel />
        </div>
      </div>
    </main>
  );
}
