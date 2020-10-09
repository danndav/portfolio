import k from './img/gidigasweb.e233bdbe.png'
import r from './img/Screenshot 2020-10-08 at 17.13.31.png'
import d from './img/Screenshot 2020-10-08 at 17.12.58.png'
import e from './img/Screenshot 2020-10-08 at 19.12.17.png'
import f from './img/Screenshot 2020-10-08 at 19.12.43.png'

export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'dandave❤.',
        headerTagline: [//Line 1 For Header
                        "Hi 👋 You found me! I'm David Daniel.",
                        //Line 2 For Header
                        'A Software Engineer',
                        //Line 3 For Header
                        'from Nigeria'
    ],
        //Contact Email
        contactEmail:'danndavee@gmail.com',
        // Add Your About Text Here
        abouttext: "I'm  an Experienced Software Engineer with a demonstrated history of working in the financial services industry. Skilled in PHP, ReactJS, nodeJS , and Management. Strong engineering professional graduated from Yaba College of Technology, Yaba, Lagos. ",
        aboutImage:'https://images.unsplash.com/photo-1521587765099-8835e7201186?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Gidi Gas  .', //Project Title - Add Your Project Title Here
             service:'A gas delivery company', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:`${k}`,
             //Project URL - Add Your Project Url Here
             url:'3'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'esettlement website',
                service: 'Website Development',
                imageSrc:`${r}`,
                url: '#'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: ' agent admin',
                service: 'An onboarding agent dashboard ',
                imageSrc:`${d}`,
                url: '#'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Contentionary',
                service: 'a dashboard system to control Student exams',
                imageSrc:`${e}`,
                url: '#'
           },

           {
            id: 5,//DO NOT CHANGE THIS (Please)😅
            title: 'Contentionary Dashboard',
            service: ' ',
            imageSrc:`${f}`,
            url: '#'
       }

                    /*

                    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
                ,{
                id: 5,
                title: 'Project Five',
                service: 'Something Amazing',
                imageSrc: "",
                url: ''
            }
                */
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'https://github.com/danndav/'},
            
            {
                name: 'Linkedin',
                url: 'https://www.linkedin.com/in/daniel-imodoye-david/'
            }

        ]
    }