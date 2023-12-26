import React from 'react'
import img from './img.jpg';
import img1 from './img1.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
    const showToast = (message) => {
        toast(message, { position: "top-right" });
      };
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 py-4 flex justify-between items-center px-8">
        <p className="text-white font-bold text-3xl">Advocate</p>
        <div className="flex space-x-4">
          <button className="hover:bg-blue-500 hover:text-white hover:rounded-full transition duration-300 ease-in-out px-4 py-2 border border-blue-500"
          onClick={() => showToast("Dial/Whatsapp @ 9440766984")}>
            Contact
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="flex-1 container mx-auto my-4">
        {/* Centered content */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center">
            <div className='flex flex-col '>
            <p className='text-white text-xl font-semibold'>
                Anuradha Guruzala
                <span className='text-sm italic ml-0.5'> B.A, L.L.B</span>
            </p>
            <div className="flex items-center justify-between mb-8">
              <img 
                src={img1}
                alt="Profile"
                className="w-40 h-40 rounded-full object-cover bg-gray-200"
              />
              
              <div className="flex space-x-4 ml-4">
                <button
                  className="text-white font-medium hover:bg-blue-500 hover:text-white hover:rounded-full transition duration-300 ease-in-out px-6 py-3 border border-blue-500 rounded-full"
                  onClick={() => showToast("The fees for the Advice is 500")}
                >
                  Advice
                </button>
                <button className="text-white font-medium hover:bg-blue-500 hover:text-white hover:rounded-full transition duration-300 ease-in-out px-6 py-3 border border-blue-500 rounded-full"
                onClick={() => showToast("The fees for the Case starts from 5000, please click contact")}>
                  Case TakeUp
                </button>
              </div>
            </div>
            <div className='text-white font-normal'>
            <div>
              <span className='font-semibold'>Experience: </span> 20 years
              <span className='font-semibold'> | Specialization: </span> Civil, Criminal, Family, Property, Corporate
            </div>
            <div>
              <span className='font-semibold'> Languages: </span> Telugu, English, Hindi
              <span className='font-semibold'> | Location: </span> <a href='https://maps.app.goo.gl/U8Fk9pmGpTaC59qcA' target='_blank' className='text-blue-200'>Click Here!</a>
            </div>
            <div>
          <span className='font-semibold animate-colorChange'> Consultation post payment only </span>
        </div>
            </div>
            </div>
            {/* Your professional content goes here */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-center items-center bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
        <span className='font-semibold'> Locations: </span> High Court of Andhra Pradesh, Guntur district Courts
        </div>
      </footer>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
  
}

export default Page