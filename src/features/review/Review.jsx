import StarRating from '@/features/review/StarRating'
import RatingBar from '@/features/review/RatingBar'
import ReviewImages from '@/features/review/ReviewImage'
import ReviewCard from '@/features/review/ReviewCard'

const reviewStats = {
    average: 4.4,
    total: 299976,
    distribution: [
        { stars: 5, percentage: 70 },
        { stars: 4, percentage: 20 },
        { stars: 3, percentage: 5 },
        { stars: 2, percentage: 3 },
        { stars: 1, percentage: 2 },
    ]
}

const reviewImages = [
    { url: '/review1.svg', alt: 'Product review image 1' },
    { url: '/review2.svg', alt: 'Product review image 2' },
    { url: '/review3.svg', alt: 'Product review image 3' },
]

const reviews = [
    {
        userImage: '/user.svg',
        userName: 'John Doe',
        rating: 5,
        location: 'United States',
        date: 'January 27, 2023',
        badges: ['Fire TV Stick', 'Verified Purchase'],
        text: 'Lorem ipsum Now, I am a mom of two. I don\'t wake up hours early to do my makeup in the morning. I literally did this at 1:30 in the afternoon. So, take my review with a grain of salt nd know that I am in no way, shape or form a beauty guru. However, I do feel like a good mascara can really do wonders even for a laid back, more natural look. I also like to ball on a budget. I have tried more high end mascaras, but with a family, I tend to buy more for them. So, price is definitely a huge factor especially if it is good quality.',
        helpfulCount: 19
    },
    {
        userImage: '/user.svg',
        userName: 'Jane Smith',
        rating: 5,
        location: 'United States',
        date: 'January 27, 2023',
        badges: ['Fire TV Stick', 'Verified Purchase'],
        text: 'Lorem ipsum Now, I am a mom of two. I don\'t wake up hours early to do my makeup in the morning. I literally did this at 1:30 in the afternoon. So, take my review with a grain of salt nd know that I am in no way, shape or form a beauty guru. However, I do feel like a good mascara can really do wonders even for a laid back, more natural look. I also like to ball on a budget. I have tried more high end mascaras, but with a family, I tend to buy more for them. So, price is definitely a huge factor especially if it is good quality.',
        helpfulCount: 19
    }
]

export default function Review() {
    return (
        <div className="w-full py-8 px-[70px] ">
            <div className="grid md:grid-cols-2 gap-8 border-t-[1px] border-[#dadada] pt-4">

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


                <div>
                    <ReviewImages images={reviewImages} />

                    <div className="mt-12">
                        <h2 className="text-xl text-secondary font-medium mb-6">
                            Top reviews from United States
                        </h2>
                        <div className="space-y-6">
                            {reviews.map((review, index) => (
                                <ReviewCard key={index} review={review} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

