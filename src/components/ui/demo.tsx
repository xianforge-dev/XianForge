"use client"

import * as React from "react"
import { Home, FileText, CreditCard, Info } from "lucide-react"
import { AnimeNavBar } from "@/components/ui/anime-navbar"

const items = [
    {
        name: "Home",
        url: "#",
        icon: Home,
    },
    {
        name: "Features",
        url: "#features",
        icon: FileText,
    },
    {
        name: "Showcase",
        url: "#how-it-works",
        icon: Info,
    },
    {
        name: "Demo",
        url: "#demo",
        icon: CreditCard,
    },
]

export function AnimeNavBarDemo() {
    return <AnimeNavBar items={items} defaultActive="Home" />
}
