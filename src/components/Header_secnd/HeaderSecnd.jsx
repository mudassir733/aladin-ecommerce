import axios from "axios";
import HeaderSecndClient from "./HeaderSecndClient";
import { redirect } from "next/navigation";  // A função `redirect` é importada aqui para uso dentro do servidor
import Cookies from "js-cookie";

// Dados das categorias (não alterado)
const categories = ['All Categories', 'Electronics', 'Clothing', 'Books'];

// Função que será executada no lado do servidor
export async function getServerSideProps(context) {
    // Obtenção do token dos cookies
    const token = context.req.cookies.access_token; 

    // Se o token não existir, redireciona para o login
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
        // Realiza a requisição para buscar os dados do usuário
        const response = await axios.get("http://localhost:5000/api/users/me", {
            headers: {
                Cookie: `access_token=${token}`,
            },
        });

        // Se o status for 401, redireciona para o login
        if (response.status === 401) {
            return {
                redirect: {
                    destination: '/login',
                    permanent: false,
                },
            };
        }

        // Caso a resposta seja válida, obtém os dados do usuário
        userData = response.data.data;
        return {
            props: {
                userData,
                categories,
            },
        };
    } catch (error) {
        // Se a resposta for 401 ou qualquer erro ocorrer, limpa o token e redireciona
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

    // Caso contrário, retorna apenas as categorias
    return {
        props: {
            categories,
        },
    };
}

// Componente que será renderizado com as props passadas pelo getServerSideProps
export default function HeaderSecnd({ userData, categories }) {
    return (
        <>
            <HeaderSecndClient categories={categories} name={userData?.firstName} />
        </>
    );
}
