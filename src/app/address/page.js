'use client';

import React from "react";
import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd'


export default function AddressPage() {
  return (
    <>
      <HeaderSecnd/>

      <div className="min-h-screen bg-gray-100 flex flex-col">
        {/* Step Indicator */}
        <div className="w-full bg-white shadow-sm py-4">
          <div className="max-w-7xl mx-auto flex justify-center space-x-4  items-baseline">
            <div className="text-sm font-medium text-gray-500 flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-600 text-white">1</div>
              <span className="mt-2">Address</span>
            </div>
            <div className="w-6 border-t-2 border-gray-300 flex t-10" ></div>
            <div className="text-sm font-medium text-gray-500 flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300">2</div>
              <span className="mt-2">Shipping</span>
            </div>
            <div className="w-6 border-t-2 border-gray-300"></div>
            <div className="text-sm font-medium text-gray-500 flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300">3</div>
              <span className="mt-2">Payment</span>
            </div>
            <div className="w-6 border-t-2 border-gray-300"></div>
            <div className="text-sm font-medium text-gray-500 flex flex-col items-center">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-300">4</div>
              <span className="mt-2">Review</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-[90%] mx-auto flex  items-start py-8 px-4  ">

          {/* Address Form */}
          <div className="w-full lg:w-4/5 bg-white p-6 rounded-md shadow-md">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Shipping Address</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                    State
                  </label>
                  <input
                    id="state"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="zip" className="block text-sm font-medium text-gray-700">
                    Zip Code
                  </label>
                  <input
                    id="zip"
                    type="text"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                />
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-2/5 bg-white p-6 rounded-md shadow-md lg:ml-6 mt-6 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <img src="/path/to/image.jpg" alt="Item 1" className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <p>Lorem Ipsum at state star that</p>
                  <p className="text-gray-600 text-sm">Brand: Aladdin</p>
                  <p className="font-bold">$39.99</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <img src="/path/to/image.jpg" alt="Item 2" className="w-16 h-16 object-cover rounded-md" />
                <div>
                  <p>Lorem Ipsum at state star that</p>
                  <p className="text-gray-600 text-sm">Brand: Aladdin</p>
                  <p className="font-bold">$39.99</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <p className="flex justify-between">
                <span>SUBTOTAL</span> <span>$89.99</span>
              </p>
              <p className="flex justify-between">
                <span>Shipping</span> <span>$12.87</span>
              </p>
              <p className="flex justify-between font-bold">
                <span>Order Total</span> <span>$102.86</span>
              </p>
            </div>
            <button className="mt-6 w-full bg-teal-600 text-white py-2 rounded-md">
              Continue
            </button>
            <p className="mt-4 text-sm text-gray-600 text-center">
              <a href="/return-policy" className="underline">
                RETURN POLICY
              </a>{" "}
              |{" "}
              <a href="/help" className="underline">
                HELP
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
