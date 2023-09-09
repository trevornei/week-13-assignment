import React, {Component} from 'react' 
// 1. export default: Allows components to be accessed in other modules.
// 2. class Nav: Classes are used in React to explicitly define component. 
        // NOTE: The primary way to define components now is to use hooks. 
// 3. extends allows the React library to apply the functionality of lifecycle methods.
//STUB - Lifecycle Methdods:
            // 1. Mounting
            // 2. Unmounting
            // 3. Updating
            // 4. Error Handling
export default class Nav extends Component {
    render() {
        return (
            <nav className="text-3xl w-screen h-32 bg-cyan-600 flex p-4" id="">
                <div className="p-8 ml-20 items-center justify-start">
                    <h1>Travel Bound Co</h1>
                </div>
                <div className="p-12 ml-auto mr-20 flex items-center justify-end">
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