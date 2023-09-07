import React, {Component} from 'react' 

export default class Nav extends Component {
    render() {
        return (
            <nav className="text-3xl w-screen h-32 bg-cyan-600 flex p-4" id="">
                <div className="p-8 items-center justify-start">
                    <h1>Travel Bound Co</h1>
                </div>
                <div className="p-12 flex items-center justify-end">
                    <ul className="flex flex-row space-x-6">
                        <li className="">Home</li>
                        <li className="">Destinations</li>
                        <li className="">Login</li>
                    </ul>
                </div>
            </nav>
        )
    }
}