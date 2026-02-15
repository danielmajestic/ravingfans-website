import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-dark py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-gray-400 text-sm hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Results
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Work With Us</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/process" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/call" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Book a Call
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <ul className="space-y-2.5">
              <li>
                <Link href="/insights" className="text-gray-400 text-sm hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <a
                  href="mailto:dan@ravingfans.ai"
                  className="text-gray-400 text-sm hover:text-white transition-colors"
                >
                  dan@ravingfans.ai
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} RavingFans.ai. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with care by the RavingFans.ai team
          </p>
        </div>
      </div>
    </footer>
  );
}
