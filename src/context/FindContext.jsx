import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const FindContext = createContext();
const FindProvider = ({ children }) => {
    const [category1, setCategory1] = useState("")
    const [category2, setCategory2] = useState("")
    const [category3, setCategory3] = useState("")
    const [category4, setCategory4] = useState("")
    const [search, setSearch] = useState("")
    const [searchResult, setSearchResult] = useState([])

    const getCategory1 = async () => {
        try {
            const category1Data = await axios.get(`http://localhost:5000/api/get_all_categories`)
            setCategory1(category1Data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const getCategory2 = async () => {
        try {
            const category1Data = await axios.get(`http://localhost:5000/api/cat2/get_all_categories`)
            setCategory2(category1Data.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getCategory3 = async () => {
        try {
            const category1Data = await axios.get(`http://localhost:5000/api/cat3/get_all_categories`)
            setCategory3(category1Data.data)
        } catch (error) {
            console.log(error)
        }
    }
    const getCategory4 = async () => {
        try {
            const category1Data = await axios.get(`http://localhost:5000/api/cat4/get_all_categories`)
            setCategory4(category1Data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getCategory1()
        getCategory2()
        getCategory3()
        getCategory4()
    }, [])

    return (
        <FindContext.Provider value={{ category1, category2, category3, category4, search, setSearch, searchResult, setSearchResult }}>
            {children}
        </FindContext.Provider>
    )
}
export const FindState = () => {
    return useContext(FindContext);
}
export default FindProvider;