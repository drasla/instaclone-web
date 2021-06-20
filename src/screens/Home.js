function Home({setIsLoggedIn}) {
    return (
        <>
            <h1>Home</h1>
            <button onClick={setIsLoggedIn(false)}>Log Out</button>
        </>
    );
}

export default Home;