import Link from "next/link";

export default function NavBar({ links }) {
    return (
        <nav className="flex flex-row justify-between items-center space-x-4">
            {links.map((link, idx) => {
                return (
                    <Link
                        className="p-2 font-russo text-xl text-brand-color1 hover:text-brand-color2 hover:bg-brand-color1 rounded-md"
                        key={idx}
                        href={link.href}>
                        {link.title}
                    </Link>
                );
            })}
        </nav>
    );
}
