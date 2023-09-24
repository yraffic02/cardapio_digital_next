import { CardEmphasis } from "../Card/CardEmphasis"

export const Emphasis = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-900 w-screen p-5">
            <h2 className="text-white font-normal mb-2">Promoção</h2>
            <div className="flex items-center gap-1  overflow-auto">
                <CardEmphasis />
                <CardEmphasis />
                <CardEmphasis />
                <CardEmphasis />
                <CardEmphasis />
                <CardEmphasis />
                <CardEmphasis />
            </div>
        </nav>
    )
} 