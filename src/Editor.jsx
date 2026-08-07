import Education from "./Education.jsx"
import Experience from "./Experience.jsx"
import PersonalInfo from "./PersonalInfo.jsx"
export default function Editor(){
    return (
        
            <div className="Editor m-2 min-h-screen grid grid-row-3 gap-2">
                <PersonalInfo/>
                <Education/>
                <Experience/>
                <button className="rounded bg-sky-500 hover:bg-sky-700 text-white pt-1 pb-1 pl-4 pr-4">Submit</button>
            </div>


    )
}