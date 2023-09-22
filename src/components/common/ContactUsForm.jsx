import React from "react";
import CountryCode from "../../data/countrycode.json";

const ContactUsForm = () => {
  return (
    <div>
      <form>
        <div className="flex flex-col gap-14">
          <div className="flex gap-5">
            {/* firstName */}
            <div className="flex flex-col">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter first name"
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              />
              <span>Please enter Your name</span>
            </div>

            {/* lastName */}
            <div className="flex flex-col">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                placeholder="Enter Last name"
              />
            </div>
          </div>

          {/* email */}
          <div className="flex flex-col">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              placeholder="Enter email Address"
            />
            <span>Please enter your email address</span>
          </div>

          {/* phoneNo */}
          <div className="flex flex-col">
            <label htmlFor="phonenumber">Phone Number</label>

            <div className="flex flex-row gap-1">
              {/* dropdown */}

              <select
                name="dropdown"
                id="dropdown"
                className="bg-slate-600 w-[80px] rounded-[0.5rem]"
              >
                {CountryCode.map((element, index) => {
                  return (
                    <option key={index} value={element.code}>
                      {element.code} - {element.country}
                    </option>
                  );
                })}
              </select>

              <input
                type="number"
                name="phonenumber"
                id="phonenumber"
                placeholder="12345 67890"
                className="rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5  w-[calc(100%-90px)]"
              />
            </div>
          </div>

          {/* message */}
          <div className="flex flex-col">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
              rows="7"
              placeholder="Enter Your message here"
            />
            <span>PLease enter your message.</span>
          </div>

          <button
            type="submit"
            className="rounded-md bg-yellow-50 text-center px-6 text-[16px] font-bold text-black"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
