export function RestrictedPage({ isLoggedIn, user, login, logout }) {
  return (
    <>
      {isLoggedIn ? (
        <>
          <p>Bem vindo,{user}!</p>
          <button onClick={logout}> Sair </button>
        </>
      ) : (
        <>
          <p>Você não pode acessar essa página</p>
          <button onClick={login}> Entrar </button>
        </>
      )}
    </>
  );
}
