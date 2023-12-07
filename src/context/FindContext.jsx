import React from "react";

// Import necessary React modules and dependencies
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import {
    RecaptchaVerifier,
    signInWithPhoneNumber
} from "firebase/auth";
import { auth } from "../firebase";

// Create a context to manage state and provide it to components
const FindContext = createContext();

// Define a provider component to wrap the application with the context
const FindProvider = ({ children }) => {

    // State variables for different categories, search parameters, and UI interactions
    const [category1, setCategory1] = useState("")
    const [category2, setCategory2] = useState("")
    const [category3, setCategory3] = useState("")
    const [category4, setCategory4] = useState("")
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [search, setSearch] = useState("")
    const [cat, setCat] = useState("")
    const [step, setStep] = useState(1);
    const [searchResult, setSearchResult] = useState("screen")
    

    // Function to fetch data for category1
    const getCategory1 = async () => {
        try {
            const category1Data = await axios.get(`${import.meta.env.VITE_API_URL}/api/get_all_categories`)
            setCategory1(category1Data.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Function to fetch data for category2
    const getCategory2 = async () => {
        try {
            const category1Data = await axios.get(`${import.meta.env.VITE_API_URL}/api/cat2/get_all_categories`)
            setCategory2(category1Data.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Function to fetch data for category3
    const getCategory3 = async () => {
        try {
            const category1Data = await axios.get(`${import.meta.env.VITE_API_URL}/api/cat3/get_all_categories`)
            setCategory3(category1Data.data)
        } catch (error) {
            console.log(error)
        }
    }

    // Function to fetch data for category4
    const getCategory4 = async () => {
        try {
            const category1Data = await axios.get(`${import.meta.env.VITE_API_URL}/api/cat4/get_all_categories`)
            setCategory4(category1Data.data)
        } catch (error) {
            console.log(error)
        }
    }

    // useEffect to fetch category data when the component mounts
    useEffect(() => {
        getCategory1()
        getCategory2()
        getCategory3()
        getCategory4()
    }, [])

    // Function to set up and render reCAPTCHA for phone number verification
    function setUpRecaptcha(number) {
        const recaptchaVerifier = new RecaptchaVerifier(
            auth,
            "recaptcha-container",
            {}
        );
        recaptchaVerifier.render()
        return signInWithPhoneNumber(auth, number, recaptchaVerifier)
    }

    // Provide the state and functions to the components using the context
    return (
        <FindContext.Provider value={{ category1, category2, category3, category4, search, setSearch, searchResult, setSearchResult, open, setOpen, open2, setOpen2, open3, setOpen3, open4, setOpen4, setUpRecaptcha, cat, setCat, step, setStep }}>
            {children}
        </FindContext.Provider>
    )
}

// Custom hook to access the context within components
export const FindState = () => {
    return useContext(FindContext);
}

// Export the provider as the default export
export default FindProvider;