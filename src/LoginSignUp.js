import React, { useState } from 'react';
import { auth } from './firebase';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithRedirect,
    sendEmailVerification
} from "firebase/auth";

const LoginSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [authStep, setAuthStep] = useState('signup'); // 'signup', 'login', 'verifyEmail'

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await sendEmailVerification(userCredential.user);
            alert('Signed up successfully. Please check your email for verification link.');
            setAuthStep('verifyEmail');
        } catch (error) {
            alert(error.message);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            if (auth.currentUser.emailVerified) {
                alert('Logged in successfully');
            } else {
                alert('Please verify your email');
                setAuthStep('verifyEmail');
            }
        } catch (error) {
            alert(error.message);
        }
    };

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithRedirect(auth, provider);
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            {authStep === 'signup' && (
                <form onSubmit={handleSignUp}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button type="submit">Sign Up</button>
                </form>
            )}

            {authStep === 'login' && (
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <button type="submit">Login</button>
                </form>
            )}

            {authStep === 'verifyEmail' && (
                <div>
                    <p>Please check your email ({email}) for the verification link.</p>
                    <button onClick={() => auth.currentUser && sendEmailVerification(auth.currentUser)}>
                        Resend Verification Email
                    </button>
                </div>
            )}

            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
            {authStep !== 'verifyEmail' && (
                <button onClick={() => setAuthStep(authStep === 'signup' ? 'login' : 'signup')}>
                    {authStep === 'signup' ? 'Switch to Login' : 'Switch to Sign Up'}
                </button>
            )}
        </div>
    );
};

export default LoginSignUp;
