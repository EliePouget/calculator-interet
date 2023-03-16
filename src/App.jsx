import './App.css';
import {useEffect, useState} from "react";
import Tableau from "./Component/Tableau.jsx";
import {Formulaire} from "./Component/Formulaire.jsx";

function App() {
    const [formData, setFormData] = useState({montant: '', taux: '', annee: '', periodicite: 'mois-periodicite'});

    const handleFormSubmit = (data) => {
        setFormData(data);
    }

    return (
        <div className="App">
            <Formulaire onSubmit={handleFormSubmit} />
            <Tableau formData={formData} />
        </div>
    )
}

export default App;
