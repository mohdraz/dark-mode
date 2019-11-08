import React, {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

const useDarkMode = () => {
    const [value, setValue] = useLocalStorage("mode");

    useEffect( () => {
        if(value) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

    }, [value]);


    return [value, setValue];
};

export default useDarkMode;  

