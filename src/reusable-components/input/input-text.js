
import styles from "./input-text.styles";



export default function TextInput({
    type = "text",
    name,
    value,
    label = "",
    placeHolder = "",
    className = "",
    autoComplete = "off",
    disabled = false,
    errors = {},

}) {
    return (
        <div style={styles.container}>
            {label && <label style={styles.label}>{label}</label>}

            <input
                name={name}
                type={type}
                placeHolder={placeHolder}
                className={className}
                autoComplete={autoComplete}
                disabled={disabled}
                value={value}
                errors={errors}
            />


        </div>
    )
}