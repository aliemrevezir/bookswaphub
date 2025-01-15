import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Share Books, Share Knowledge
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join our community of book lovers and start exchanging books today. Discover new stories,
              share your favorites, and connect with fellow readers.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/register"
                className="btn btn-primary"
              >
                Get started
              </Link>
              <Link
                to="/browse"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Browse Books <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Books Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Featured Books
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Check out some of the most popular books available for swap.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {/* Add featured books here */}
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold text-gray-900">Coming Soon!</p>
            <p className="text-sm text-gray-500">Featured books will appear here</p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Start swapping books in three simple steps
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {[
              {
                title: 'List Your Books',
                description: 'Add books you want to swap to your collection.',
              },
              {
                title: 'Find Books',
                description: 'Browse through available books from other members.',
              },
              {
                title: 'Swap Books',
                description: 'Connect with other members and arrange your book swap.',
              },
            ].map((step) => (
              <div key={step.title} className="flex flex-col items-center">
                <dt className="text-lg font-semibold leading-7 text-gray-900">
                  {step.title}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto text-center">{step.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 