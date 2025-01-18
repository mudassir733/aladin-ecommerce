'use client';

import React from 'react';
import HeaderSecnd from '@/components/Header_secnd/HeaderSecnd';
import StepIndicator from '@/components/SteepIndicator/SteepIndicator';
import OrderSummary from '@/components/Order_Summary/OrderSummary';


const AddressForm = () => {

  return (
    <form className="flex flex-col gap-4 text-gray-500 w-1/2">

      <label htmlFor="email">
        Email Address
      </label>

      <input id="email" name="email"
        type="email"
        required className="border-2 border-gray-400 rounded-md p-2 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm">
      </input>

      <div className="flex justify-between gap-3">
        <div className="flex flex-col w-1/2">
          <label htmlFor="firstName">
            First Name
          </label>

          <input id="firstName" name="firstName" type="text" className=" border-2 border-gray-400 rounded-md p-2 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm">
          </input>
        </div>

        <div className="flex flex-col w-1/2" >
          <label htmlFor="lastName">
            Last Name
          </label>
          <input id="lastName" name="lastName" type="text" className=" border-2 border-gray-400 rounded-md p-2 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm">
          </input>
        </div>

      </div>

      <label htmlFor="address">
        Address
      </label>
      <input id="address" name="address" type="text" className=" border-2 border-gray-400 rounded-md p-2 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm">
      </input>

      <div className="flex justify-between gap-3">
        <div className="flex flex-col w-1/2">
          <label htmlFor="city">
            City
          </label>

          <input id="city" name="city" type="text" className=" border-2 border-gray-400 rounded-md p-2 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm">
          </input>
        </div>

        <div className="flex flex-col w-1/2">
          <label htmlFor="state">
            State
          </label>

          <input id="state" name="state" type="text" className=" border-2 border-gray-400 rounded-md p-2 focus:border-teal-500 focus:outline-none focus:ring-teal-500 sm:text-sm">
          </input>
        </div>
      </div>

      <label htmlFor="zipCode">
        Zip Code
      </label>

      <input id="zipCode" name="zipCode" type="tel" className=" border-2 border-gray-400 rounded-md p-2 focus:border-teal-500 w-1/2 focus:outline-none focus:ring-teal-500 sm:text-sm">

      </input>
      <label htmlFor="phoneNumber">
        Phone Number
      </label>
      <input id="phoneNumber" name="phoneNumber" type="text" className=" border-2 border-gray-400 rounded-md p-2 focus:border-teal-500 w-1/2 focus:outline-none focus:ring-teal-500 sm:text-sm">
      </input>

    </form>
  )
};



export default function AddressPage() {
  return (
    <>
      <HeaderSecnd />
      <div className="min-h-screen  flex flex-col">
        <StepIndicator step="address" />
        <div className="w-[90%] mx-auto flex justify-around py-8 px-4">
          <AddressForm />
          <OrderSummary />
        </div>
      </div>
    </>
  );
}

