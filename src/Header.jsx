const Header = () => {
    return (
        <div className="flex justify-center bg-indigo-500">
            <h1 id="header-text" className="text-white text-2xl py-6">Realtime Ripple</h1>
            <svg  xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 my-6 ml-3" fill="white" viewBox="0 0 24 24" stroke="black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
        </div>       
    )
}

export default Header