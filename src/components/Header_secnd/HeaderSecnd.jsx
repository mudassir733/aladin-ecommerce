import axios from "axios";
import HeaderSecndClient from "./HeaderSecndClient";
import { redirect } from "next/navigation"; 
import Cookies from "js-cookie";


const categories = ['All Categories', 'Electronics', 'Clothing', 'Books'];


export async function getServerSideProps(context) {
  
    const token = context.req.cookies.access_token; 


    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    let userData;
    try {
        
        const response = await axios.get("http://localhost:5000/api/users/me", {
            headers: {
                Cookie: `access_token=${token}`,
            },
        });

  
        if (response.status === 401) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            };
        }

     
        userData = response.data.data;
        return {
            props: {
                userData,
                categories,
            },
        };
    } catch (error) {
    
        if (error.response && error.response.status === 401) {
            Cookies.remove("access_token");
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            };
        }
    }

  
    return {
        props: {
            categories,
        },
    };
}


export default function HeaderSecnd({ userData, categories }) {
    return (
        <>
            <HeaderSecndClient categories={categories} name={userData?.firstName} />
        </>
    );
}
