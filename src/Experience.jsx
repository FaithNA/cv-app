export default function Experience(){
    return(
        <div>
            <form action="GET" className="flex flex-col">
                <h2 className="self-center font-bold">EXPERIENCE</h2>
                <label htmlFor="company" className="block w-full">Company
                    <input type="text"
                    className="border rounded w-full"
                    placeholder=""/>
                </label>
                <br />
                <label htmlFor="role" className="block w-full">Role
                    <input type="text"
                    className="border rounded w-full"
                    placeholder=""/>
                </label>
                <br />

                <div className="period flex">
                    <label htmlFor="start" className="block w-full">Start Date
                        <input type="date"
                        className="border rounded w-full"/>
                    </label>
                    <label htmlFor="end" className="block w-full">End Date
                        <input type="date"
                        className="border rounded w-full"/>
                    </label>
                </div>
                <br />
                <br />
                <button className="rounded bg-sky-500 hover:bg-sky-700 text-white pt-1 pb-1 pl-4 pr-4">Add Experience</button>
                <br />
                <br />
                
            </form>
        </div>
    )
}