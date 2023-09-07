import React, {Component} from 'react'
import peruImage from './assets/peru-react.jpg';

export default class Login extends Component {
    render() {
        return (
            <body className=''>
                <main className="">
                    {
                        // Div that contains the welcome photo and login.
                    }
                    <div className="w-screen h-screen">
                        {/* <div className="flex w-1/2 h-screen" id="">
                            <h1 className="">Welcome to Travel Bound</h1>
                            <img src={peruImage} className="rounded-2xl" alt="Photo of a mother and her daughter waving somewhere in Peru." />
                        </div> */}
                        <div className="z-100 w-screen h-screen flex items-center justify-center" id="login-cont">
                            <div className="bg-cyan-700 w-screen h-96 flex flex-col items-center justify-center m-64">
                                {
                                    //Username
                                }
                                    <div className="m-4">
                                        <label htmlFor="" className="" id="">
                                            <h6>Username</h6>
                                        </label>
                                        <input type="text" className="" id=""/>
                                    </div>
                                {
                                    // Password
                                }
                                    <div className="m-4">
                                        <label htmlFor="" className="" id="">
                                            <h6>Password</h6>
                                        </label>
                                        <input type="text" className="" id=""/>
                                    </div>
                                {
                                    // Am I a robot??
                                }
                                <div className="m-4">
                                    <label htmlFor="" className="" id="">
                                        <h6>Are you human?</h6>
                                    </label>
                                    <input type="chekcbox" className="" id=""/>
                                </div>
                                {
                                    // Button
                                }
                                <button className="w-32 h-10 bg-cyan-100 rounded-3xl my-4" id="">
                                    <h3>Submit</h3>
                                </button>

                            </div>
                        </div>
                    </div>
                </main>    
            </body>
        )
    }
}