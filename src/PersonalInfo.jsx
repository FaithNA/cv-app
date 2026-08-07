export default function PersonalInfo(){
    return(
        <div>
            <form action="GET" className="flex flex-col bg-sky-50/50 p-6 rounded-sm border border-sky-100 shadow-sm my-6">
                <h2 className="self-center font-bold">PERSONAL INFO</h2>
                <label htmlFor="names" className="block w-full">Full Names
                    <input type="text"
                    className="focus:outline-none focus:ring focus:ring-pink-300 rounded w-full bg-white"
                    placeholder="Jon Doe"/>
                </label>
                <br />
                <label htmlFor="email" className="block w-full">Email
                    <input type="email"
                    className="focus:outline-none focus:ring focus:ring-pink-300 rounded w-full bg-white"
                    placeholder="jondoe@example.com"/>
                </label>
                <br />
                <label htmlFor="number" className="block w-full">Phone
                    <input type="number"
                    className="focus:outline-none focus:ring focus:ring-pink-300 rounded w-full bg-white"
                    placeholder="123456789"/>
                </label>
                <br />
                <label htmlFor="address" className="block w-full">Address
                    <input type="text"
                    className="focus:outline-none focus:ring focus:ring-pink-300 rounded w-full bg-white"
                    placeholder="12 Street"/>
                </label>
                <br />
                <br />
                
            </form>
        </div>
    )
}