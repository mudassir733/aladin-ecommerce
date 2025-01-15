import Image from 'next/image'
import StarRating from './StarRating'

export default function ReviewCard({ review }) {
    return (
        <div className="border-b border-gray-200 py-6">
            <div className="flex items-center gap-4 mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                        src={review.userImage}
                        alt={review.userName}
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <StarRating rating={review.rating} size="small" />
                    <p className="text-gray-600 text-sm mt-1">
                        Reviewed in {review.location} on {review.date}
                    </p>
                    <div className="flex gap-2 mt-1">
                        {review.badges.map((badge, index) => (
                            <span
                                key={index}
                                className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded"
                            >
                                {badge}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text-gray-800 mb-4">{review.text}</p>

            <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">
                    {review.helpfulCount} people found this helpful
                </span>
                <div className="flex gap-4">
                    <button className="px-6 py-1 text-sm bg-primaryMedium text-white rounded hover:bg-primaryLight transition-colors">
                        Helpful
                    </button>
                    <button className="text-sm text-teal-600 hover:text-teal-700 transition-colors">
                        Report abuse
                    </button>
                </div>
            </div>
        </div>
    )
}

