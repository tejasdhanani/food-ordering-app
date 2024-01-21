"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [creatingUser, setCreatingUser] = useState(false)
    const [userCreated, setUserCreated] = useState(false);
    const [error, setError] = useState(false)

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        setCreatingUser(true)
        setError(false)
        setUserCreated(false)
        const response = await fetch('/api/register', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            setUserCreated(true);
        } else {
            setError(true)
        }
        setCreatingUser(false)
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
            {userCreated && (
                <div className="my-4 text-center">
                    User created. Now you can <Link className="underline" href={"/login"}>Login &raquo;</Link>
                </div>
            )}
            {error && (
                <div className="my-4 text-center">
                    An error has occured. Please try again later.
                </div>
            )}
            <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email}
                    disabled={creatingUser}
                    onChange={e => setEmail(e.target.value)} />
                <input type="password" placeholder="password" value={password}
                    disabled={creatingUser}
                    onChange={(e => setPassword(e.target.value))} />
                <button type="submit" disabled={creatingUser}>Register</button>
                <div className="my-4 text-center text-gray-500">
                    or login with provider
                </div>
                <button
                    type="button"
                    onClick={() => signIn('google', { callbackUrl: '/' })}
                    className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt={'google icon'} width={24} height={24} />
                    Login with Google
                </button>
                <div className="my-4 text-center text-gray-500 border-t pt-4">Existing account? <Link className="underline" href={"/login"}>Login here &raquo;</Link></div>
            </form>
            <div>
            </div>
        </section>
    )
}