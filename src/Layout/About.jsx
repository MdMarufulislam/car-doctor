import person from "/public/assets/images/about_us/person.jpg";
import parts from "/public/assets/images/about_us/parts.jpg";

const About = () => {
    return (
        <div className=" mb-32 mt-8">
            <div className="hero-content relative flex-col lg:flex-row">
                <img src={person} className=" max-w-lg h-full rounded-lg shadow-2xl " />
                <img src={parts} className="max-w-sm rounded-lg shadow-2xl absolute mr-96 top-2/4 border-solid border-8 border-white" />
                <div className="ml-16">
                    <h1 className="text-[#FF3811] text-sm font-bold">About Us</h1>
                    <h1 className="text-5xl w-96 font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <p className="py-2">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn bg-red-600 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;