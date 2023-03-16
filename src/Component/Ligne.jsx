import * as PropTypes from "prop-types";
import Label from "./Label.jsx";

function Ligne({capitalDebut, interet, nbAnnee, annuite, amortissement, capitalFin,  key}) {

    return (
        <tr key={key}>
            <td>{nbAnnee}</td>
            <td>{capitalDebut.toFixed(2)}</td>
            <td>{interet.toFixed(2)}</td>
            <td>{amortissement.toFixed(2)}</td>
            <td>{annuite.toFixed(2)}</td>
            <td>{capitalFin.toFixed(2)}</td>
        </tr>
    );
}


Ligne.propTypes = {
    capitalDebut: PropTypes.number,
    interet: PropTypes.number,
    nbAnnee: PropTypes.number,
    annuite: PropTypes.number,
    amortissement: PropTypes.number,
    capitalFin: PropTypes.number,
    key: PropTypes.number,

};
export default Ligne;