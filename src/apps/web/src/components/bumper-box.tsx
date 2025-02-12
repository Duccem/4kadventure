export default function BumperBox() {
    const prueba = "https://images.mnstatic.com/8b/ec/8becb65d0398be67e806c1cf54eccbb6.jpg?width=2048"
    return (
        <div className="flex flex-row justify-center items-center mx-auto">
            <div className="flex flex-col justify-center items-center w-1/2 px-8 py-32 h-[450px] relative overflow-hidden rounded-l-xl"
                style={{
                    backgroundImage: `url(${prueba})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="absolute inset-0 transition-transform duration-300 hover:scale-110"
                    style={{
                        backgroundImage: `url(${prueba})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                </div>
                <div className="flex bg-[#E6E6FA] flex-col rounded-2xl  justify-center items-center max-w-3xl p-20 relative z-10 opacity-85">
                    <a href="" className="font-serif text-2xl pb-10">Explorers Kids Clubs</a>
                    <div>
                        <p className="font-serif">We offer our iconic kids clubs in luxury family friendly resorts. Our price promise ensures that we offer our guests the best value at our Explorers partner hotels.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-1/2 px-8 py-32 h-[450px] relative overflow-hidden rounded-r-xl"
                style={{
                    backgroundImage: `url(https://images.mnstatic.com/33/a5/33a53d3163aaecf9b8e22f3c773575e8.jpg?width=2048)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="absolute inset-0 transition-transform duration-300 hover:scale-110"
                    style={{
                        backgroundImage: `url(https://images.mnstatic.com/33/a5/33a53d3163aaecf9b8e22f3c773575e8.jpg?width=2048)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                </div>
                <div className="flex bg-[#E6E6FA] rounded-2xl flex-col justify-center items-center max-w-3xl p-20 relative z-10 opacity-85">
                    <a href="" className="font-serif text-2xl pb-10">When to Go Where</a>
                    <div>
                        <p className="font-serif">Dreaming of a holiday but not sure where to go? Look no further than our monthly travel guide.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}