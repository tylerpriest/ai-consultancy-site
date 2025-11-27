import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:col-span-1">
            <div className="font-display text-2xl font-extrabold tracking-tight">
              AI<span className="text-accent-400">.</span>
            </div>
            <p className="text-gray-400 max-w-xs text-sm leading-relaxed">
              AI solutions for mid-sized businesses — delivered responsibly from strategy to scale.
            </p>
            <div className="text-sm text-gray-500">
              <p>Sydney • London • Austin</p>
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6">Company</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6">Resources</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link href="/resources" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    AI Readiness Audit
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    Responsible AI Checklist
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                    ROI Calculator
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-xs leading-5 text-gray-400">
            &copy; 2024 AI Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-xs leading-5 text-gray-400 hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/responsible-ai" className="text-xs leading-5 text-gray-400 hover:text-gray-300 transition-colors">
              Responsible AI Statement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}