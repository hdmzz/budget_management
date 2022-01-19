import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue) return JSON.parse(jsonValue);
        if (typeof defaultValue === "function") {
            return defaultValue()//we can pass a function into the defaultvalue so we make sure that we handle this type od scenario
        } else {
            return defaultValue
        }
    })
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[key, value])
    return [value, setValue]
}