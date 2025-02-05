import ItemList from "./item-list";
export default function Page(){
    return (
        <main>
            <h1 className="text-4xl font-bold m-6 text-center text-blue-400"> Shopping List </h1>
           <ItemList />
        </main>
    );
}