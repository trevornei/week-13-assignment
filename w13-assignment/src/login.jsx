import React, {Component} from 'react'
import peruImage from './assets/peru-react.jpg';

export default class Login extends Component {
    render() {
        return (
            <body className='bg-cyan-100'>
                <main className="">
                        <div className="z-100 w-screen h-screen flex items-center justify-center" id="login-cont">
                            <div className="bg-cyan-700 w-96 h-96 flex flex-col items-center justify-center rounded-3xl m-64">
                                <div className="w-1/4 h-12 flex items-center justify-center border-solid border-2 border-cyan-300 shadow-md shadow-cyan-100">
                                    <h3 className='text-3xl text-cyan-200'>Login</h3>
                                </div>
                                
                                {
                                    //Username
                                }
                                    <div className="m-4 text-cyan-300">
                                        <label htmlFor="" className="" id="">
                                            <h6>Username</h6>
                                        </label>
                                        <input type="text" className="" id=""/>
                                    </div>
                                {
                                    // Password
                                }
                                    <div className="m-4 text-cyan-300">
                                        <label htmlFor="" className="" id="">
                                            <h6>Password</h6>
                                        </label>
                                        <input type="text" className="" id=""/>
                                    </div>
                                {
                                    // Button
                                }
                                <button className="w-32 h-10 bg-cyan-100 rounded-3xl my-4" id="" type='submit'>
                                    <h3>Submit</h3>
                                </button>

                            </div>
                        </div>
                </main>    
            </body>
        )
    }
}