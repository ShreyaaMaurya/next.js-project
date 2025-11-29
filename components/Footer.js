import Link from "next/link";

export default function Footer() {
  return (
     <footer className="bg-gray-900 text-gray-300 mt-10 py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-sm">© 2025 NewsLive — All Rights Reserved.</p>

          <div className="flex justify-center gap-4 mt-3">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </footer>

  );
}
