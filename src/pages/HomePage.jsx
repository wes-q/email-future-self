import { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import Navbar from "../components/Navbar";

const HomePage = () => {
    // DeliverIn guide - how many days to add from current day
    // 6 months = 180 days (default)
    // 1 year = 360 days
    // 3 years = 1080 days
    // 5 years = 1800 days
    // 10 years = 3600 days
    const [deliverIn, setDeliverIn] = useState(180);
    const [audience, setAudience] = useState("private");
    const [isFocused, setIsFocused] = useState(false);

    const selectedDeliverInCSS = (value) => `transition-colors duration-300 rounded-md ${deliverIn === value ? "bg-white text-primary" : "bg-primary text-secondary hover:bg-primaryDark"}`;
    const selectedAudienceCSS = (value) => `transition-colors duration-300 rounded-md ${audience === value ? "bg-white text-primary" : "bg-primary text-secondary hover:bg-primaryDark"}`;

    return (
        <div className="flex flex-col h-screen">
            <Navbar></Navbar>
            <div className="p-6 bg-primary flex flex-col flex-grow">
                <h2 className="text-6xl font-semibold mb-8 text-white">Write a letter to your future self</h2>
                <div className="text-secondary text-xl">
                    <p className="mb-4">
                        <span className="text-white font-bold">Write. </span>Pick a receiving date. <span className="text-white font-bold">Send. </span>Verify. That’s it 😊
                    </p>
                    <p className="mb-4">
                        Your letter is <span className="text-white font-bold">safe </span>with us - we’ve sent over <span className="text-white font-bold">20 million letters </span>in 20 years!
                    </p>
                </div>
                <div className="flex flex-grow bg-primary w-full rounded-2xl gap-10">
                    <textarea className="flex-grow p-10 rounded-2xl resize-none focus:outline-none border focus:ring-secondary focus:ring-4 text-xl" placeholder="Dear FutureMe"></textarea>
                    <div className="flex flex-col w-[450px] text-secondary justify-between">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1">
                                <div className="flex justify-between">
                                    <span>Deliver in</span>
                                    <span>Or choose a date</span>
                                </div>
                                <div className="flex gap-1">
                                    <button className={`px-2 py-1 ${selectedDeliverInCSS(180)}`} onClick={() => setDeliverIn(180)}>
                                        6 months
                                    </button>
                                    <button className={`px-2 py-1 ${selectedDeliverInCSS(360)}`} onClick={() => setDeliverIn(360)}>
                                        1 year
                                    </button>
                                    <button className={`px-2 py-1 ${selectedDeliverInCSS(1080)}`} onClick={() => setDeliverIn(1080)}>
                                        3 years
                                    </button>
                                    <button className={`px-2 py-1 ${selectedDeliverInCSS(1800)}`} onClick={() => setDeliverIn(1800)}>
                                        5 years
                                    </button>
                                    <button className={`px-2 py-1 ${selectedDeliverInCSS(3600)}`} onClick={() => setDeliverIn(3600)}>
                                        10 years
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex">Select your audience</div>
                                <div className="flex gap-2">
                                    <button className={`px-2 py-1 ${selectedAudienceCSS("private")}`} onClick={() => setAudience("private")}>
                                        Private
                                    </button>
                                    <button className={`px-2 py-1 ${selectedAudienceCSS("public")}`} onClick={() => setAudience("public")}>
                                        Public, but anonymous
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex">Make sure you get your letter</div>
                                <div className={`flex items-center justify-start bg-white rounded-md ${isFocused ? "ring-4 ring-secondary" : ""}`}>
                                    <IoMdMail className="w-14 h-6" />
                                    <input className="w-full py-2 rounded-md outline-none" type="text" placeholder="Please enter an email" onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} />
                                </div>
                            </div>
                            {/* <div className="flex flex-col gap-1">
                        <div className="flex">Pick your style</div>
                        </div> */}
                            <div className="flex flex-col gap-1">
                                <span className="text-xs tracking-wider">You will receive a confirmation email - please make sure your email address is correct! By writing a letter and signing up for FutureMe you agree to the Terms of use</span>
                            </div>
                        </div>
                        <div>
                            <button className="w-full h-20 bg-gradient-to-br from-green-400 to-orange-400 rounded-lg text-white text-2xl">Send to the Future</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
