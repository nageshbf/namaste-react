
const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child1"
    },
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]
    ),
    React.createElement("div", {
        id: "child2"
    },
        [
            React.createElement("h1", {}, "I am h1 tag"),
            React.createElement("h2", {}, "I am h2 tag")
        ]
    )
])

// This createElement return a object
// const element = React.createElement("h1", {
//     "id":"heading"
// }, "Hello world");

const root = ReactDOM.createRoot(document.getElementById("root"));

// Render will convert the returned object into html tag
root.render(parent)