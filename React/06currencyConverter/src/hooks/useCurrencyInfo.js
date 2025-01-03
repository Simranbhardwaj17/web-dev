import {useEffect, useState} from "react"


function useCurrencyInfo(currency){                //hooks take optional arg but this hook take var currency
    const [data, setData] = useState({})          //by def {}- use empty string coz if fetch not work,then code don't crash
    useEffect(() => {                          //as any component lifecycle triggers, we use useEffect hook by this automatic fetch get called
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((res) => res.json())               //then need callbk
        .then((res) => setData(res[currency]))    //obj cn be accessed by . or []   &         response(value pass in fetch) & key value r same so no need to think of ? key to pass
        console.log(data);                   //to see
    }, [currency])         //currency is dependency coz as it change we need to run it again

    console.log(data);
    return data
}

export default useCurrencyInfo;


//design custom hook
//these hooks ret js so good to use js not .jsx

//useEffect needs callbk & dependency




//res.json()  or  JSON.parse to convert str into json
//can't hold res.json/data in reg var as it will not updated on ui


//.then(() => {})      {}- it means we need to ret value. so if don't want to ret, remove {}
