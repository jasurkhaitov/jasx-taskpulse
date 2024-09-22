import React, { useState, ChangeEvent, FormEvent, useEffect, useContext } from "react"
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa"
import { Link, useLocation, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import { MyGlobalContext } from '@/hooks/Context'

const Login: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { setUser, themeChange } = useContext(MyGlobalContext)

  useEffect(() => {
    document.title = "Login | TaskPulse"
  }, [])

  const [email, setEmail] = useState<string>(location.state?.email || "")
  const [password, setPassword] = useState<string>(location.state?.password || "")
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [emailFocus, setEmailFocus] = useState<boolean>(false)
  const [passwordFocus, setPasswordFocus] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<string>("")
  const [passwordError, setPasswordError] = useState<string>("")

  const handleTogglePassword = () => {
    setShowPassword(!showPassword)
  }

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const isValidPassword = (password: string) => {
    const passwordRegex = /^[A-Z][A-Za-z0-9_/@#\$&]{5,}$/
    return passwordRegex.test(password)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if (!isValidEmail(e.target.value)) {
      setEmailError("Please enter a valid email address.")
    } else {
      setEmailError("")
    }
  }

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value)
    if (!isValidPassword(e.target.value)) {
      setPasswordError(
        "Password must be at least 6 characters, start with an uppercase letter, and contain valid characters."
      )
    } else {
      setPasswordError("")
    }
  }

  const handleEmailFocus = () => setEmailFocus(true)
  const handleEmailBlur = () => setEmailFocus(false)

  const handlePasswordFocus = () => setPasswordFocus(true)
  const handlePasswordBlur = () => setPasswordFocus(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!isValidEmail(email)) {
      setEmailError("Please enter a valid email address.")
      return
    }

    if (!isValidPassword(password)) {
      setPasswordError(
        "Password must be at least 6 characters, start with an uppercase letter, and contain valid characters."
      )
      return
    }

    let userNameId = email.trim().indexOf("@")

    console.log(email.slice(0, userNameId));
    

    setUser(true)
    
    navigate('/documents', {state: {email: email, userName: email.slice(0, userNameId)}})
  }

  return (
    <div className={themeChange}>
      <Navbar />

      <div className={`flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900`}>
        <div className="bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-lg shadow-xl w-[90%] max-w-md">
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block mb-1 text-gray-600 dark:text-gray-300" htmlFor="email">
                Email
              </label>
              <div
                className={`relative flex items-center rounded-lg py-2 px-3 transition-all duration-300 border-2 ${emailFocus ? "border-blue-500" : "border-gray-300 dark:border-gray-600"
                  }`}
              >
                <FaEnvelope className="mr-2 text-gray-500 dark:text-gray-400" />
                <input
                  className="w-full px-2 py-1 text-gray-700 dark:text-gray-200 bg-transparent focus:outline-none"
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  onFocus={handleEmailFocus}
                  onBlur={handleEmailBlur}
                  required
                />
              </div>
              {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
            </div>

            {/* Password Input */}
            <div className="mb-7">
              <label className="block mb-1 text-gray-600 dark:text-gray-300" htmlFor="password">
                Password
              </label>
              <div
                className={`relative flex items-center rounded-lg py-2 px-3 transition-all duration-300 border-2 ${passwordFocus ? "border-blue-500" : "border-gray-300 dark:border-gray-600"
                  }`}
              >
                <FaLock className="mr-2 text-gray-500 dark:text-gray-400" />
                <input
                  className="w-full px-2 py-1 text-gray-700 dark:text-gray-200 bg-transparent focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                  required
                />
                <button
                  type="button"
                  onClick={handleTogglePassword}
                  className="text-gray-500 dark:text-gray-400 focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 active:scale-90 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>

            <div className="text-center my-2 text-gray-600 dark:text-gray-400">or</div>
            <button
              type="button"
              onClick={() => console.log("Continue with Google")}
              className="w-full text-gray-700 dark:text-gray-200 bg-transparent py-3 border-[1px] border-black dark:border-white border-opacity-30 rounded-lg hover:border-blue-600 dark:hover:border-blue-600 flex items-center justify-center transition duration-300 gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 256 262"><path fill="#4285f4" d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622l38.755 30.023l2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path><path fill="#34a853" d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055c-34.523 0-63.824-22.773-74.269-54.25l-1.531.13l-40.298 31.187l-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path><path fill="#fbbc05" d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82c0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z"></path><path fill="#eb4335" d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0C79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path></svg>
              Continue with Google
            </button>

            {/* Sign Up Link */}
            <div className="mt-4 text-gray-600 dark:text-gray-400 text-center">
              Don't have an account?{" "}
              <Link className="text-blue-600 dark:text-blue-400" to={"/signup"}>
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login