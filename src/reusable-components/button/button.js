



export default function Button({ type, style, disabled = false, onClickCb, className }) {
    return (
        <button style={{ ...styles.buttonCommon, ...getButtonStyles(type), ...getDisabledStyles(disabled) }} className={className} disabled={disabled} onClick={onClickCb}>
            
        </button>
    )
}