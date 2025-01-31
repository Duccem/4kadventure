interface Testimonial {
    text: string
    author: string
    date: string
    location: string
}

const testimonials: Testimonial[] = [
    {
        text: "This could, hands down, be the most seamless and well-organized travel experience I've ever had. The professionalism throughout was exceptional. I recommend Scott Dunn to anyone seeking an exceptional travel experience!",
        author: "AHR",
        date: "January 2025",
        location: "Travelled to France",
    },
    {
        text: "We had a wonderful time and the holiday met with our expectations. Staff and service levels were excellent. All inclusive package with 5 adults worked really well. Another successful holiday using the Scott Dunn team.",
        author: "DL",
        date: "October 2024",
        location: "Travelled to Maldives",
    },
    {
        text: "Scott Dunn were recommended to us by a friend who has used you before & raved about you. We had the most amazing holiday, everything was planned so well, the guides and drivers were brilliant & really ensured that we were well looked after.",
        author: "TM",
        date: "October 2024",
        location: "Travelled to Japan",
    },
    {
        text: "This was a holiday of a lifetime for us. We knew about the big things that were planned but it was the minor details that made it so enjoyable. The local knowledge was greatly appreciated, the choice of hotels exceeded our expectations.",
        author: "CS",
        date: "October 2024",
        location: "Travelled to Canada",
    },
]

export default testimonials;