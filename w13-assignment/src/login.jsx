import React, {Component} from 'react'
import peruImage from './assets/peru-react.jpg';

export default class Login extends Component {
    render() {
        return (
            <body className=''>
                <main className="">
                    <div className="flex w-1/2 h-screen" id="">
                        <h1 className="">Welcome to Travel Bound</h1>
                        <img src={peruImage} className="rounded-2xl" alt="Photo of a mother and her daughter waving somewhere in Peru." />
                    </div>
                </main>    
            </body>
        )
    }
}