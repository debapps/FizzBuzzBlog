import HeroElement from "../components/HeroElement";
import LatestContent from "../components/LatestContent";
import Footer from "../components/Footer";
import HeadComponent from "../components/HeadComponent";

export default function Home() {
  return (
    <div>
      <HeadComponent title="FizzBuzz.Blog - Programing Tips and Stories" />
      <main>
        <HeroElement />
        <hr className="w-[90%] border-t-0 border-x-0 border-b-2 mx-auto border-dashed border-indigo-100" />
        <LatestContent />
        <Footer />
      </main>
    </div>
  );
}
