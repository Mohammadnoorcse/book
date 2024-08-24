import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-white py-10 mt-10 border-t">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-20">
        {/* Customer Care Section */}
        <div>
          <img
            src="https://www.rokomari.com/static/200/images/rokomari_logo.png"
            alt="Logo"
            className="h-12 mb-4"
          />
          <p className="text-gray-700 font-semibold">Customer Care</p>
          <p className="mt-2">
            <strong>Contact us at:</strong> <a href="#" className="text-blue-500">Live Chat</a>
          </p>
          <p className="mt-1">
            Send us an email: <a href="mailto:care@rokomari.com" className="text-blue-500">care@rokomari.com</a>
          </p>
          <p className="mt-4">
            <strong>To be a seller? Email Us</strong> <br />
            <a href="mailto:seller@rokomari.com" className="text-blue-500">seller@rokomari.com</a>
          </p>
          <p className="mt-4">
            <strong>Corporate Sales Only</strong> <br />
            01708166238 (Whatsapp Message) <br />
            <a href="mailto:sales@rokomari.com" className="text-blue-500">sales@rokomari.com</a>
          </p>
          <p className="text-gray-500 text-sm">
            (E.g. Pharmaceuticals Banks, Insurances & other Corporate Houses)
          </p>
          <p className="mt-4">
            <strong>Retailer Only</strong> <br />
            01708166185 (Whatsapp Message) <br />
            <a href="mailto:wholesale@rokomari.com" className="text-blue-500">wholesale@rokomari.com</a>
          </p>
          <p className="mt-4">2/1/E, Eden Center, Motijheel, Dhaka-1000</p>
          <p className="mt-4 flex items-center space-x-2">
            <span>📧</span>
            <a href="mailto:admin@rokomari.com" className="text-blue-500">admin@rokomari.com</a>
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="font-semibold text-gray-700 mb-3">Home</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Books</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Electronics</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Accessories</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Gift Voucher</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Stationery</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700 mb-3">Shop by</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Book Category</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Electronics Category</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Boi Mela 2024</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Islamic Book</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Pre Order</a></li>
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-gray-700 mb-3">Support</h2>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Order Track</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Contact Us</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Find My Product</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Customer FAQ</a></li>
            <li><a href="#" className="text-gray-600 hover:text-blue-500">Help Desk</a></li>
          </ul>
        </div>
      </div>

      {/* Policies and Social Media */}
      <div className="container mx-auto mt-8 flex flex-col md:flex-row justify-between items-center px-4 lg:px-20">
        {/* Policies */}
        <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-4">
          <a href="#" className="text-gray-600 hover:text-blue-500">Terms of Use</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Privacy Policy</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Happy Return Policy</a>
          <a href="#" className="text-gray-600 hover:text-blue-500">Refund Policy</a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Facebook_Logo_%282019%29.png" alt="Facebook" className="h-6" /></a>
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/8/80/LinkedIn_Logo_2019.png" alt="LinkedIn" className="h-6" /></a>
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="h-6" /></a>
          <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/YouTube_icon_%282013-2017%29.png" alt="YouTube" className="h-6" /></a>
        </div>

        {/* App Links */}
        <div className="mt-4 md:mt-0 flex space-x-4 items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6d/App_Store_%28iOS%29.svg" alt="App Store" className="h-8" />
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="container mx-auto mt-8 px-4 lg:px-20 text-center text-gray-500">
        <p>© 2012-2024 Rokomari.com</p>
      </div>
    </footer>
    </div>
  )
}

export default Footer
