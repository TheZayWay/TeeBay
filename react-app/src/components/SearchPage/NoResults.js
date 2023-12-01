import SearchBar from "../Search";
import Footer from "../Footer";

const NoResults = () => {
    return (
        <>
            <SearchBar />
            <h2>No Results...</h2>
            <div style={{marginTop: "25rem"}}></div>
            <Footer />
        </>
    )
}

export default NoResults