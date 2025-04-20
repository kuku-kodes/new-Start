import React from "react";

class UserClass extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
          count: 0,
          userinfo: {
            name: "Mehak Karothiya",
            location: "Jhansi",
            avatar_url:""
          },
        };   
        // console.log("child constructor");
    }

    async componentDidMount() {
        // console.log("child Component Did Mount");
        const data = await fetch("https://github.com/kuku-kodes/new-Start");
        const json = await data.json();
        this.setState({
            userinfo:json,
        })
    }

    render() {
        // console.log("child render");
        const { count } = this.state;
        const { name, location, avatar_url } = this.state.userinfo;

        return (
          <div className=" ml-[110px] max-w-sm bg-white shadow-lg rounded-xl p-6 text-center space-y-4">
            {/* User Info */}
            <h2 className="text-xl font-semibold text-gray-800">Name: {name}</h2>
        
            {/* Counter */}
            <div className="text-gray-600">Count = {count}</div>
            <div className="flex justify-center gap-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-lg transition"
                onClick={() => {
                  this.setState({
                    count: this.state.count + 1,
                  });
                }}
              >
                +
              </button>
              <button
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-lg transition"
                onClick={() => {
                  this.setState({
                    count: this.state.count - 1,
                  });
                }}
              >
                -
              </button>
            </div>
        
            {/* Location & Avatar */}
            <h3 className="text-md text-gray-700">Location: {location}</h3>
            <img
              width={85}
              className="rounded-full mx-auto border-2 border-gray-300"
              src={avatar_url}
              alt="User Avatar"
            />
        
            {/* Contact */}
            <h3 className="text-md font-medium text-gray-700">
              Contact No: <span className="text-black">9532144873</span>
            </h3>
          </div>
        );
    }
  };  

        // return (
        //   <div className="usercard">
        //     <h2>Name: {name}</h2>
        //     <div>Count = {count}</div>
        //     <button
          
        //       onClick={() => {
        //         this.setState({
        //           count: this.state.count + 1,
        //         });
        //       }}
        //     >
        //       +
        //     </button>
        //     &nbsp;&nbsp;&nbsp;
        //     <button
        //       onClick={() => {
        //         this.setState({
        //           count: this.state.count - 1,
        //         });
        //       }}
        //     >
        //       -
        //     </button>
        //     <h3>Location: {location}</h3>
        //     <img width={85} src={avatar_url} />
        //     <h3>Contact No: 9532144873 </h3>
        //   </div>
        // );
//     }
// }

export default UserClass;