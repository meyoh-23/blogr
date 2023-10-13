import { Button } from "@mui/material";


export const PrimaryButton = () => {
    return (
    <Button
    size="large"
    variant="outlined"
    sx={{
        padding: "15px",
        borderRadius: "40px",
        background: "hsl(0, 0%, 100%)",
        color: "hsl(353, 100%, 62%)",
        height: "40px",
        borderColor: "hsl(240, 2%, 79%)",
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: "600",
        fontSize: "1rem",
        textTransform: "capitalize",
        whiteSpace: "nowrap",
        "&:hover": {
            backgroundColor: "primary.light",
            cursor: "pointer"
        }
    }}
    > sign up
    </Button>
)};

export const SecondaryButton = () => {
    return (
    <Button
    size="large"
    variant="text"
    sx={{
        padding: "25px",
        background: "inherit",
        color: {
            xs: "secondary.light",
            sm: "hsl(0, 0%, 100%)",
        },
        height: "40px",
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: "600",
        fontSize: "1rem",
        textTransform: "capitalize",
    }}
    >
        login
    </Button>
)};

export const NutralButton = () => {
    return (
    <Button
    size="large"
    variant="outlined"
    sx={{
        padding: "10px",
        borderRadius: "40px",
        background: "hsl(0, 0%, 100%)",
        color: "hsl(353, 100%, 62%)",
        borderColor: "hsl(240, 2%, 79%)",
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: "600",
        fontSize: "1rem",
        textTransform: "capitalize",
        "&:hover": {
            backgroundColor: "primary.light",
            cursor: "pointer"
        }
    }}
    > start for free
    </Button>
)};

export const LastlButton = () => {
    return (
    <Button
    size="large"
    variant="outlined"
    sx={{
        padding: "10px",
        borderRadius: "40px",
        background: "transparent",
        color: "hsl(240, 2%, 79%)",
        borderColor: "hsl(0, 0%, 100%)",
        fontFamily: "'League Spartan', sans-serif",
        fontWeight: "600",
        fontSize: "1rem",
        textTransform: "capitalize",
        "&:hover": {
            backgroundColor: "hsl(0, 0%, 100%)",
            color:"primary.main",
            cursor: "pointer"
        }
    }}
    > learn more
    </Button>
)};