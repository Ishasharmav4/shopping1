
import Link from "next/link";
import CartButton from "./cart-button";



export default function menu(){
    return(
        <div className="flex justify-end">
            <nav className="flex gap-3 w-full">
                <Link href='/signin' className=' flex items-centerheader-button'>
                
                Helloooooo,sigin in
                </Link>
             <CartButton/>
            </nav>
        </div>
    )
}