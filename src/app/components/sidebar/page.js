'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const SideBarRow = ({ href, name }) => {
    const pathname = usePathname();

    return (
        <Link href={href} >
            <div style={pathname === href ? { color: "rgb(153, 153, 134)"} : null}> {name} </div>
        </Link>
    )
}

export default function SideBar() {
    const rows = [
        { href: '/chef', name: 'Chef' },
        { href: '/recipe', name: 'Recipe' },
        { href: '/ingredient', name: 'Ingredients' },
        { href: '/has', name: 'Ingredients In Recipe' },
        { href: '/equipment', name: 'Equipment' },
        { href: '/uses', name: 'Recipe Uses Equipment' },
        { href: '/makes', name: 'Recipe Makes MenuItem' },
        { href: '/menuitem', name: 'MenuItem' },
        { href: '/food', name: 'Food' },
        { href: '/beverage', name: 'Drinks' },
        { href: '/recommends', name: "Chef's Recommended" },
        { href: '/combo', name: 'Combos' },
        { href: '/partof', name: 'Combo is Part Of MenuItem' },
        { href: '/addon', name: 'Menu Item Addons' },
        { href: '/supplier', name: 'Supplier' },
        { href: '/supplies', name: 'Supplier Supplies Ingredient' }
    ]

    return (
        <div className="sidebar">
            <h1 style={{ marginLeft: '15%' }}>Menu</h1>
            {rows.map((row, index) => <SideBarRow key={index} href={row.href} name={row.name} />)}
        </div>
    )
}