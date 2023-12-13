import img1 from "../../public/assets/images/homeCarousel/1.jpg"
import img2 from "../../public/assets/images/homeCarousel/2.jpg"
import img3 from "../../public/assets/images/homeCarousel/3.jpg"
import img4 from "../../public/assets/images/homeCarousel/4.jpg"
const Banner = () => {
    return (
        <div className="">
            <div className="carousel h-3/5 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className=" w-full" />

                    <div className="absolute  w-full space-y-2.5 top-0 left-0  pl-[5rem] gap-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                        <h1 className="text-white pt-52 w-96 text-6xl font-bold ">Affordable Price For Car Servicing</h1>
                        <p className="text-white w-96 ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-error mr-5">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-end  bottom-0 -translate-y-1/2 left-5 right-5  gap-3">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">

                    <img src={img2} className=" w-full" />
                    <div className="absolute  w-full space-y-2.5 top-0 left-0  pl-[5rem] gap-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                        <h1 className="text-white pt-52 w-96 text-6xl font-bold ">Affordable Price For Car Servicing</h1>
                        <p className="text-white w-96 ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-error mr-5">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-end  bottom-0 gap-3 -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className=" w-full" />
                    <div className="absolute  w-full space-y-2.5 top-0 left-0  pl-[5rem] gap-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                        <h1 className="text-white pt-52 w-96 text-6xl font-bold ">Affordable Price For Car Servicing</h1>
                        <p className="text-white w-96 ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-error mr-5">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-end  bottom-0 gap-3 -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className=" w-full" />
                    <div className="absolute  w-full space-y-2.5 top-0 left-0  pl-[5rem] gap-3 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] h-full">
                        <h1 className="text-white pt-52 w-96 text-6xl font-bold ">Affordable Price For Car Servicing</h1>
                        <p className="text-white w-96 ">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div>
                        <button className="btn btn-error mr-5">Discover More</button>
                        <button className="btn btn-outline btn-error">Latest Project</button>
                        </div>
                        
                    </div>
                    <div className="absolute flex justify-end  bottom-0 gap-3 -translate-y-1/2 left-5 right-5 ">
                        <a href="#slide3" className="btn btn-circle ">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;