import * as PropTypes from "prop-types";
import Ligne from "./Ligne.jsx";

function Tableau({formData}) {

    let nbRemb = 1;
    if (formData.periodicite === "mois-periodicite"){
        nbRemb = 12;
    }else if(formData.periodicite === "trimestre-periodicite"){
        nbRemb = 4;
    }else if(formData.periodicite === "semestre-periodicite"){
        nbRemb = 2;
    }

    const periodicite = formData.annee * nbRemb;
    let nbAnnee = 0;
    const annuite = formData.montant * ( (formData.taux/100) / (1- Math.pow(1+formData.taux/100, -periodicite)))


    let capitalDebut = parseFloat(formData.montant);
    let interet = formData.montant * (formData.taux/100);
    let amortissement =  annuite - interet;
    let capitalFin = capitalDebut - amortissement;

    let totalAnnuite = 0;
    let totalInteret = interet;
    let totalAmor = amortissement - annuite;

    const rows = [];
    for (let i = 0; i < periodicite; i++) {
        nbAnnee++

        rows.push(<Ligne
                        capitalDebut={capitalDebut}
                        nbAnnee={nbAnnee}
                        key={i}
                        interet={interet}
                        annuite={annuite}
                        amortissement={amortissement}
                        capitalFin={capitalFin}/>);

        capitalDebut = capitalFin;
        interet = capitalDebut * (formData.taux/100);
        amortissement = annuite - interet;
        capitalFin = capitalDebut - amortissement;
        totalInteret += interet;
        totalAmor += amortissement;
        totalAnnuite += annuite;
    }
    return (
        <table>
            <thead>
            <tr>
                <th colSpan="6">Tableau d'emprunt</th>
            </tr>
            <tr>
                <th scope="col">Années</th>
                <th scope="col">Capital restant du <br/> en début de période</th>
                <th scope="col">Intérêts</th>
                <th scope="col">Amortissement</th>
                <th scope="col">Annuités</th>
                <th scope="col">Capital restant du <br/> en fin de période</th>
            </tr>
            </thead>
            <tbody>
            {rows}
            </tbody>
            <tfoot>
                <tr className="last-line">
                    <th scope="row" colSpan="2">Total</th>
                    <th className="total">{totalInteret.toFixed(2)}</th>
                    <th className="total">{totalAmor.toFixed(2)}</th>
                    <th className="total">{totalAnnuite.toFixed(2)}</th>
                </tr>
                <tr>
                    <th scope="row" colSpan={6}>Correspond à un taux de {(totalInteret/totalAmor * 100).toFixed(2)} %</th>
                </tr>
            </tfoot>
        </table>
    );

}


export default Tableau;