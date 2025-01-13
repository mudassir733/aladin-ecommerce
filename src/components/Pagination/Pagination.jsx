export default function Pagination({ currentPage, totalPages }) {
    return (
        <div className="flex items-center justify-center space-x-2 mt-8">
            <button
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
                ← Previous page
            </button>
            {[...Array(totalPages)].map((_, i) => (
                <button
                    key={i + 1}
                    className={`px-3 py-1 rounded-md ${currentPage === i + 1
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    {i + 1}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
                Next page →
            </button>
        </div>
    )
}