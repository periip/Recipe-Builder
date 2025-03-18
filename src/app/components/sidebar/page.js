import Link from 'next/link'

export default function SideBar() {
    return (
        <div className="sidebar">
            <h1 style={{ marginLeft: '15%' }}>Menu</h1>
            <Link className="active" href="/chef"> Chef </Link>
            <Link href="/recipe"> Recipe </Link>
            <Link href="/has"> Ingredients In Recipe </Link>
        </div>  
    )
}