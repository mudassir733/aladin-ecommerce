export default function RatingBar({ stars, percentage }) {
    return (
        <div className="flex items-center gap-2 text-sm">
            <span className="w-12">{stars} stars</span>
            <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                    className="h-full bg-yellow-400"
                    style={{ width: `${percentage}%` }}
                />
            </div>
        </div>
    )
}

