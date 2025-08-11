import { useState } from 'react'

export default function Profile() {
  const [user] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    joinedDate: 'January 2024',
    booksListed: 0,
    swapsCompleted: 0,
  })

  const [books] = useState([])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-6">
          <div className="h-24 w-24 bg-primary-100 rounded-full flex items-center justify-center">
            <span className="text-3xl text-primary-600">
              {user.name.charAt(0)}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-500">Member since {user.joinedDate}</p>
            <div className="mt-2 flex space-x-4">
              <div>
                <span className="text-gray-500">Books Listed:</span>{' '}
                <span className="font-semibold">{user.booksListed}</span>
              </div>
              <div>
                <span className="text-gray-500">Swaps Completed:</span>{' '}
                <span className="font-semibold">{user.swapsCompleted}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Books Section */}
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">My Books</h2>
          <button className="btn btn-primary">
            Add New Book
          </button>
        </div>

        {books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Book cards will go here */}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">You haven&apos;t listed any books yet.</p>
            <p className="text-sm text-gray-400 mt-2">
              Add your first book to start swapping!
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 