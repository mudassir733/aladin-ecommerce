import Image from 'next/image'

export default function ReviewImages({ images }) {
    return (
        <div className="mt-8">
            <h2 className="text-xl text-primaryMedium font-medium mb-4">Reviews with images</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                        <Image
                            src={image.url}
                            alt={image.alt}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

