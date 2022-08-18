import Input from "components/general/Input"
import Select from "components/general/Select"
import Button from "components/general/Button"
import SeparateBorder from "components/general/SeparateBorder"
import Link from "next/link"

const index = () => {
    const SubmitSignup = (e) =>{
        e.preventDefault()
    }

    return (
        <div className="flex flex-col justify-center items-center m-3">
            {/* FACEBOOK IMAGE */}
            <img
                src="/assets/facebook-word.svg"
                alt="facebook"
                className="my-3 w-64"
            />
            {/* FORM SIGNUP */}
            <form className="bg-white p-3 w-full m-4 xs:m-0 xs:w-96 text-center text-lg shadow-lg rounded-lg" onSubmit={SubmitSignup}>
                <div >
                    <h2 className='text-xl font-bold '>Create a new account</h2>
                    <p className="text-sm text-gray-500">It's quick and easy.</p>
                </div>
                <SeparateBorder className='my-2' />
                <div className="flex justify-between gap-2">
                    <Input placeholder='First name' sm/>
                    <Input placeholder='Last name' sm/>
                </div>

                <Input type='text' placeholder='Mobile number of email address' className='p-1 w-full' validateType='email' sm/>
                <Input type='password' placeholder='New password' className='p-1 w-full' validateType='password'  sm/>
                
                <p className="text-gray-500 text-xs text-left">Date of birth</p>
                <div className="flex justify-between gap-x-2">
                    <Select sm options={[
                            {value:'ha', name:'hatem'},
                            {value:'kh', name:'khaled'},
                            {value:'om', name:'omar'},
                        ]}
                    />
                    <Select sm options={[
                            {value:'ha', name:'hatem'},
                            {value:'kh', name:'khaled'},
                            {value:'om', name:'omar'},
                        ]}
                    />
                    <Select sm options={[
                            {value:'ha', name:'hatem'},
                            {value:'kh', name:'khaled'},
                            {value:'om', name:'omar'},
                        ]}
                    />
                </div>
                
                <div className="text-[10px] leading-tight text-left text-gray-500 mb-3">
                    <div className="mb-3">
                        People who use our service may have uploaded your contact information to Facebook. <span className="text-blue-600">Learn more</span>.
                    </div>
                    <div className="mb-1">
                        By clicking Sign Up, you agree to our <span className="text-blue-600">Terms</span>, <span className="text-blue-600">Privacy Policy</span> and <span className="text-blue-600">Cookies Policy</span>. You may receive SMS notifications from us and can opt out at any time.
                    </div>
                </div>

                <Button 
                    text='Sign Up'
                    className='bg-green-500 py-1 w-1/2 my-4'
                />

                <div>
                    <Link href='/login' >
                        <a className="text-blue-600 text-sm hover:underline">Already have an account?</a>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default index