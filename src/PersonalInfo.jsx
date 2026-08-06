export default function PersonalInfo(){
    return(
        <div>
            <form action="GET" className="flex flex-col">
                <h2 className="self-center font-bold">PERSONAL INFO</h2>
                <label htmlFor="names" className="block w-full">Full Names
                    <input type="text"
                    className="border rounded w-full"
                    placeholder="Jon Doe"/>
                </label>
                <br />
                <label htmlFor="email" className="block w-full">Email
                    <input type="email"
                    className="border rounded w-full"
                    placeholder="jondoe@example.com"/>
                </label>
                <br />
                <label htmlFor="number" className="block w-full">Phone
                    <input type="number"
                    className="border rounded w-full"
                    placeholder="123456789"/>
                </label>
                <br />
                <label htmlFor="address" className="block w-full">Address
                    <input type="text"
                    className="border rounded w-full"
                    placeholder="12 Street"/>
                </label>
                <br />
                <br />
                
            </form>
        </div>
    )
}