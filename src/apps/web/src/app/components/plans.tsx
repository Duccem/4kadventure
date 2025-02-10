
export default function Plans() {
    return (
        <div className="flex flex-row justify-center items-center mx-auto pb-14 max-w-full px-5">
            <div className="flex flex-col justify-center items-center w-full px-8 h-[600px] relative overflow-hidden rounded-xl"
                style={{
                    backgroundImage: `url(https://images.mnstatic.com/90/41/9041ea99332ba68e34149329ddc8ae81.jpg?width=2048)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
                <div className="absolute inset-0 transition-transform duration-300 hover:scale-110"
                    style={{
                        backgroundImage: `url(https://images.mnstatic.com/d0/ff/d0ffda7ccd2988cc0a07485a2819b9ed.jpg?width=2048)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                </div>
                <div className="flex bg-[#E6E6FA] flex-col rounded-2xl opacity-90 justify-center items-center max-w-2xl p-20 relative z-10">
                    <a href="" className="text-2xl font-bold pb-10">Plan your luxury holiday today</a>
                    <div className="m-5">
                        <p>Craving a holiday in utter luxury? Our team of travel specialists are waiting to help you plan your tailor-made trip, so get in touch with us today.</p>
                    </div>
                </div>
            </div>
            
        </div>
        
    );
};