import React, { Component } from 'react'

export default class App extends Component {
	navEffect = () => {
		window.addEventListener("scroll", () => {
			const navBar = document.getElementById("navbar");
			const muncul = navBar.getBoundingClientRect();
			const myBackground = document.getElementById("my-background");
			const hapus = myBackground.getBoundingClientRect();

			if (muncul.y <= muncul.height) {
				navBar.classList.add("fade-in-nav");
			}
			if (hapus.height <= hapus.top) {
				navBar.classList.remove("fade-in-nav");
			}
		});
	}

    render() {
        return (
            <div>
                <nav
					id="navbar"
					className="navbars"
					>
					<div style={{paddingLeft: "80px"}}>
						<p
						style={{
						bottom: "-8px",
						fontWeight: "700",
						position: "relative",
						cursor: "pointer", 
						fontSize: "24px",
						textShadow: "1px 1px 1px rgba(0,0,0,0.5)"
						}}
						onClick={() => {
							window.scrollTo({
								top: 0,
								behavior: "smooth",
							});
						}}>
						ANAULWAN_ID 
						</p>
					</div>
				</nav>        
				<div id="my-background"></div>
                <div ref={this.navEffect} style={{ marginTop: "7rem", width:"100%", textAlign: "center" }}>
                    <h1 style={{color: "#3e64ff"}}>HELLO WORLD</h1>
                    <div style={{height: "200vh", width: "100%", background: "#2d334a"}}></div>
                </div>
            </div>
        )
    }
}

 