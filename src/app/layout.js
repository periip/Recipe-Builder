import "./styles.css"
import SideBar from "./components/sidebar/page"

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body><SideBar />{children}</body>
        </html>
    )
}