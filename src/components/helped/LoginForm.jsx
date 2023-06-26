const LoginForm = () => {
    //requête de connexion
    const handleSubmit = () => {
        
    }
    return ( 
        <div class="form-container">
            <form onSubmit={handleSubmit}>
                <div >
                    <label htmlFor="text">Identifiant</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="text">Mot de passe</label>
                    <input type="password" />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
     );
}
 
export default LoginForm;