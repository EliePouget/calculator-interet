import * as PropTypes from "prop-types";
import Label from "./Label.jsx";
import React from "react";

class Formulaire extends React.Component{
    constructor(props) {
        super(props);
        this.state = {montant: '', taux: '', annee: '', periodicite: 'mois-periodicite'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const formData = {
            montant: this.state.montant,
            taux: this.state.taux,
            annee: this.state.annee,
            periodicite: this.state.periodicite
        };
        this.props.onSubmit(formData);
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <Label type="number" name="montant" min="0" max="0" value={this.state.montant} onChange={this.handleChange} placeHolder="Montant">Montant de l'emprunt en €</Label>
                <Label type="number" name="taux" min="0" max="50" value={this.state.taux} onChange={this.handleChange} placeHolder="Taux">Taux annuel</Label>
                <Label type="number" name="annee" min="0" max="0" value={this.state.annee} onChange={this.handleChange} placeHolder="Année">Durée en année</Label>
                <div className="label">
                    <label>Périodicité de remboursement
                        <select name="periodicite" value={this.state.periodicite} onChange={this.handleChange}>
                            <option value="mois-periodicite">Mois</option>
                            <option value="trimestre-periodicite">Trimestre</option>
                            <option value="semestre-periodicite">Semestre</option>
                            <option value="annee-periodicite">Année</option>
                        </select>
                    </label>
                </div>
                <input className="validate" value="Envoyer" type="submit"/>
            </form>
        );
    }




}


export {Formulaire};