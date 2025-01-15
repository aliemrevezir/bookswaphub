import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Browse Books', href: '/browse' },
  { name: 'My Books', href: '/my-books' },
  { name: 'About', href: '/about' },
]

export default function Navbar() {
  const [isAuthenticated] = useState(false)

  return (
    <Disclosure as="nav" className="bg-[rgb(var(--card-background))] sticky top-0 z-50 backdrop-blur-lg bg-opacity-80 border-b border-gray-200 dark:border-dark-border">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <Link to="/" className="flex flex-shrink-0 items-center">
                  <span className="text-2xl font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                    BookSwap Hub
                  </span>
                </Link>
                <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="inline-flex items-center px-1 pt-1 text-sm font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                <ThemeToggle />
                {isAuthenticated ? (
                  <Link
                    to="/profile"
                    className="btn btn-ghost"
                  >
                    Profile
                  </Link>
                ) : (
                  <div className="flex items-center space-x-4">
                    <Link
                      to="/login"
                      className="btn btn-ghost"
                    >
                      Log in
                    </Link>
                    <Link
                      to="/register"
                      className="btn btn-primary"
                    >
                      Sign up
                    </Link>
                  </div>
                )}
              </div>
              <div className="-mr-2 flex items-center sm:hidden space-x-2">
                <ThemeToggle />
                <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2 text-[rgb(var(--text-secondary))] hover:bg-brand-light dark:hover:bg-dark-card transition-colors duration-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-base font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-brand-light dark:hover:bg-dark-card transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="border-t border-gray-200 dark:border-dark-border pb-3 pt-4">
              {!isAuthenticated && (
                <div className="space-y-1 px-3">
                  <Link
                    to="/login"
                    className="block px-3 py-2 text-base font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-brand-light dark:hover:bg-dark-card transition-colors duration-200"
                  >
                    Log in
                  </Link>
                  <Link
                    to="/register"
                    className="block px-3 py-2 text-base font-medium text-brand-primary hover:text-brand-secondary transition-colors duration-200"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
} 