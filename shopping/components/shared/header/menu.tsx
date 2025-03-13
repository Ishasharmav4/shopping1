

import CartButton from "./cart-button";
import UserButton from "./user-button";



export default function menu(){
    return(
        <div className="flex justify-end">
            <nav className="flex gap-3 w-full">
                <UserButton />
             <CartButton/>
            </nav>
        </div>
    )
}