"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 px-4 md:px-8 bg-black text-neutral-600 text-xs text-center border-t border-white/5">
      <div className="max-w-6xl mx-auto">
          &copy; {currentYear} Fabro Design. All rights reserved.
      </div>
    </footer>
  );
}
