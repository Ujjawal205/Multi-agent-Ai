import React from 'react'
import { signInWithPopup } from 'firebase/auth'
import api from '../../utils/axios'
import { auth, googleProvider } from '../../utils/firebase'
import { FcGoogle } from "react-icons/fc";


function Home() {
    const handlleGoogleSignIn = async (token) => {
        try {
            const { data } = await api.post('/auth/login', { token })
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }

    const googleSignIn = async () => {
        try {
            const data = await signInWithPopup(auth, googleProvider)
            const token = await data.user.getIdToken()
            console.log(token)
            await handlleGoogleSignIn(token)
            console.log(data.user)
        } catch (error) {
            console.error('Google sign-in failed:', error)
        }
    }
    return (
        <div className='w-full h-screen bg-[#0d0f14] text-white flex overflow-hidden'>
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm '>
                <div className='w-[340px] bg-[#13151c] border border-white/[0.08] rounded-2x1 p-8 flex flex-col gap-5'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-[17px] font-semibold text-slate-100 tracking-tight'>Welcome to Multi-Agent AI</h1>
                        <p className='text-[13px] text-slate-500'>Please login to continue using the app</p>
                    </div>

                    <button className='flex w-full items-center justify-center gap-3 rounded-xl border border-indigo-400/30 bg-gradient-to-br from-indigo-500 to-violet-700 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-indigo-950/30 transition-all duration-150 hover:-translate-y-0.5 hover:from-indigo-600 hover:to-violet-800 hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-indigo-400/70 focus:ring-offset-2 focus:ring-offset-[#13151c] active:translate-y-0 active:from-indigo-700 active:to-violet-900' onClick={googleSignIn}>
                        <FcGoogle size={15} className='text-white' />
                        Continue with Google

                    </button>

                </div>

            </div>

        </div>
    )
}

export default Home
