"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgess, setLoginProgress] = useState(false);

    const handleFormSubmit = async (ev) => {
        ev.preventDefault()
        setLoginProgress(true)
        await signIn("credentials", { email, password, callbackUrl: '/' })
        setLoginProgress(false)
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit} >
                <input type="email" name="email" placeholder="email" value={email}
                    disabled={loginInProgess}
                    onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="password" value={password}
                    disabled={loginInProgess}
                    onChange={(e => setPassword(e.target.value))} />
                <button type="submit" disabled={loginInProgess}>Login</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button type="button" className="flex gap-4 justify-center"
                    onClick={() => signIn('google', { callbackUrl: "/" })}
                >
                    <Image src={'/google.png'} alt={'google icon'} width={24} height={24} />
                    Login with Google
                </button>
                <div className="my-4 text-center text-gray-500 border-t pt-4">Don't have an account? <Link className="underline" href={"/register"}>Register here &raquo;</Link></div>
            </form>
        </section>
    )
}