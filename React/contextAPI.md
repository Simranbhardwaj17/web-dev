//ContextAPI start from props, study props then its problem then this

//its further version r redux reduxtoolkit


to pass data through <App/> to <Card />
<App username="chai"/> pass to <Card />

//to build admin dashboard  <Dashboard/>
to pass data(display username) in a card of dashboard (var is in a state) we have to pass the data through various components

 data pass through props to props:- unoptimized approach

No usage of data still data is handled in various components, just to pass the data


//If <Card/> directly ask to global var & if <App/> directly pass data to that var, not to props

//This is concept of prop drilling


//so there is contextAPI (it is just for React)

//so there is Redux:- for state management(pass data in organised way)

for react we have reactRedux

Redux-toolkit(RTK) is the easier version of reactRedux

Zustand library is also for state management


