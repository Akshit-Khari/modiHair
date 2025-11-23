import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-teal-600 shadow-lg py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <h1 className="text-3xl font-bold text-white">HairClinic</h1>

      <ul className="flex gap-8 text-lg">
        <li><Link href="/" className="text-white hover:text-teal-100 font-semibold transition duration-200">Home</Link></li>
        <li><Link href="/book" className="text-white hover:text-teal-100 font-semibold transition duration-200">Book</Link></li>
        <li><Link href="/doctors" className="text-white hover:text-teal-100 font-semibold transition duration-200">Doctors</Link></li>
        <li><Link href="/reviews" className="text-white hover:text-teal-100 font-semibold transition duration-200">Reviews</Link></li>
      </ul>
    </nav>
  );
}
