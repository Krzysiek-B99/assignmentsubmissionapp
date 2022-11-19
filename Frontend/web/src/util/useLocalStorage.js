import { useEffect, useState } from "react"

function useLocalState (defaultValue, key){

    const [value,setValue] = useState(() => {
        const localStorageValue = localStorage.getItem(key);
        
        return localStorageValue !== null 
        ? JSON.parse(localStorageValue) 
        : defaultValue;
    });

    console.log(`localstoragevalue ${key} is ${value}`);

    useEffect(() => {
        localStorage.setItem(key,JSON.stringify(value));
        console.log(`update localstoragevalue  ${key} to ${value}`);
    },[key,value]);

    return [value,setValue];
}



export {useLocalState}