import ItemList from "./item-list";
export default function Page(){
    return (
        <main>
            <h1 className="text-3xl font-bold mb-4 text-blue-400 shadow-md bg-blue-900 p-4"> Shopping List </h1>
           <ItemList />
        </main>
    );
}