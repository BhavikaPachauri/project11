import React from 'react'
import {
  FaApple,
  FaGooglePlay,
  FaPhoneAlt,
  FaYoutube,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn
} from 'react-icons/fa';

function Footer() {
  return (
    <>
     <section className="bg-[#2e2e2e] text-gray-200 px-6 py-12">
          <div className="container">
               <div className="max-w-7xl mx-auto grid md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Left Column */}
        <div>
          <h1 className="text-2xl font-semibold mb-3">unacademy</h1>
          <p className="text-sm mb-4">
            Unacademy is democratising education, making it accessible to all. Join the revolution, learn on India’s largest learning platform.
          </p>
          <div className="flex gap-3 mb-6">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Apple_logo_black.svg" alt="App Store" className="w-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_2022_icon.svg" alt="Google Play" className="w-8" />
          </div>
          <hr className="border-gray-500 my-4" />
          <h3 className="font-semibold mb-1">Reach out to us</h3>
          <p className="text-sm mb-2">Get your questions answered about learning with Unacademy.</p>
          <div className="flex items-center text-sm">
            <FaPhoneAlt className="mr-2 text-green-400" />
            <span className="font-medium">+91 8585858585</span>
          </div>
        </div>

        {/* Column Group 1 */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>About Us</li>
              <li>Shikshodaya</li>
              <li>Careers</li>
              <li>Blogs</li>
              <li>Privacy policy</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Help & support</h4>
            <ul className="space-y-1">
              <li>User Guidelines</li>
              <li>Site Map</li>
              <li>Refund Policy</li>
              <li>Takedown Policy</li>
              <li>Grievance Redressal</li>
            </ul>
          </div>
        </div>

        {/* Column Group 2 */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <span className="bg-gray-700 p-1 rounded">📱</span> Learner app
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-blue-500 p-1 rounded">🎓</span> Educator app
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-green-500 p-1 rounded">👨‍👩‍👧‍👦</span> Parent app
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Popular goals</h4>
            <ul className="space-y-1">
              <li>IIT JEE</li>
              <li>UPSC</li>
              <li>SSC</li>
              <li>CSIR UGC NET</li>
              <li>NEET UG</li>
            </ul>
          </div>
        </div>

        {/* Column Group 3 */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Unacademy Centre</h4>
            <ul className="space-y-1">
              <li>Kota IIT JEE</li>
              <li>Kota NEET UG</li>
              <li>Kota Foundation</li>
              <li>Delhi UPSC</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Study material</h4>
            <ul className="space-y-1">
              <li>UPSC Study Material</li>
              <li>NEET UG Study Material</li>
              <li>CA Foundation Study Material</li>
              <li>JEE Study Material</li>
              <li>SSC Study Material</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-12 border-t border-gray-600 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <p className="mb-4 md:mb-0">© 2025 Sorting Hat Technologies Pvt Ltd</p>
        <div className="flex gap-4 text-lg">
          <FaYoutube />
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>

          </div>
          </section>
    </>
  )
}

export default Footer