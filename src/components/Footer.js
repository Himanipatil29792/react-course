import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <div class="footer bg-gray-950 sm:px-0 lg:px-40 p-4 text-gray-300 mt-5">
    <div class="flex justify-around flex-wrap mt-10">
    <div class="">
    <img  className="logo w-24"
            alt="logo"
            src={LOGO_URL} />
    <span class="text-gray-400 font-semibold my-2 mt-3">@copyright 2024</span>
    <p class="text-gray-400 font-semibold mt-3">Designed &amp; Developed by</p>
    <a href="https://www.linkedin.com/in/himani-jayesh-patil-959465a0/" target="_blank"> 
    <p class="font-semibold text-orange-600">Himani Patil</p>
    </a>
   
    </div>
    <div class=""><p class="font-bold text-lg mb-8">Company</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Home</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">About Us</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Careers</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Team</p>
    </div>
    <div class="">
    <p class="font-bold text-lg mb-8">Contact us</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Help &amp; Support</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Partner with us</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Ride with us</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Tearms &amp; Condition</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Privacy Policy</p></div>
    <div class=""><p class="font-bold text-lg mb-8">We deliver to:</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Mumbai</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Pune</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Bangalore</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Hyderabad</p>
    <p class="my-3 cursor-pointer text-gray-400 font-semibold">Delhi</p>
    </div>
    </div>
    </div>
  )
}

export default Footer;