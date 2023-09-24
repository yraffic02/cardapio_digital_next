import { Avatar } from "../Avatar"

export const Header = () => {
    return (
        <div
            className="
                flex 
                items-center 
                justify-evenly 
                w-screen
                p-4
                pb-0
                bg-blue-300
            "
        >
            <h1 className="
            font-bold 
            tracking-wider 
            text-xl
            ">
                Churrasco
            </h1>
            <Avatar />
        </div>
    )
}