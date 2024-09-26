import "./App.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Banner from "./Component/Banner";
import Item from "./Component/Item";

function App() {
    return (
        <>
            <Header />
            <Banner />
            <section
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "20px",
                }}
            >
                <Item name="Item 1" description="This is the first item." />
                <Item name="Item 2" description="This is the second item." />
                <Item name="Item 3" description="This is the third item." />
            </section>
            <Footer />
        </>
    );
}

export default App;
