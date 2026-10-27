"use client";

export default function SearchBar({search, setSearch}: any){
    const [search, setSearch] = useState('')

    return (
        <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Product"/>
    );
}
