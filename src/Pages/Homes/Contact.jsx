
const Contact = () => {
    return (
        <div>
            <div className=" ">
            <div>
            <form >
                <div className="flex justify-center py-16 items-center flex-col bg-gradient-to-r from-violet-500 to-violet-50 mt-16">
                    
                    <div className="text-center">
                        <p className="text-lg uppercase font-semibold">Please Contact Us</p>
                        <h1 className="lg:text-4xl md:text-4xl text-3xl font-bold text-white pb-5 pt-1 w-9/12 m-auto">Give Me Feedback And Ask A Question</h1>
                        <div className="border-b-2 mb-7 w-16 m-auto"></div>
                    </div>
                    <div className="flex gap-5 lg:flex-row md:flex-row flex-col justify-center mt-6">
                        <div className="form-control">
                        <label className="">
                        <input type="text" name="name" placeholder="Name*" className="input lg:w-72 w-auto rounded-none" required />
                        </label>
                        </div>
                        <div className="form-control">
                        <label className="">
                        <input type="email" name="email" placeholder="Email*" className="input lg:w-72 w-auto rounded-none" required />
                        </label>
                        </div>
                    </div>
                    <div className="form-control">
                        <label className=" mt-9">
                        <textarea name="" id="" cols="30" rows="5" placeholder="Message*" className="p-5 lg:pr-80 md:pr-10"></textarea>
                        </label>
                        </div>
                   <div className=" pb-5">
                    <input type="submit" value="Send Message" className="py-3 bg-white text-violet-600 px-8 rounded-lg font-bold mt-8" />
                    </div>          
                </div>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Contact;