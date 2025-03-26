import Link from 'next/link'

export default function SideBar() {
    return (
        <div className="sidebar">
            <h1 style={{ marginLeft: '15%' }}>Menu</h1>
            <Link className="active" href="/chef"> Chef </Link>
            <Link href="/recipe"> Recipe </Link>
            <Link href="/ingredient"> Ingredients</Link>
            <Link href="/has"> Ingredients In Recipe </Link>
            <Link href="/equipment"> Equipment</Link>
            <Link href="/uses"> Recipe Uses Equipment</Link>
            <Link href="/makes"> Recipe Makes MenuItem </Link>
            <Link href="/menuitem"> MenuItem</Link>
            <Link href="/food"> Food</Link>
            <Link href="/beverage"> Drinks</Link>
            <Link href="/recommends"> Chef's Recommended</Link>
            <Link href="/combo"> Combos</Link>
            <Link href="/partof"> Combo is Part Of MenuItem</Link>
            <Link href="/addon"> Menu Item Addons</Link>
            <Link href="/supplier"> Supplier</Link>
            <Link href="/supplies"> Supplier Supplies Ingredient</Link>
        </div>  
    )
}