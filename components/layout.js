import Link from 'next/link';


// Updated Nav Component for a more professional news layout
const Nav = () => (
    <header className="shadow-md sticky top-0 bg-white z-50 border-b-2 border-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center justify-between h-16">
                {/* Logo & Menu Links */}
                <div className="flex items-center space-x-10">
                    <Link href="/" className="text-3xl font-extrabold tracking-tight text-indigo-700 font-serif">
                        GLOBAL PULSE
                    </Link>
                    <div className="hidden lg:flex space-x-6 text-sm font-semibold text-gray-700">
                        {/* Links based on article categories for a news site feel */}
                        <Link href="/category/sport" className="hover:text-indigo-700 transition">Sport & Games</Link>
                        <Link href="/category/world" className="hover:text-indigo-700 transition">World</Link>
                        <Link href="/category/crime" className="hover:text-indigo-700 transition">Crime</Link>
                        <Link href="/category/entertainment" className="hover:text-indigo-700 transition">Entertainment</Link>
                    </div>
                </div>

                {/* Icons/Actions */}
                <div className="flex items-center space-x-4">
                    {/* Search Icon */}
                    <button className="text-gray-500 hover:text-indigo-700 transition p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                     {/* Write/Submit Button */}
                    <button className="hidden sm:flex items-center text-sm font-medium bg-indigo-700 text-white px-3 py-1.5 rounded-full hover:bg-indigo-800 transition shadow-md">
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                        Submit Story
                    </button>
                    {/* User Profile Placeholder */}
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                </div>
            </nav>
        </div>
    </header>
);

// Basic Footer - Made it dark for contrast
const Footer = () => (
    <footer className="bg-gray-800 border-t-4 border-indigo-700 mt-12 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Global Pulse News Portal. All rights reserved.
            <div className="flex justify-center gap-4 mt-3 text-xs">
                <a href="#" className="hover:text-indigo-400 transition">Privacy Policy</a>
                <a href="#" className="hover:text-indigo-400 transition">Terms of Use</a>
                <a href="#" className="hover:text-indigo-400 transition">Contact Us</a>
            </div>
        </div>
    </footer>
);


export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}