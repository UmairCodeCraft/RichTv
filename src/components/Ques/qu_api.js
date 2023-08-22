export const Questions=[
    {
        id:1,
        question:"What is React?",
        answer:"React is a declarative, efficient, flexible open source front-end JavaScript library developed by Facebook in 2011.It is used for developing interactive view layer of web and mobile apps. It was created by Jordan Walke, a software engineer at Facebook. "
    },
    {
     id:2,
     question:"What is the virtual Dom?",
     answer:"DOM stands for document object Model.The virtual DOM provides a mechanism that abstracts manual DOM manipulations away from the developer, helping us to write more predictable code."
    }
    ,{
      id:3,
      question:"How do use create a React app?",
      answer:"The create-react-app is an excellent tool for beginners, which allows you to create and run React project very quickly. It does not take any configuration manually. This tool is wrapping all of the required dependencies like Webpack, Babel for React project itself and then you need to focus on writing React code only."
    },
    {
     id:4,
     question:"What is an event in react?",
     answer:"An event is an action that could be triggered as a result of the user action or system generated event. For example, a mouse click, loading of a web page, pressing a key, window resizes, and other interactions are called events."
    },
    {
    id:5,
    question:"What are synthetic events in React?",
    answer:"A synthetic event is a cross-browser wrapper around the browser's native event."
    }
    ,{
        id:6,
        question:"What is JSX?",
        answer:"JSX stands for JavaScript XML. It is a React extension which allows writing JavaScript code that looks similar to HTML. The JSX file makes the React application robust and boosts its performance."
    },
     ,{
        id:7,
        question:"Explain the purpose of render() in React?",
        answer:"It is mandatory for each React component to have a render() function. Render function is used to return the HTML which you want to display in a component."
    },
     {
        id:8,
        question:"What is Props?",
        answer:"Props stand for Properties in React. They are read-only inputs to components. Props are an object which stores the value of attributes of a tag and work similar to the HTML attributes. It gives a way to pass data from the parent to the child components throughout the application.It is similar to function arguments and passed to the component in the same way as arguments passed in a function."
    }
     ,{
        id:9,
        question:"What is a State in React?",
        answer:"The State is an updatable structure which holds the data and information about the component. It may be changed over the lifetime of the component in response to user action or system event."
    }
     ,{
        id:10,
        question:"How can you update the State of a component?",
        answer:"We can update the State of a component using this.setState() method. This method does not always replace the State immediately. Instead, it only adds changes to the original State."
    }
     ,{
        id:11,
        question:" What are Higher Order Components(HOC)?",
        answer:"In React, Higher Order Component is an advanced technique for reusing component logic. It is a function that takes a component and returns a new component. In other words, it is a function which accepts another function as an argument."
    }
     ,{
        id:12,
        question:" What are fragments?",
        answer:"In was introduced in React 16.2 version. In React, Fragments are used for components to return multiple elements. It allows you to group a list of multiple children without adding an extra node to the DOM."
    }
     ,{
        id:13,
        question:"How to apply validation on props in React?",
        answer:"Props validation is a tool which helps the developers to avoid future bugs and problems. It makes your code more readable."
    }
    ,{
        id:14,
        question:" How to create refs?",
        answer:"Refs can be created by using React.createRef() and attached to React elements via the ref attribute. It is commonly assigned to an instance property when a component is created, and then can be referenced throughout the component.",
    }
    ,{
        id:15,
        question:"What do you understand by the state in React?",
        answer:"In react, the state of a component is an object that holds some information that may change over the component's lifetime. It would be best to try to make your state as simple as possible and minimize the number of stateful components.",
    }
    ,{
        id:16,
        question:"What are Forward Refs?",
        answer:"Ref forwarding is a feature which is used for passing a ref through a component to one of its child components. It can be performed by making use of the React.forwardRef() method. It is particularly useful with higher-order components and specially used in reusable component libraries.",
    }
    ,{
        id:17,
        question:" What is React Router?",
        answer:"React Router is a standard routing library system built on top of the React. It is used to create Routing in the React application using React Router Package. It helps you to define multiple routes in the app. It provides the synchronous URL on the browser with data that will be displayed on the web page.",
    }
    ,{
        id:18,
        question:"Why do we need a Router in React?",
        answer:"React Router plays an important role to display multiple views in a single page application. It is used to define multiple routes in the app. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular Route. ",
    }
    ,{
        id:19,
        question:"Why switch keyword used in React Router v4?",
        answer:"The 'switch' keyword is used to display only a single Route to rendered amongst the several defined Routes. The <Switch> component is used to render components only when the path will be matched.",
    }
    ,{
        id:20,
        question:"How to use styles in React?",
        answer:"We can use style attribute for styling in React applications, which adds dynamically-computed styles at render time. It accepts a JavaScript object in camelCased properties rather than a CSS string. The style attribute is consistent with accessing the properties on DOM nodes in JavaScript.",
    }
]