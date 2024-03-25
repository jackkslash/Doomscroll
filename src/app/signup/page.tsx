import { signup } from './actions'

export default function Page() {
    return (
        <form>
            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" required />
            <label htmlFor="username">Username:</label>
            <input id="username" name="username" type="username" required />
            <label htmlFor="password">Password:</label>
            <input id="password" name="password" type="password" required />
            <button formAction={signup}>Sign up</button>
        </form>
    )
}