import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <Link href="/store" className="flex items-center space-x-2">
              <div className="h-6 w-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">S</span>
              </div>
              <span className="text-lg font-bold text-slate-900 dark:text-slate-100">
                Store
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 text-center md:text-left">
              Your one-stop shop for everything you need.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center space-x-6">
            <Link
              href="/store"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/store/products"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              Products
            </Link>
          </nav>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Store App. Built with Next.js and shadcn/ui.
          </p>
        </div>
      </div>
    </footer>
  );
}
