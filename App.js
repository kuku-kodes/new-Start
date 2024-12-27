const heading = React.createElement(
     "div",
     {id: "parent"},
    [ React.createElement(
        "div", 
        {id: "child1"},  
    [React.createElement("h1", {id: "heading1"}, "Hello World from h1"),
        React.createElement("h2", {id: "heading2"}, "Hello World from h2")]
    ),
    React.createElement(
        "div", 
        {id: "child2"},  
    [React.createElement("h1", {id: "heading1"}, "Hello World from h1"),
        React.createElement("h2", {id: "heading2"}, "Hello World from h2")]
    ) 
])
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)
