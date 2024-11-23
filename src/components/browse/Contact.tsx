import { Link } from 'react-router-dom';
import Logo from '../../assets/svg/logoIcon.svg';
import TextTicker from '../ui/text-picker';
import { contactLink } from '@/util/icon';
import { useConvexAuth } from 'convex/react'
import FormRequest from '../shared/FormRequest'
import { FaSpinner } from 'react-icons/fa'

export default function Contact() {

	const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <main className="font-roboto max-w-[1350px] relative mx-auto overflow-hidden">

      <div className="max-w-[1150px] mx-auto z-30 px-6 py-[60px] md:py-20 lg:py-24 flex flex-col md:flex-row gap-16 md:gap-32">

        <div className="w-full max-w-lg mx-auto md:w-1/3 text-center md:text-left">
          <Link to="/" className="flex items-center gap-2 text-gray-900 dark:text-white">
            <img loading='lazy' className="w-10" src={Logo} alt="Icon of JasX Brand" />
            <span className="text-xl font-space font-bold">JasX</span>
          </Link>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
            Take control of your tasks with a platform built for individuals.
            Stay organized, set clear goals, and track progress all in one place.
          </p>
          <p className="mt-4 text-lg lg:text-xl font-medium text-black dark:text-white">
            Trusted by over +<TextTicker value={1000000} /> users
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 flex-grow">
          <div className="w-full md:w-1/2 mx-auto max-w-lg">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Connect with us</h2>
            <ul className="space-y-2">
              {contactLink.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.url}
                    className="text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            {isLoading && <FaSpinner className='animate-spin text-blue-500 text-3xl'/>}

						{isAuthenticated && !isLoading && (
              <FormRequest />
						)}
          </div>
        </div>
      </div>
    </main>
  );
}