import "./style.css";

export function WelcomePage({ user, setIsLoggedIn }) {
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="welcomeUser">
      <spam>Seja bem vindo, {user} !</spam>
      <button onClick={handleLogout}> Sair</button>
    </div>
  );
}
