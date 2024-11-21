//16-11-2024
//21:40

//design mthd customRender() udsing DOM
function customRender(reactElement, mainContainer) {     

    /*
    //Create domEle then use appendChild to inject using react
    const domElement = document.createElement(reactElement.type)
    
    //inject innerHTML
    domElement.innerHTML = reactElement.children

    //setAttributes
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    //Add into main container
    mainContainer.appendChild(domElement)
    */

    //lets make above code modular (setAtt)
    const domElement = document.createElement(reactElement.type)

    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;          //used when children is in props
        
        //to set every attri use loop
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    mainContainer.appendChild(domElement)
}


//To render ele(HTML) of func(how react see those ele)
//React tries to create/form tree of those ele
const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

//to grab root
const mainContainer = document.querySelector('#root')

//method to render/add above ele into root(as in DOM, we inject ele into root/div)
// customRender(what to render, where to inject)
customRender(reactElement, mainContainer)





//here customRender available for customReactElement method.so, it is working well
//customReactElement method:- Its a mthd .So, a/c to parameter it have special render mthd






