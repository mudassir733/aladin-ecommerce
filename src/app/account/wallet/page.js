

// Features
import WalletBalance from '@/features/MyAccount/WalletBalance'
import PaymentMethods from '@/features/MyAccount/PaymentMethod'
import TransactionHistory from '@/features/MyAccount/TransitionHistory'
import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/dist/server/api-utils';

export default async function WalletPage() {
    const cookieStore = await cookies();
    const token = cookieStore.get("access_token")?.value
    console.log(token)
    if (!token) {
        cookieStore.delete("access_token")
        redirect('/login')
    }
    let userData;
    try {
        const response = await axios.get("http://localhost:5000/api/users/me", {
            headers: {
                Cookie: `access_token=${token}`,

            },
        });
        // console.log("Hello i reached here");
        if (!response.status === 401) {
            redirect('/login')
        }
        userData = response.data.data;
    } catch (error) {
        if (error.response && error.response.status === 401) {
            console.log('Session expired. Redirecting to login...');

            Cookies.remove("access_token")
            redirect('/login')
        }
    }
    return (
        <div className="w-full !p-6 mx-auto">
            <h1 className="text-2xl font-semibold text-primaryMedium mb-8">My Wallet</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-8">
                    <WalletBalance balance={userData.balance} />
                    <PaymentMethods />
                </div>
                <div>
                    <TransactionHistory />
                </div>
            </div>
        </div>
    )
}
