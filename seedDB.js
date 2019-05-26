var mongoose = require("mongoose");
var Testimonial = require("./models/Testimonial");
var Employee = require("./models/Employee");
var Photos = require("./models/backgroundPhotos");

var data = [{
        clientName: "Card1",
        image: "https://www.onefellswoop.co.uk/images/oye_bw_logo_stacked.jpg?crc=236361429",
        testimonial: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae enim natus itaque in sit provident, inventore, doloribus eaque iure accusamus doloremque. Nostrum architecto alias reiciendis, voluptatum cum dignissimos ex omnis.",
        whatWeDo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum ipsam doloremque culpa ex tenetur totam labore deleniti tempora enim excepturi accusantium, omnis debitis quasi atque aspernatur. At, quidem rerum!",
        importance: 1

    },
    {
        clientName: "Card2",
        image: "https://www.onefellswoop.co.uk/images/thresholdlogo2015.png?crc=480329561",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reiciendis distinctio voluptatum, facere, alias, nisi explicabo veritatis rem saepe exercitationem fuga sequi quam magnam aliquam tempore. Nihil itaque vitae placeat.",
        whatWeDo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ut nobis similique nihil quo illo, cumque velit rerum quia animi temporibus voluptates eum maxime doloribus libero sequi corporis veniam iure.",
        importance: 2
    },
    {
        clientName: "Card3",
        image: "https://www.onefellswoop.co.uk/images/screen%20shot%202015-01-13%20at%20125231-crop-u2806.jpg?crc=310858720",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem inventore quibusdam repellendus. Accusantium perferendis ullam quas hic eos esse quis officia provident minima nemo perspiciatis magnam, earum dolorum at.",
        whatWeDo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab in nam quos eaque nisi itaque impedit ipsam molestias exercitationem? Natus eligendi eum aliquid atque deserunt et voluptatibus non ex quam!",
        importance: 1
    },
    {
        clientName: "Card4",
        image: "https://www.onefellswoop.co.uk/images/oye_bw_logo_stacked.jpg?crc=236361429",
        testimonial: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae enim natus itaque in sit provident, inventore, doloribus eaque iure accusamus doloremque. Nostrum architecto alias reiciendis, voluptatum cum dignissimos ex omnis.",
        whatWeDo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum ipsam doloremque culpa ex tenetur totam labore deleniti tempora enim excepturi accusantium, omnis debitis quasi atque aspernatur. At, quidem rerum!",
        importance: 2

    },
    {
        clientName: "Card5",
        image: "https://www.onefellswoop.co.uk/images/thresholdlogo2015.png?crc=480329561",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam reiciendis distinctio voluptatum, facere, alias, nisi explicabo veritatis rem saepe exercitationem fuga sequi quam magnam aliquam tempore. Nihil itaque vitae placeat.",
        whatWeDo: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, ut nobis similique nihil quo illo, cumque velit rerum quia animi temporibus voluptates eum maxime doloribus libero sequi corporis veniam iure.",
        importance: 1
    },
    {
        clientName: "Card6",
        image: "https://www.onefellswoop.co.uk/images/screen%20shot%202015-01-13%20at%20125231-crop-u2806.jpg?crc=310858720",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem inventore quibusdam repellendus. Accusantium perferendis ullam quas hic eos esse quis officia provident minima nemo perspiciatis magnam, earum dolorum at.",
        whatWeDo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab in nam quos eaque nisi itaque impedit ipsam molestias exercitationem? Natus eligendi eum aliquid atque deserunt et voluptatibus non ex quam!",
        importance: 2
    },
    {
        clientName: "Card7",
        image: "https://www.onefellswoop.co.uk/images/screen%20shot%202015-01-13%20at%20125231-crop-u2806.jpg?crc=310858720",
        testimonial: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos exercitationem inventore quibusdam repellendus. Accusantium perferendis ullam quas hic eos esse quis officia provident minima nemo perspiciatis magnam, earum dolorum at.",
        whatWeDo: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab in nam quos eaque nisi itaque impedit ipsam molestias exercitationem? Natus eligendi eum aliquid atque deserunt et voluptatibus non ex quam!",
        importance: 2
    }
]

var employeeData = [{
        name: "DAVE MCTAGUES",
        job: "DIRECTOR",
        description: "Dave has been promoting and marketing events for over fifteen years. Working on a range of projects from live music to clubs, festivals and exhibitions has enabled Dave to build up an enviable list of contacts. His wealth of experience includes over a decade successfully promoting Africa Oye, helping it to grow in stature, amongst a myriad of other projects. Seeking to combine his passion for music and culture with his work, Dave saw One Fell Swoop as a natural progression and this lively city centre agency was born."
    },
    {
        name: "ALLY GOODMAN",
        job: "DIRECTOR",
        description: "Ally has been marketing festivals and events in the arts sector across Merseyside for 10 years. Since graduating from Liverpool John Moores University in 2005, he has balanced this work with a love of acting, both on stage and on screen.",
    },
    {
        name: "RICHARD PONTEFRACT",
        job: "EVENTS MANAGER",
        description: "Rich manages One Fell Swoop's events portfolio. He has a wealth of experience and contacts in the industry, having worked on events in Liverpool for the last 15 years. Starting promoting club and student nights in the early 2000's, he has gone on to work with a host of high profile organisations. Rich is also an established DJ, having played a vast number of venues and events across the city."
    },
    {
        name: "ALAN O'HARE",
        job: "PR / COPYWRITING",
        description: "Alan has worked as a writer, specialising in the north west and music, since the late nineties. With extensive experience at the likes of Trinity Mirror, Liverpool.com, Liverpool ECHO, Seven Streets, Getintothis and Liverpool etc., Alan's knowledge and passion of and for music mean he is never far away from a gig, record or press release. With an extensive contacts book and a gregarious personality, Alan also finds time (just!) to lead Liverpool folk ensemble, Only Child. You can find him at his laptop or the bar."
    },
    {
        name: "ABBEY ANDERSEN",
        job: "PROJECT CO-ORDINATOR",
        description: "Abbey has been with One Fell Swoop since 2014, working primarily in a seconded role to Africa Oye on their educational projects.   She has recently achieved an MA in Art, Aeshthetics and Cultural Instutitions and shares her spare time equally between a love of cats and cake."
    },
    {
        name: "NATALIE WILLIAMS",
        job: "SOCIAL MEDIA",
        description: "After graduating from Liverpool John Moores in 2009 with a degree in Media, Marketing and Cultural Studies, Natalie found herself working in the corporate world where she was able to make many valuable contacts within Liverpool.  Her passion was always to work in the creative industries, and she has now worked in music for over 6 years, building her reputation on helping local and well-known recording studios; music magazines and festivals manage their e-marketing, social media platforms, and building their brands online."
    },
    {
        name: "SARAH WATSON",
        job: "MARKETING ASSISTANT",
        description: "Sarah graduated with a degree in Drama and Theatre Studies from the University of Chester in 2014. She has worked within various areas of the arts sector such as  Theatre in Education and arts administration. Sarah particularly enjoys marketing and being part of an events team."
    }




]
var photoData = [{
        img: "/img/img1.jpg",
        title: "First photo"
    },
    {
        img: "/img/img2.jpg",
        title: "Second photo"
    },
    {
        img: "/img/img3.jpg",
        title: "Third photo"
    },

]

function seedDB() {
    Testimonial.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed shit");

        data.forEach(function (seed) {
            Testimonial.create(seed, function (err, test) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("added");
                }
            })
        })
    })
    Employee.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed employees");

        employeeData.forEach(function (seed) {
            Employee.create(seed, function (err, employee) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("added employee");
                }
            })
        })
    })
    Photos.remove({}, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("removed photos");

        photoData.forEach(function (seed) {
            Photos.create(seed, function (err, photo) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("added photo");
                }
            })
        })
    })

}


module.exports = seedDB;