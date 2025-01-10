import SliderClient from './SliderClient'

const slides = [
    {
        title: "Get the new",
        subTitle: "beauty buzz.",
        textColor: "text-[#18601E]",
        description: "The latest, greatest & freshest from your fave brands.",
        buttonText: "Shop Now",
        buttonColor: "bg-[#18601E]",
        image: "/slider1.svg",
        slideColor: "bg-[#18601E]",
    },
    {
        title: "The new year ",
        subTitle: "looks good on you.",
        textColor: "text-[#C4742F]",
        description: "Add vitamins & collagen to your supplement routine to keep it going strong.",
        buttonText: "Shop Now",
        buttonColor: "bg-[#C4742F]",
        image: "/slider2.svg",
    },
    {
        title: "Handy kitchen ",
        subTitle: "appliances.",
        textColor: "text-[#99715D]",
        description: "Discover top tools & gadgets to make easy & tasty 3 meals.",
        buttonText: "Shop Now",
        buttonColor: "bg-[#99715D]",
        image: "/slider3.svg",
    }
]

export default function Slider() {
    return (
        <>
            <SliderClient slides={slides} />
        </>
    )
}

