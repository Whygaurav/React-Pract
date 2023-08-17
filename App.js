const heading1 = React.createElement(
    "h1", {
        id: "Bale"
    },
    "Bruce"
);
const heading2 = React.createElement(
    "h2", {
        id: "Patt."
    },
    "Phoenix"
);

const heading = React.createElement(
    "h1", {
        id: "Keaton"
    },
    "INCEPTION"
);

const container = React.createElement(
    "div", {
        id: "Nothing"
    }, [heading1, heading2]
);

const newroot = ReactDOM.createRoot(document.getElementById("newroot"));
const ro000ot = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);

//passing react element inside the root
newroot.render(container);
ro000ot.render(heading);