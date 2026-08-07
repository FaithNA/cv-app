export default function Experience(){
    return(
        <div>
            <form action="GET" className="flex flex-col bg-sky-50/50 p-6 rounded-sm border border-sky-100 shadow-sm my-6">
                <h2 className="self-center font-bold">EXPERIENCE</h2>
                <label htmlFor="company" className="block w-full">Company
                    <input type="text"
                    className="focus:outline-none focus:ring focus:ring-pink-300 rounded w-full bg-white"
                    placeholder=""/>
                </label>
                <br />
                <label htmlFor="role" className="block w-full">Role
                    <input type="text"
                    className="focus:outline-none focus:ring focus:ring-pink-300 rounded w-full bg-white"
                    placeholder=""/>
                </label>
                <br />

                <div className="period flex">
                    <label htmlFor="start" className="block w-full">Start Date
                        <input type="date"
                        className="focus:outline-none focus:ring focus:ring-pink-300 rounded w-full bg-white"/>
                    </label>
                    <label htmlFor="end" className="block w-full">End Date
                        <input type="date"
                        className="focus:outline-none focus:ring focus:ring-pink-300 rounded w-full bg-white"/>
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