import React from 'react'
// import User from './User'
import UserClass from './UseClass';


class About extends React.Component{

  constructor(props) {
    super(props)
    // console.log("parent constructor");
  }

  componentDidMount() {
    // console.log("parent component Did Mount")
  }

  render() {
    return (
      <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-orange-100  p-6">
        <div className=" max-w-2xl bg-white shadow-xl rounded-xl p-8 text-center space-y-6">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
            This is a <span className="text-orange-600 font-bold">Food Delivery</span> Web Application based on a Front-end Development project. It is just an imitation of the <span className="text-orange-500 font-semibold">Swiggy</span> Web Application.
          </h1>
  
          <UserClass name={"Log out"} />
        </div>
      </div>
    );
  }
  
  // render() {
  //   // console.log("parent render");
  //   return (
  //     <div>
  //       <h1>This is a Food Delivery Web-Application based on the Front-end Development project. It is just an immitation of Swiggi Wab Application </h1>
        
  //       <UserClass name={"Log out"} />
  //     </div>

  //   );
  // }
}

export default About;