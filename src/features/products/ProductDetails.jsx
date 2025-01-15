import React from 'react'

const ProductDetails = () => {
    return (
        <div>
            <h1 className="text-2xl text-primaryMedium mb-4">Customer reviews</h1>
            <div className="flex items-center gap-2 mb-4">
                <StarRating rating={reviewStats.average} size="large" />
                <span className="text-lg">{reviewStats.average} out of 5</span>



            </div>
            <p className="text-sm text-gray-600 mb-6">
                {reviewStats.total.toLocaleString()} global ratings
            </p>
            <div className="space-y-2">
                {reviewStats.distribution.map((stat) => (
                    <RatingBar
                        key={stat.stars}
                        stars={stat.stars}
                        percentage={stat.percentage}
                    />
                ))}
            </div>
        </div>
    )
}

export default ProductDetails