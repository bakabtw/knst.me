import self from "../img/self.png"
import mock1 from "../img/asic-agent.png"
import mock2 from "../img/mining-monitoring.png"
import mock3 from "../img/psu-monitoring.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(221, 78, 57)", "rgb(247, 251, 125)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Eugene",
    lastName: "Konstantinov",
    initials: "ek", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer && Cloud DevOPS",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Moscow'
        },
        {
            emoji: "💼",
            text: "freelancer"
        },
        {
            emoji: "📧",
            text: "contact@knst.me"
        }
    ],
    socials: [
        {
            link: "https://github.com/bakabtw",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/eugenekonst/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.instagram.com/eugene.knst/",
            icon: "fa fa-instagram",
            label: 'instagram'
        }
    ],
    bio: "Hello! I'm Eugene, and I'm a full-stack developer. ",
    skills:
        {
            proficientWith: ['javascript', 'react', 'php', 'python', 'docker', 'kubernetes'],
            exposedTo: ['nodejs', 'python']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'cycling',
            emoji: '🚴'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'movies',
            emoji: '🎥'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "ASIC agent - a tool for controlling ASICs running on PV power",
            live: "https://power.knst.me",
            source: "https://github.com/bakabtw/asic-agent",
            image: mock1
        },
        {
            title: "BTC farm monitoring",
            live: "https://mining-demo.payload.network/public-dashboards/b7c5989e752e4e43947d4f82886ecfa1?orgId=1",
            source: "",
            image: mock2
        },
        {
            title: "Monitoring tool for telecom power supply",
            live: "",
            source: "",
            image: mock3
        },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}