export default function Education(){
    return(
        <div>
            <form action="GET" className="flex flex-col">
                <h2 className="self-center font-bold">EDUCATION</h2>
                <label htmlFor="school" className="block w-full">School
                    <input type="text"
                    className="border rounded w-full"
                    placeholder=""/>
                </label>
                <br />
                <label htmlFor="course" className="block w-full">Course
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
                <button className="rounded bg-sky-500 hover:bg-sky-700 text-white pt-1 pb-1 pl-4 pr-4">Add Education</button>
                <br />
                <br />
                
            </form>
        </div>
    )
}