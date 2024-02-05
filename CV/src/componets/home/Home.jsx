// import profile from './assets/profile.jpeg';

function Home() {
    return (
      <div className=" text-white">

          <div className="flex align-center justify-center">
            <p className="text-6xl">Hi!</p>
            {/* <img src={profile} alt="Profile" /> */}
          </div>
          <p className="columns-2 text-xl my-8">
            <p>Hi, I'm Monika - a front-end developer with a passion for creating beautiful and intuitive digital experiences.</p>
            <p>My journey with programming began in 2023. Since then, I've gained experience working on various projects, from simple websites to more advanced web applications.</p>
            <p>My goal is not just to write code, but also to create products that are both functional and aesthetically pleasing. I prioritize solid design principles and pay special attention to details.</p>
            <p>In my free time, I love experimenting with new technologies, reading about the latest trends in the IT industry, and expanding my skills.</p>
          </p>
        
      </div>
    )
}

export default Home