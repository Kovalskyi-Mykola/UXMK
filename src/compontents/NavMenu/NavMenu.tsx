"use client"

import * as React from "react"
import Link from "next/link"
import { Camera } from 'lucide-react';
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
// import { Icons } from "@/components/icons"




export default function NavMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="  bg-red-800 hover:font-bold text-white">Warninng</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="  grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                            <li className="row-span-3">
                                <NavigationMenuLink asChild>
                                    <a
                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                        href="/"
                                    >
                                        <Camera color="red" size={48} />
                                        {/* <Icons.logo className="h-6 w-6" /> */}
                                        <div className="mb-2 mt-4 text-lg font-medium">
                                            UNIT MK
                                        </div>
                                        <p className="text-sm leading-tight text-muted-foreground">
                                            Beatifly designed web site still in <span className="text-red-800">Beta</span>
                                        </p>
                                    </a>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href="/" title="LifeCheck">
                                Comming soon
                            </ListItem>
                            <ListItem href="/" title=" Comming soon">
                                Comming soon
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>


            </NavigationMenuList>
        </NavigationMenu >
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"

