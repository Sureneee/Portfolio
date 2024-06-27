import profile from '../asset/profile.jpeg';
import Location from './location';
import Circle from './circlesvg';
import SvgCat from './svgcat';
import SvgBird from './svgbird';
import SvgF from './svgF';

const Main = () => {
    return (
        <div className = 'bg-neutral-950 p-8 text-white'> 
            <div className='w-60 h-60 mx-auto relative'>
                <img className='w-full h-full z-20 relative' src={profile}></img>
                <div className='w-full h-full z-10 transform translate-x-4 translate-y-4 bg-slate-500 absolute top-0'></div>
        </div>
            <div className = 'bg-neutral-950 flex flex-col mt-12 mb-12'>
                <h1 className = 'text-3xl font-bold'>Hi, I’m Sagar 👋</h1>
                <p className = 'text-base'>I'm a full stack developer (React.js & Node.js) with a focus on creating (and occasionally designing) exceptional digital experiences that are fast, accessible, visually appealing, and responsive. Even though I have been creating web applications for over 7 years, I still love it as if it was something new.</p>
            </div>
            <div>
                <div className='flex gap-4'>
                    <Location/>
                    <p>Ahmedabad, India</p>
                </div>
                <div className='flex gap-4'>
                    <Circle/>
                    <p>Available for new projects</p>
                </div>
            </div>
            <div className='flex gap-4 mt-8 items-center'> 
                <SvgCat/>
                <SvgBird />
                <SvgF/>
            </div>

        </div>
    
           
      
    )
}
export default Main