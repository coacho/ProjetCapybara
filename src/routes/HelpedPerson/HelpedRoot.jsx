import {
    Outlet,
    Link,
    useLoaderData,
    Form,
} from "react-router-dom";
// import { getContacts, createContact } from "../contacts";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBar from "../../components/helped/SideBar";

export async function testExpressAPI() {

    // test variables d'environnement
    const API_SERVER_URI = import.meta.env.VITE_APP_API_SERVER_URI;
    

    // test: neo4j_get
    let req = API_SERVER_URI + '/';
    let res = await fetch(req, {mode: 'cors'});
    let result = await res.text();
    console.log('test connexion API Server', result);

    req = API_SERVER_URI + '/neo4j_get';
    res = await fetch(req, {mode: 'cors'});
    result = await res.json();
    console.log("neo4j_get", result);
    
}

export default function HelpedRoot() {

    useEffect(() => {
        testExpressAPI();
    }, []);

    return (
        <>
            <SideBar />
            
            <div id="detail">
                <Outlet />
            </div>
        </>
    );

}

