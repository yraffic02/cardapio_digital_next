import { IMenu } from "@/types"
import { CardList } from "../Card/CardList"

export const Menu = ({title}: IMenu) => {
    return (
        <>
            <div className="custom-border pl-8 p-5 bg-white">
                <h1 className="text-base font-medium">
                    {title}
                </h1>
            </div>
            <div>
                <CardList />
                <CardList />
                <CardList />
                <CardList />
            </div>
        </>
    )
}