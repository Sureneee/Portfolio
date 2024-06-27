import islandboy from '../asset/islandboy.jpeg'

const AboutMe = () => {
    return (
        <div className="py-12 px-4 bg-slate-800">
            <div className="flex justify-center">
                <p class = "text-blue-50 bg-slate-500 rounded-3xl px-3">About me</p>
            </div>
            <div>
                <img className = "p-10" src={islandboy}></img>
                </div>
            <div className='text-blue-50 text-base'>
                <h1 className='font-bold text-2xl mb-4'>Curious about me? Here you have it:</h1>
                <p>I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am very enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.</p>
                <br></br>
                <p>I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.</p>
                <br></br>
                <p>I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.</p>
                <br></br>
                <p>When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.</p>
                <br></br>
                <p>Finally, some quick bits about me.</p>
                <ul className='list-disc m-4'>
                    <li>B.E. in Computer Engineering</li>
                    <li>Full time freelancer</li>
                    <li>Avid learner</li>
                    <li>Aspiring indie hacker</li>
                </ul>
                <p>One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
            </div>


        </div>
    )
}

export default AboutMe