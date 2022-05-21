import {useRef} from "react";
import Link from "next/link";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";

// Local Data
import data from "../yourData";

export default function Home() {
    // Ref
    const workRef = useRef();
    const aboutRef = useRef();

    // Handling Scroll
    const handleWorkScroll = () => {
        window.scrollTo({
            top: workRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    const handleAboutScroll = () => {
        window.scrollTo({
            top: aboutRef.current.offsetTop,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="container mx-auto mb-10">
            <Header
                handleWorkScroll={handleWorkScroll}
                handleAboutScroll={handleAboutScroll}
            />
            <div className="laptop:mt-20 mob:mt-10">
                <h1 className="mt-5 text-8xl mob:text-3xl laptop:text-8xl mob:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5">
                    {data.headerTaglineOne} <br/>
                </h1>
            </div>
            <div
                className="mt-40 mob:mt-10 laptop:mt-40 mob:p-2 laptop:p-0"
                ref={workRef}>
                <h1 className="text-2xl text-bold">What. A. Day.</h1>
                <div className="mt-10 mob:mt-5 laptop:mt-10 grid grid-cols-2 mob:grid-cols-1 laptop:grid-cols-2 gap-4">
                    {data.projects.map((project, index) => (
                        <WorkCard
                            key={index}
                            img={project.imageSrc}
                            name={project.title}
                            description={project.description}
                            onClick={() => window.open(project.url)}
                        />
                    ))}
                </div>
            </div>
            <div
                className="mt-40 mob:mt-2 laptop:mt-40 mob:p-2 laptop:p-0"
                ref={aboutRef}>
                <p className="m-5 mob:m-0 laptop:m-5 mob:mt-2 laptop:ml-0 ml-0 text-3xl mob:text-xl laptop:text-3xl w-3/5 mob:w-full laptop:w-3/5">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    Jay turned to me when the steel drums started at Tonguey&#39;s wedding and said, "Chris knows I play the percussion, right?". He was disappointed for a moment that he wasn&#39;t asked to play. The disappointment turned to laughter as he criticised their timing, song choices and overall ability. I had similar feelings when you sent the link for your wedding <em>app</em>, until remembering that you guys still believe all I do is fix printers. I guess we all have our alternative truths. The two accounts of the night you met have finally triggered some memories about that night, and it turns out I didn&#39;t introduce you. There was no need anyway; you two were always going to find each other. Dickie, in your note to me, you said you have no idea how we became friends. Not a clue. And well, me neither. I&#39;ve tried to read back over messages to see how the hell we ended up going to Denmark. Whether the friendship as we know it started then, before, or after. Whether it&#39;s the Scott version of events or not. It&#39;s all a bit of a false dichotomy. I am so lucky to have a friend who cares for me as much as you do. In some ways, you are like the Dad I don&#39;t want to disappoint...<br />
                    <br />
                    We&#39;ve spent Christmas together, travelled together, partied together, and comforted each other. But,<a href="https://twitter.com/bofeciathebear/status/1262918072630947842">when things get difficult</a>, we can always just lock our heads together, and you&#39;ll come out on top. Hopefully, you can <a href="https://www.dji.com/uk/pocket-2"><strong>capture some moments on your honeymoon and evolve from food blogger to world vlogger.</strong></a> Just let Aisha hold the camera, most shots don&#39;t look that great from 4.2ft.<br />
                    <br /> You said to me once, <em>&quot;You can do little wrong in my eyes other than be dishonest,&quot;</em> I&#39;m so thankful you keep me true. Yesterday truly was in my top 10 weddings. And don&#39;t share this around. It was my number 1. The wedding of someone I truly care about marrying an absolute <strong><a href="https://www.linkedin.com/in/aisha-ulhaq-121b5247/">stunner</a></strong>. So glad Jess and I could be part of just one of the chapters.<br />
                    <br />
                    Lots of Love <br />
                    <br />
                    Scott &amp; Jess xxx
                </p>
            </div>
            <div className="mt-40 mob:mt-5 laptop:mt-40 mob:p-2 laptop:p-0">
                <div className="mt-5">
                    <Socials/>
                </div>
            </div>
            <h1 className="text-sm text-bold mt-10 mob:mt-2 laptop:mt-10 mob:p-2 laptop:p-0">
                <Link href="https://www.printerbase.co.uk/news/can-get-printer-repaired/">
                    <a className="underline underline-offset-1">Repairs?</a>
                </Link>
            </h1>
        </div>
    );
}
