import React from 'react';
import Link from 'next/link';
import {BsChevronDown} from "react-icons/bs";


const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Contact", url: "/contact" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "What's Artstore", url: "/whatisArtstore" },
];

const subMenuData = [
    { id: 1, name: "Sci-Fi", doc_count: 11 },
    { id: 2, name: "Nature", doc_count: 8 },
    { id: 3, name: "Cinematic", doc_count: 64 },
    { id: 4, name: "Apocalypse", doc_count: 107 },
];
 
const MenuMobile = ({showCatMenu, setShowCatMenu, setMobileMenu, categories}) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-black border-t text-white">
        {data.map((item) => {
            return (
                <React.Fragment key={item.id}>
                    {!!item?.subMenu ? 
                    (
                        <li className="cursor-pointer py-4 px-5 border-b flex-col relative" 
                            onClick={() => setShowCatMenu(!showCatMenu)}
                        >
                        
                        <div className='flex justify-between items-center'>
                            {item.name}
                            <BsChevronDown size={14}/>
                        </div>
                        
                        {showCatMenu && 
                        (
                            <ul className="bg-white/[0.13] -mx-5 mt-4 -mb-4">
                                {categories?.map(({attributes: c, id}) =>
                                {
                                return (
                                    <Link key = {id} href={`/category/${c.slug}`} onClick={() => {setShowCatMenu(false); setMobileMenu(false);}}>
                                        <li className="py-4 px-8 border-t flex justify-between hover:bg-zinc-700">
                                            {c.name}
                                            <span className='opacity-50 text-sm'>{`(${c.products.data.length})`}</span>
                                        </li>
                                    </Link>
                                )
                                })}
                            </ul>
                        )}
                        </li>    
                    ) : 
                    (
                        <li className="py-4 px-5 border-b">
                            <Link href = {item?.url} onClick={()=> setMobileMenu(false)}> {item.name} </Link>
                        </li>
                    )}
                </React.Fragment>
            )
        })}
    </ul>
  )
}

export default MenuMobile;