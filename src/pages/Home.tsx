import circuitree from '../assets/images/circuitree.png'

function HomeComponent(){
    return (  
        <section className="content home">
            <div className="hero-left">
                <h1>Hi, I'm Brooke!</h1>
                <p>I'm a front-end developer and I like crafting beautiful, magical things with code. With over 10 years of experience in making websites, I believe the internet should be a delightful, inclusive, and accessible space for everyone.</p>
            </div>
            <div className="hero-right">
                <img className="circuitree" src={circuitree} alt="An illustrated image of flowers and a tree" />
            </div>
        </section>
    )
}

export default HomeComponent