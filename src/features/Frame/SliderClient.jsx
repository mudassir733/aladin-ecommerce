"use client"
import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from "next/image"

const SliderClient = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }


    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className=" w-full h-[400px] flex overflow-hidden z-0">
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute flex justify-between left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                        }`}

                >
                    <section className='flex flex-wrap flex-col-reverse md:flex-row justify-between m-auto'>

                        <div className=" inset-0 flex items-center justify-center md:w-1/2 ">
                            <div className="text-center md:text-left text-white max-w-xl px-4 md:h-full">
                                <h2 className="display text-secondary text-center md:text-left mt-8 ">{slide.title}</h2>
                                <h2 className={`display text-center md:text-left ${slide.textColor}`}>{slide.subTitle}</h2>
                                <p className="text-1 mt-8 pb-4 text-center md:text-left">{slide.description}</p>
                                <button className={`px-6 py-2 rounded-md text-white ${slide.buttonColor}`}>
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>

                        <div className='md:w-1/2'>
                            <Image src={slide.image} width={600} height={600} alt={slide.title} />
                        </div>
                    </section>
                </div>
            ))}

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 shadow-lg bg-opacity-50 rounded-full p-2 focus:outline-none"
            >
                <ChevronLeft className={`w-6 h-6 text-gray-800 `} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 shadow-lg  bg-opacity-50 rounded-full p-2 focus:outline-none"
            >
                <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>

            <div className="absolute md:-bottom-8 -bottom-[220px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-primaryExtraLight bg-opacity-50'
                            }`}
                    />
                ))}
            </div>
        </section>
    )
}

export default SliderClient