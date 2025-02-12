import NewItem from "./new-item";

export default function Page() {
    return(
        <div className="flex flex-col items-center h-screen bg-blue-50 p-5">
            <h1 className="font-bold mb-3 ">Quantity</h1>
            <NewItem />
        </div>
    )
}
