import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import frameImg from "../../assets/Images/frame.png";
import image from "../../assets/Images/login.webp";
function LoginForm() {
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AppContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });


  const { email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  // formData
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // Should go to dashboard page
    setIsLoggedIn(true);
    navigate("/dashboard");
    console.log(formData);
  };

  return (
    <div className="flex justify-around w-full mt-[100px]">
      
        <form
          onSubmit={handleOnSubmit}
          className="mt-6 flex w-[30%] flex-col gap-y-4"
        >
          <label className="w-full">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Email Address <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="email"
              value={email}
              onChange={handleOnChange}
              placeholder="Enter email address"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
            />
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="password"
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-12 text-richblack-5"
            />

            <Link to="/forgot-password">
              <p className="mt-1 ml-auto max-w-max text-xs text-blue-100">
                Forgot Password
              </p>
            </Link>
          </label>
          <button
            type="submit"
            className="mt-6 rounded-[8px] bg-yellow-50 py-[8px] px-[12px] font-medium text-richblack-900"
          >
            Sign In
          </button>
        </form>
     
      <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
        <img
          src={frameImg}
          alt="Pattern"
          width={558}
          height={504}
          loading="lazy"
        />
        <img
          src={image}
          alt="Students"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 z-10"
        />
      </div>
    </div>
  );
}

export default LoginForm;
