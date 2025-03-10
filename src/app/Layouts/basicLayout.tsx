import { Box } from "@mui/material"
import Header from "../Components/atoms/Header/header"
import Footer from "../Components/atoms/Footer/footer"
import { JSX } from "react"

type TBasicLayoutProps = {
    children: JSX.Element
}

export default function BasicLayout({ children }: TBasicLayoutProps) {
    return (
        <Box sx={{
            minHeight: '100vh',
            maxWidth: '100vw',
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'Background',
        }}>
            <Header />
            {children}
            <Footer />
        </Box>
    )
}