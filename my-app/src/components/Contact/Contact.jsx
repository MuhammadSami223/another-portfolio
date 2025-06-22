import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="md:py-20 md:px-20 px-0 bg-[#060606] font-[Rajdhani] text-white">
        <div className="skill-container px-10 py-9  space-y-10 bg-[#141414] rounded-4xl flex flex-col lg:flex-row">
            {/* contact-left */}
            <div className="contact-left mt-20">
                <h2 className="md:text-5xl text-[42px] leading-12 font-bold w-[350px] md:w-[500px]">Let’s work brilliantly together!</h2>

                <div className="info flex gap-4 mt-5">
                    <div className="icon border-2 rounded-full w-[40px] h-[40px] text-center pt-2 mt-1 text-[#FDC448]">
                     <ion-icon name="mail-unread-outline"></ion-icon>
                     </div>
                    <div className="content">
                        <p className="text-gray-400 font-bold">E-mail:</p>
                        <h4 className="text-lg font-bold">a.sami02234@gmail.com</h4>
                    </div>
                </div>
                
                <div className="info flex gap-4 mt-5">
                    <div className="icon border-2 rounded-full w-[40px] h-[40px] text-center pt-2 mt-1 text-[#FDC448]">
                    <ion-icon name="location-outline"></ion-icon>
                     </div>
                    <div className="content">
                        <p className="text-gray-400 font-bold">Location:</p>
                        <h4 className="text-lg font-bold">Karachi, Pakistan</h4>
                    </div>
                </div>
                <div className="info flex gap-4 mt-5">
                    <div className="icon border-2 rounded-full w-[40px] h-[40px] text-center pt-2 mt-1 text-[#FDC448]">
                <ion-icon name="call-outline"></ion-icon>
                     </div>
                    <div className="content">
                        <p className="text-gray-400 font-bold">Contact:</p>
                        <h4 className="text-lg font-bold">+92 3412305655</h4>
                    </div>
                </div>

            </div>
            {/* contact-right */}
            <div className="contact-right">
                <h2 className="text-5xl font-bold">GET IN TOUCH</h2>
                <div className="contact-form mt-6">
                    <input type="text" placeholder="Your Name"  className="md:w-[250px] w-[340px] h-[60px] border-1 rounded-xl mb-8  p-3"/>
                    <input type="text" placeholder="Phone Number" className="md:w-[250px] w-[340px] h-[60px] border-1 rounded-xl mb-8  p-3 lg:ml-5"/>
                    <input type="text" placeholder="Your Email" className="md:w-[250px] w-[340px] h-[60px] border-1 rounded-xl mb-8  p-3"/>
                    <input type="text" placeholder="Subject" className="md:w-[250px] w-[340px] h-[60px] border-1 rounded-xl mb-8  p-3 lg:ml-5"/>
                    <input type="text" placeholder="Message" className="md:w-[524px] w-[340px]  h-[170px] border-1 rounded-xl mb-8  p-3"/>
                      <button className="bg-yellow-500 hover:bg-transparent hover:border-2 cursor-pointer text-white px-10 md:px-10 lg:px-12 py-3 font-bold rounded-4xl lg:text-lg md:text-balance transition duration-300 overflow-hidden">
                Send Message
              </button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
