import Upwork from '../asset/upwork.png';

const Experience = () => {
    return (
        <div className="py-12 px-4 bg-gray-900 text-blue-50">
             <div className="flex justify-center">
                <p class = " bg-slate-500 rounded-3xl px-3">Experience</p>
                </div>
                <p className='text-center'>Here is a quick summary of my most recent experiences:</p>
            
            <div className='bg-gray-800 rounded-2xl mt-6 p-8'>
                <img className = 'w-279 h-28' src = {Upwork}></img>
                <p>Nov 2021 - Present</p>
                <h1 className='font-bold text-xl'>Sr. Frontend Developer</h1>
                <ul className='list-disc m-8'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                    <li>Sed quis justo ac magna.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>

            <div className='bg-gray-800 rounded-2xl mt-6 p-8'>
                <img className = 'w-279 h-28' src = {Upwork}></img>
                <p>Nov 2021 - Present</p>
                <h1 className='font-bold text-xl'>Sr. Frontend Developer</h1>
                <ul className='list-disc m-8'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                    <li>Sed quis justo ac magna.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>
            <div className='bg-gray-800 rounded-2xl mt-6 p-8'>
                <img className = 'w-279 h-28' src = {Upwork}></img>
                <p>Nov 2021 - Present</p>
                <h1 className='font-bold text-xl'>Sr. Frontend Developer</h1>
                <ul className='list-disc m-8'>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
                    <li>Sed quis justo ac magna.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>
            </div>
        
        </div>




    )

}
export default Experience