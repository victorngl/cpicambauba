import Sidebar from "./sidebar/Sidebar"
import Footer from "./footer/Footer"
import { FC } from "react"

interface MainLayoutProps {
    children?: React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({children}) => {
    return (
        <>
        <Sidebar>
            {children}
            <Footer />
        </Sidebar>
        </>
    )
}

export default MainLayout;