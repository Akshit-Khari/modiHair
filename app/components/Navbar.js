import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-teal-600 shadow-lg py-4 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-50 overflow-x-auto">
      <h1 className="text-xl sm:text-3xl font-bold text-white whitespace-nowrap">HairClinic</h1>

      <ul className="flex gap-3 sm:gap-8 text-sm sm:text-lg">
        <li><Link href="/" className="text-white hover:text-teal-100 font-semibold transition duration-200 whitespace-nowrap">Home</Link></li>
        <li><Link href="/book" className="text-white hover:text-teal-100 font-semibold transition duration-200 whitespace-nowrap">Book</Link></li>
        <li><Link href="/doctors" className="text-white hover:text-teal-100 font-semibold transition duration-200 whitespace-nowrap">Doctors</Link></li>
        <li><Link href="/reviews" className="text-white hover:text-teal-100 font-semibold transition duration-200 whitespace-nowrap">Reviews</Link></li>
      </ul>
    </nav>
  );
}
