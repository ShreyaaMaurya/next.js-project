import Link from "next/link";

export default function Nav() {
  return (
    <header class="shadow-sm border-b border-gray-100 sticky top-0 bg-white z-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex items-center justify-between h-16">
                <div class="flex items-center space-x-8">
                    <div class="text-2xl font-bold text-red-600">TazaKhabar</div>
                    <div class="hidden md:flex space-x-6 text-sm font-medium">
                        <a href="#" class="hover:text-red-600 transition duration-150">Home</a>
                        <a href="#" class="hover:text-red-600 transition duration-150">Recently arrived</a>
                        <a href="#" class="hover:text-red-600 transition duration-150">Sport & Games</a>
                        <a href="#" class="hover:text-red-600 transition duration-150">Entertainment</a>
                    </div>
                </div>

                <div class="flex items-center space-x-4">
                    <button class="flex items-center text-sm font-medium hover:text-red-600 transition duration-150 hidden sm:flex">
                        <svg class="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
                        Write
                    </button>
                    <button class="md:hidden">
                        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                    <div class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold">
                        <svg class="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="https://cdn-icons-png.flaticon.com/512/219/219983.png"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                    </div>
                </div>
            </nav>
        </div>
    </header>
  );
}
