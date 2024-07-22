import { Theme } from "../constants";

export default {

    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        marginBottom:"20px"
    },

    label: {
        fontSize: "16px",
        color: "#676767",
        marginBottom: "8px",
        lineHeight: "20px",
    },

    inputContainer: {
        display: "flex",
        borderBottom: "1px solid #262626",
    },

    textInput: {
        border: "none",
        backgroundColor: "inherit",
        outline: "none",
        width: "100%",
        paddingBottom: "6px",
        fontFamily: "Lato",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "16px",
        color: Theme.TEXT_PRIMARY_BLACK
    },

    iconPosition: {
        cursor: "pointer",
    },

    prefixIcon: {
        paddingRight: "7px"
    },

    suffixIcon: {
        paddingLeft: "7px"
    },

    labelWTooltipContainer: {
        display: "flex",
        alignItems: "baseline",
        columnGap: "5px"
    },

    errorStyles: {
        borderBottom: "1px solid #E05243",
        color: "#E05243"
    }
};
