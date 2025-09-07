export default function MenuItem({children}){
    const style = `bg-gradient-to-br from green-500 via-green-300 to-lime-200 w-30
                   py-2 px-4 rounded-lg border border-lime-500 text-lg font-bold text-lime-800
                   transition-transform transition-colors duration-300 ease-in-out
                   hover:scale-105 active:scale-95 hover:from-lime-200 hover:to-green-500 
                   hover:cursor-pointer`
    return(<div className={style}>{children}</div>)
}