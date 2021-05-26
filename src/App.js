
import './App.css';
import Navbar from "./components/Navbar"
import Objectives from "./components/Objectives"
import Programmes from "./components/Programmes";

function App() {
  return (
    <div className="App">
     <Navbar />
     
     
                      <section className="section bg-home home-half" id="home" data-image-src="./Landing.jpg">
                    <div className="bg-overlay"></div>
                    <div className="display-table">
                        <div className="display-table-cell">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 offset-lg-2 text-white text-center">
                                        <h1 className="home-title">Let us not curb it due to the COVID Pandemic.</h1>
                                        <p className="padding-t-15 home-desc">Early childhood education can make an effective contribution to the physical, psychomotor, cognitive, social and emotional development of the child, including languages and early literacy.
The first eight years of a child is a period of immense growth and development. Brain connections multiply significantly in the first three years, and the potential for ensuring ideal development is very high up to age eight. Ensure the milestones are fully used and strengthened to secure long-term benefits, A large proportion of human brain development takes place after birth as a result of interactions with the environment.</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </section> 

               
        <Objectives />
        <Programmes />


    </div>
  );
}

export default App;
