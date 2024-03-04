
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import {
    Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger
} from "@shadcn-next-skeleton/shared"

 export function HeaderNavbarS() {
    return (
        <div className=' md:hidden'>
        <Sheet>
            <SheetTrigger asChild>
               <HamburgerMenuIcon/>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader >
                 <SheetDescription>
                    
                 </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
        </div>
    )
}


