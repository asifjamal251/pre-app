import { useState, type SyntheticEvent } from "react"

const LoginForm = () => {
    const [email, setEamil] = useState('');
    const [password, setPassword] = useState('');

    const submitForm = (ev:SyntheticEvent) =>{
        ev.preventDefault();
        const target = ev.target as HTMLFormElement;

        console.log(target, {
            email,
            password
        });
    }
    return <>
    <form className="flx flex-col gap-4" onSubmit={submitForm}>
        <div className="w-full mb-1">
            <input onChange={(ev) => {
                setEamil(ev.target.value);
            }} value={email} type="email" className="w-full border p-2 rounded-sm" placeholder="Enter Email" />
        </div>
        <div className="w-full mb-1">
            <input type="emapasswordil" className="w-full border p-2 rounded-sm" placeholder="***********" />
        </div>
        <button type="submit" className="btn border-2 bg-green-600">Submit</button>
    </form>
    </>
}

export default LoginForm