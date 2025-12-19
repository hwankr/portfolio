import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-4 md:px-8 border-t border-white/10 bg-neutral-900 text-neutral-400 text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          &copy; {currentYear} Portfolio. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-white transition-colors">LinkedIn</Link>
          <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}
