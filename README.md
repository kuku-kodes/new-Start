# new-Start

Two type of export/import

1. Default export/import

# export default "Component";
# import "cpmponent" from "path";

2. Named export/import

# export const component = anyThing;
# import {component} from "path";

# React Hooks
{Normall JS utility Function }, written by Facebook Developer

- usrState() - superpowerful react variables (whenever a state variable is update(change) react will re-renders the component) => {Reconciliation algorithm - (ReactFiber)}

- useEffect(() =>{} (a call back function), [] (a dependency array) ) - is a hook function which is a call back function which is called after the page is rendered.

- fetch() = it is a function which is provided by the web browser(javascript engine) to fetch the data from internet sites.

# Virtual DOM is in-memory representation of Real DOM. It is lightweight JavaScript object which is copy of Real DOM.

Updating virtual DOM in ReactJS is faster because ReactJS uses
Efficient diff algorithm
Batched update operations
Efficient update of sub tree only
Uses observable instead of dirty checking to detect change
ReactJS uses observable’s to find the modified components. Whenever setState() method is called on any component, ReactJS makes that component dirty and re-renders it.

Whenever setState() method is called, ReactJS creates the whole Virtual DOM from scratch. Creating a whole tree is very fast so it does not affect the performance.

Once you render a JSX element, every single Virtual DOM object gets updated.Compared to updating real DOM objects, the Virtual DOM updates faster. Before updating, a copy of the virtual DOM is made and later compared with the updated Virtual DOM.

So at any given time, ReactJS maintains two virtual DOM, one with the updated state Virtual DOM and other with the previous state Virtual DOM. Then React can figure out which objects have been changed, and this process is called Diffing. Once React knows which objects to update, it updates only those objects in the Real DOM.

ReactJS using diff algorithm compares both the Virtual DOM to find the minimum number of steps to update the Real DOM.
ReactJS uses following steps to find the difference in both the Virtual DOM’s
1. Re-render all the children if parent state has changed. If the state of a component has changed, then ReactJS re-renders all the child components even if child components are not modified. To prevent the unwanted re-render of the child components we can use shouldComponentUpdate() component life cycle method. This will further help in boosting the performance.
2. Breadth First Search. ReactJS traverse the tree using BST. Consider the below tree. States of element B and H have changed. So when using BST ReactJS reached element B it will by default re-render the element H. This is the reason to use BST for tree traversal

3. Reconciliation. It is the process to determine which parts of the Real DOM need to be updated. It follow below steps:
Two elements of different types will produce different trees.

# Making use of Shimmer UI latest industrail practice.
