import Editor from './Editor.jsx'
import Preview from './Preview.jsx'
export default function App(){
    return (
        <div className="Root grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr]" >
            <Editor />
            
            <Preview />


        </div>
    )
}