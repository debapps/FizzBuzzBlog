import Logo from "./Logo";
import NavBar from "./NavBar";
import VerticalMenu from "./VerticalMenu";
import { navData } from "../../../public/site_data/navData";

// Header Element.
export default function Header() {
    return (
        <header className="p-5 bg-gray-50 shadow-lg shadow-brand-color2 opacity-90 flex flex-row justify-between items-center lg:fixed w-full">
            <span>
                <Logo text="FizzBuzz Blog." />
            </span>
            <span className="hidden lg:block">
                <NavBar links={navData} />
            </span>
            <span className="lg:hidden">
                <VerticalMenu links={navData} />
            </span>
        </header>
    );
}
