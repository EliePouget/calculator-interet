import * as PropTypes from "prop-types";

function Label({min, max, name, type, placeHolder, value, onChange, children}) {

    let input = <input required value={value} name={name} onChange={onChange} type={type} min={min} max={max} placeholder={placeHolder}/>;
    if (max === "0") {
        input = <input required name={name} onChange={onChange} type={type} min={min} placeholder={placeHolder}/>;
    }
    return (
        <div className="label">
            <label>
                {children}
                {input}
            </label>
        </div>
    );


}

Label.propTypes = {
    min: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    max: PropTypes.string,
    type: PropTypes.string,
    placeHolder: PropTypes.string,
    onChange: PropTypes.func,
};

export default Label;
