import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {

  const [regEmail, setRegEmail] = useState('')
  const navigate = useNavigate()

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleRegisterEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    
    if (!isValidEmail(regEmail)) {
      alert('Please enter a valid email address.');
    } else {
      navigate('/login', { state: { email: regEmail } });
    }
  };

  return (
    <header className="dark:bg-[#111827] bg-white w-full">
      <div className="2xl:w-[1400px] flex items-center justify-between xl:w-[1200px] m-auto px-[15px] md-[75px] xl:px-[100px] pt-[150px] md:pt-[200px] pb-[100px] md:pb-[100px] gap-[50px] lg:gap-[100px] 2xl:gap-0">
        <div className="w-full sm:w-[80%] md:w-[70%] xl:w-1/2">
          <div className="border-black items-center dark:border-white border-opacity-30 duration-100 delay-150 border-[1px] inline-block px-3 py-2 rounded-3xl bg-[#E5E7EB] dark:bg-darkBox">
            <span className="text-white text-base mr-2 border-none bg-btnBlue inline-block px-3 rounded-xl">
              New
            </span>

            <p className="text-black dark:text-white text-base inline-block">
              Write, plan and organize
            </p>
          </div>

          <h1 className="mt-5 2xl:w-[80%] text-black dark:text-gray-300 text-4xl md:text-5xl 1200px:text-6xl font-mon font-bold">
            All-of-them in one space
          </h1>

          <p className="dark:text-gray-500 2xl:w-[80%] my-1 text-black text-sm 1200px:text-lg">
            Get everyone working in a single platform designed to manage any
            type of work.
          </p>

          <div className="mt-[30px]">
            <AlertDialog>
              <AlertDialogTrigger>
                <button
                  className="bg-gradient-to-r from-blue-500 to-pink-500 px-[20px] py-[13px] rounded-md text-lg 1200px:text-lg font-bold text-white"
                >
                  Get Started
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Sign up for FREE</AlertDialogTitle>
                  <AlertDialogDescription>
                    <p className='text-sm xxsm:text-lg text-blue-700 font-mono text-center'>Start using TaskPulse in seconds!</p>

                    <form className="mt-4">
                      <div className="relative mt-2">
                        <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 512"><path fill="#96a9b2" d="M511.824 425.007c1.941-5.245-220.916-173.519-220.916-173.519c-27.9-20.589-42.574-20.913-70.164 0c0 0-222.532 168.138-220.659 173.311l-.045.038c.023.045.06.076.091.117a48.5 48.5 0 0 0 8.119 14.157c1.473 1.786 3.248 3.282 4.955 4.837l-.083.064c.136.121.317.177.453.298c7.235 6.454 16.359 10.634 26.495 11.827c.159.019.287.102.446.121h.612c1.541.147 3.006.517 4.584.517h420.721c20.717 0 38.269-13.028 45.241-31.291c.083-.136.211-.234.287-.374z" /><path fill="#b9c5c6" d="M256.133 232.176L1.216 423.364V152.515c0-26.4 21.397-47.797 47.797-47.797h414.24c26.4 0 47.797 21.397 47.797 47.797v270.849z" /><path fill="#edece6" d="m4.189 135.896l217.645 170.949c27.47 20.271 41.918 20.591 69.083 0L508.22 136.167c-3.77-6.834-9.414-12.233-15.869-16.538l2.989-2.342c-7.295-6.641-16.62-10.946-26.971-12.058l-424.455.015c-10.322 1.097-19.662 5.417-26.942 12.043l2.967 2.313c-6.38 4.245-11.972 9.551-15.75 16.296" /><path fill="#dce2e2" d="M4.118 136.254C2.207 141.419 221.63 307.099 221.63 307.099c27.47 20.271 41.918 20.591 69.083 0c0 0 219.103-165.546 217.258-170.64l.045-.037c-.022-.045-.059-.074-.089-.115a47.7 47.7 0 0 0-7.994-13.939c-1.45-1.759-3.198-3.231-4.878-4.763l.082-.063c-.134-.119-.312-.175-.446-.294c-7.124-6.354-16.107-10.47-26.086-11.645c-.156-.019-.283-.1-.439-.119h-.602c-1.517-.145-2.96-.509-4.514-.509H48.81c-20.398 0-37.68 12.828-44.543 30.809c-.082.134-.208.231-.283.368z" /><path fill="#597b91" d="M291.401 154.645h-38.632a6.155 6.155 0 0 0-6.155 6.155v21.722a6.155 6.155 0 0 0 6.155 6.155h31.415a6.155 6.155 0 0 1 6.155 6.155v11.616a6.155 6.155 0 0 1-6.155 6.155h-31.415a6.155 6.155 0 0 0-6.155 6.155v23.578a6.155 6.155 0 0 0 6.155 6.155h41.316a6.155 6.155 0 0 1 6.155 6.155v12.441a6.155 6.155 0 0 1-6.155 6.155h-75.76a6.155 6.155 0 0 1-6.155-6.155V136.461a6.155 6.155 0 0 1 6.155-6.155h74.81c3.749 0 6.627 3.322 6.092 7.033l-1.733 12.028a6.156 6.156 0 0 1-6.093 5.278" /></svg>
                        </span>

                        <input
                          className="w-full pl-[50px] pr-5 py-3 xxsm:py-4 font-medium text-md text-gray-200 bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-mono placeholder:text-white text-md"
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Enter your email"
                          onChange={(e) => setRegEmail(e.target.value)}
                        />
                      </div>

                      <div className='flex items-center justify-end gap-2 mt-3'>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>

                        <button onClick={handleRegisterEmail} className='w-[100px] text-white h-10 px-4 py-2 rounded-md border-none bg-gray-900'>Continue</button>

                        
                      </div>
                    </form>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>

          </div>
        </div>

        <div className="w-1/2 hidden laptop:flex justify-end">
          <iframe
            width="560"
            className="rounded-2xl"
            height="315"
            src="https://www.youtube.com/embed/gJCS1gqk8ME?si=gG_gYHk4dt82jytA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </header>
  )
}