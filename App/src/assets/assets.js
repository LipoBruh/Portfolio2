

export const HEADER = 
{ 
    PFP : { src: "images/PFP.png", alt: ":)",  },
    education : ["B.Sc. Microbiology & Immunology","B.Sc. Computer Science"],
    links :{
        email : {URL:"emanuelrollin@umontreal.ca", src:"icons/envelope.svg", alt:"Email"},
        github : {URL : "https://github.com/LipoBruh", src:"icons/github.svg", alt:"Github"},
        linkedin : {URL : "https://www.linkedin.com/in/émanuel-rollin-2b7973322/", src:"icons/linkedin.svg", alt:"LinkedIn"},
        thigniverse : {URL : "https://www.thingiverse.com/lipo_bruh/designs", src:"icons/boxes.svg", alt:"Thingiverse"},	
    }
};

export const BODY = {

    homepage:{

            name : "Home",
            path: "/",
            index:true,

    },

    routes: {
            
        "3D Modeling" : {
            name : "3D Modeling",
            path: "/3DModeling",
            index:true,
            description : "I picked up 3D modeling many years ago to create assets for video editing. I have many years of experience with Blender as a hobbyist and with 3D printing, it led me to apply my skills to applications beyond the digital realm.",
            projects : 
            [
                { 
                    title : "Pixelated Field",
                    description : "Fun render of a mimic in the context of a sticker making activity. Each participant was meant to produce some digital art and I chose my favorite medium. ",
                    src : "images/3d/blender_mimic.png",
                    links : {
                        thingiverse : {URL : "", alt:"Thingiverse"},
                        github : {URL : "", alt:"Github"}
                        }
                },

                { 
                    title : "Pixelated Field",
                    description : "Fun little render I have made recently. Procedural water textures, hair simulation for clusters of grass, procedural silt texture. The chicken model is the cherry on top. Lighting is still flat, but I liked the direction.",
                    src : "images/3d/blender_chicken.png",
                    links : {
                        thingiverse : {URL : "", alt:"Thingiverse"},
                        github : {URL : "", alt:"Github"}
                        }
                },

                { 
                    title : "Trophee for AEDIROUM",
                    description : "3D Model designed for the purpose of 3d printing. The model was printed in both SLA and FDM. The render is fairly close to the real product. The translucent parts were resin printed. The couch was 3d scanned and belongs to the living room of the AEDIROUM.",
                    src : "images/3d/blender_trophee.png",
                    links : {
                        thingiverse : {URL : "", alt:"Thingiverse"},
                        github : {URL : "", alt:"Github"}
                        }
                },

                { 
                    title : "Early attempt at realism",
                    description : "This is an early attempt at realism. Utilizing various maps to add detail to the model and using procedural shading. Some post processing was also added to add chromatic aberration and flares.",
                    src : "images/3d/blender_gun.png",
                    links : {
                        thingiverse : {URL : "", alt:"Thingiverse"},
                        github : {URL : "", alt:"Github"}
                        }
                },

                { 
                    title : "Character meshes rigged for posing",
                    description : "These are examples of meshes that were rigged and posed to be exported in unity. They were among the first models I created in Blender.",
                    src : "images/3d/blender_armatures.png",
                    links : {
                        thingiverse : {URL : "", alt:"Thingiverse"},
                        github : {URL : "", alt:"Github"}
                        }
                },

                { 
                    title : "Bedroom render",
                    description : "Old render of a stylized bedroom. A lot has been learned since that. We can see the floor texture applied quite sloppily. The lighting is also quite flat.",
                    src : "images/3d/blender_bedroom.png",
                    links : {
                        thingiverse : {URL : "", alt:"Thingiverse"},
                        github : {URL : "", alt:"Github"}
                        }
                },

                { 
                    title : "Ramen Render",
                    description : "Another attempt at realism. There are some strengths and weaknesses. Some items like the chopstick, the bowl and table are decent. The broth  and ingredients are not great. The HDRI makes the lighting look good but the world background does not match the scene. ",
                    src : "images/3d/blender_ramen.png",
                    links : {
                        thingiverse : {URL : "", alt:"Thingiverse"},
                        github : {URL : "", alt:"Github"}
                        }
                },

                { 
                    title : "Master Sword Mesh",
                    description : "This model was entirely designed with the purpose of 3d printing in mind. It keeps track of tolerances and is designed in a way that required no support while printing. If you own a 3D printer, you can print your own if you have a look at my Thigniverse :)",
                    src : "images/3d/blender_sword.png",
                    links : {
                        thingiverse : {URL : "", alt:"Thingiverse"},
                        github : {URL : "", alt:"Github"}
                        }
                },

            ]},



        "3D Printing" : {
            name : "3D Printing",
            path: "/3DPrinting",
            index:false,
            description : "A hobby I have picked up a few years after 3D modeling. It synergizes well with my 3D modeling skills and allows me to create physical objects from my designs. I have experience with FDM and SLA printing, and have worked with a variety of materials such as PLA, ABS, and resin.",
            projects : [
                { 
                    title : "3D printed and painted puzzle pieces",
                    description : "I found a way to 3d model a puzzle set procedurally using bezier curves. I fine tuned the printer to print with small tolerances and painted over the pieces. We can see on the left piece the print lines. The besier curves were generated by a web application and exported from the SVG canvas.",
                    src : "images/printing/printing_puzzle2.jpg",
                    links : {
                        thingiverse : {URL : "", alt:"Thingiverse"},
                        github : {URL : "", alt:"Github"}



                        }
                    },

                    { 
                        title : "Master Sword",
                        description : "Holiday gift given to my sister. It was designed so the sword can be assembled without using supports in the slicer. You might recognize the Master Sword from the Zelda franchise. The 3d model is available on my Thingiverse page to print.",
                        src : "images/printing/printing_sword.jpg",
                        links : {
                            thingiverse : {URL : "", alt:"Thingiverse"},
                            github : {URL : "", alt:"Github"}
        
        
        
                            }
                        },
        

                    { 
                        title : "Trophee for Tournament",
                        description : "This trophee was made for the infamous game of cards that is systematically played among the computer science students (Spades variant). The 3d print uses both the FDM and SLA technologies.",
                        src : "images/printing/printing_aediroum.png",
                        links : {
                            thingiverse : {URL : "", alt:"Thingiverse"},
                            github : {URL : "", alt:"Github"}
        
        
        
                            }
                        },

                        { 
                            title : "Gift for my Brother",
                            description : "The paths were traced with splines, converted to mesh and exported as .stl to be 3d printed in black over a few layers of white. The image is an iconic frame of the manga Dragon Ball. ",
                            src : "images/printing/printing_goku.png",
                            links : {
                                thingiverse : {URL : "", alt:"Thingiverse"},
                                github : {URL : "", alt:"Github"}
            
            
            
                                }
                        },

                        { 
                            title : "Chess pieces",
                            description : "Instance of me altering the 3d model of someone else to make it 3d printer friendly.",
                            src : "images/printing/printing_chess.png",
                            links : {
                                thingiverse : {URL : "", alt:"Thingiverse"},
                                github : {URL : "", alt:"Github"}
            
            
            
                                }
                        },

                        { 
                            title : "SLA print",
                            description : "The technology used by this printer is quite clever. It uses UV light to cure the plastic and an lcd screen to block the light. Here is a 3d model of the tarrasque, rigged and posed to make the creature printer friendly.",
                            src : "images/printing/printing_tarrasque.png",
                            links : {
                                thingiverse : {URL : "", alt:"Thingiverse"},
                                github : {URL : "", alt:"Github"}
            
            
            
                                }
                        },


                ],
            },



            "Adobe" : {
                name : "Adobe",
                path: "/Adobe",
                index:false,
                description : "A hobby I have picked up a few years after 3D modeling. It synergizes well with my 3D modeling skills and allows me to create physical objects from my designs. I have experience with FDM and SLA printing, and have worked with a variety of materials such as PLA, ABS, and resin.",
                projects : [


                    { 
                        title : "Adobe Lightroom",
                        description : "Great tool to use for photography. I love macro photography the most, but lightroom is essential for astrophotography and bringing out hidden details.",
                        src : "images/adobe/lightroom1.png",
                        links : {
                            }
                        },
        
                    
                    { 
                        title : "Adobe Photoshop",
                        description : "Example of collage that I made with photoshop. The main image is generated via Midjourney back when the technology was still quite novel. Now we associate image generation with low effort slop (which is true). ",
                        src : "images/adobe/photoshop1.png",
                        links : {
                            }
                        },

        
                    { 
                        title : "Brush art",
                        description : "A few years ago I tried to learn how to draw by taking inspiration from YouTube guides. The hard part is achieving something interesting without a reference. This is an instance of me benchmarking my aptitudes by producing something entirely novel.",
                        src : "images/adobe/photoshop5.png",
                        links : {
                                }
                        },

                    { 
                        title : "Pixel art",
                        description : "Another collage made for the D&D club we started on campus. It is among the largests student clubs and is definitely successful. To create such a large structure that connects to hundreds is an achievement.",
                        src : "images/adobe/photoshop3.png",
                        links : {
                            }
                        },
                { 
                        title : "Mixing aptitudes",
                        description : "Another collage made for the student association. There are some elements made in illustrator here like most of the vector art. Only the logos and texts where handled in photoshop.",
                        src : "images/adobe/photoshop4.png",
                        links : {
                            }
                        },

                { 
                        title : "Adobe Illustrator",
                        description : "Illustrator is for me is a tool to make vectorial assets. I use it when I make custom emojis or icons. You can also export SVG shapes and use them in blender if you prefer the workflow in illustrator.",
                        src : "images/adobe/illustrator1.png",
                        links : {
                            }
                        },
                    ],
                },

    
                
            "Microbiology" : {
                name : "Microbiology",
                path: "/Microbiology",
                index:false,
                description : "My first career was as a microbiologist. I have worked in quality insurance of human derived products like blood, plasma, tissues and stem cells. Working in a highly regulated environment made me a rigorous and careful worker. I still feel a lot of passion towards this field and I am always eager to chat with fellow colleagues.",
                projects : [


                    { 
                        title : "Qualification of stem cells donors.",
                        description : "I used to work in a blood bank. The process of qualifying blood extracted from the ombelical cord was fairly simple. A sample is extracted and marked with antibodies so that we can identify populations of cells on a dot plot. The axis depend on the metrics choosed to represent the populations, but is it related to fluorescence induced by the modified antibodies, size of the cells, granularity of the cells..." ,
                        src : "images/microbiology/microbiology1.jpg",
                        links : {
                            }
                        },
        
                    
                { 
                        title : "Qualification of milk donors.",
                        description : "Here, we measure bacterial growth of the milk at different dilutions to estimate the concentration of bacterias present in the milk (some is acceptable). The streaking here is composed of bacterial colonies, the identification was labelled as probable Staphylococcus aureus." ,
                        src : "images/microbiology/microbiology2.jpg",
                        links : {
                            }
                        },

                { 
                        title : "Peak through my microscope",
                        description : "We can observe pancreatic acinar cells. The stain is hematoxylin & eosin. Hematoxylin stains the genetic material in a darker color. Eosin stains cationic material, like cytoplasmic proteins. This photo was taken through my microscope at home." ,
                        src : "images/microbiology/microbiology3.jpg",
                        links : {
                            }
                        },

                { 
                        title : "Stem cell colonies",
                        description : "Stem cells can be incubated on a gel medium. Some population of cells will divide to form colonies of up to 1000 individuals. We can count up to 100 colonies on an incubated sample. The count of colonies is a metric of quality of the donor blood containing the stem cells." ,
                        src : "images/microbiology/microbiology5.png",
                        links : {
                            }
                        },
                    
                { 
                        title : "My old routine",
                        description : "The first step of the process of qualifying blood containing stem cells is simply to do a blood count. Pipette a few microliters of the blood with a washing solution and count the cells at the Coulter blood cell counter." ,
                        src : "images/microbiology/microbiology4.jpg",
                        links : {
                            }
                        },
                    
                    ],
                },


                
                "Web Development" : {
                    name : "Web Development",
                    path: "/Web",
                    index:false,
                    description : "Nowadays, most of my personal projets are web based. I have become quite proficient with both the frontend and backend subtleties. The freedom of web development is pleasant and the tools are numerous to assist your creativity.",
                    projects : [
        
        
                        { 
                            title : "Calque Web App prototype",
                            description : "The Calque web app prototype was a summer project realized under the supervision of a software engineering teacher. The app is an interactive map generator that uses a SVG canvas to handle the creation of your custom map. It is envisioned as both an annotation tool and as a progressive web app that can provide interactive elements to explore destinations and itineraries. " ,
                            src : "images/web/web_calque.png",
                            links : {
                                }
                            },

                        { 
                            title : "Three.js and 3D",
                            description : "Again, we find an opportunity to use 3D elements inside our creations. Here, I have designed a robot, rigged it with an armature and defined animations in blender with the NLA editor. That asset can be imported into our project (visualized here in the three.js editor) and wired to our logic." ,
                            src : "images/web/web_crap.png",
                            links : {
                                }
                            },

                        { 
                            title : "A tree in Three.js",
                            description : "In the infamous computer graphics course in computer science, we had to generate and animate a mesh from using only splines and matrix transformations. The scene isn't the interesting part, but rather the logic behind the method used to generate the tree." ,
                            src : "images/web/web_tree.png",
                            links : {
                                }
                            },
                        
                        { 
                            title : "Multiplayer Tic Tac Toe",
                            description : "My lastest project is a simple one, make a tic tac toe game that is multiplayer using websockets, then deploy it on discord activities. I will make sure to link it here once it is fully done. The React Three Fiber library makes Three.js much more interactive and accessible. " ,
                            src : "images/web/web_crap2.png",
                            links : {
                                }
                            },

                                            
                        { 
                            title : "My portfolio",
                            description : "This portfolio is also a web project! In fact, this is the refactored version, remade from scratch to solve the minor bugs, add structure and clarity and make the website auto generating, such that only the assets.js file dictates the content of the website, the routes and the pages are created automatically. It was a good excuse to play with React-Router and master the useEffect and useState hooks. The first version was styled with Bootstrap. This one is styled with Tailwind." ,
                            src : "images/web/web_portfolio.png",
                            links : {
                                }
                            },

                        ],
                    },

                    "Coding" : {
                        name : "Coding",
                        path: "/Coding",
                        index:false,
                        description : "My favorite typed languages are Java and Typescript. Most of my bigger projects are web based, but once in a while I can make a python script to help me do a thing or two. ",
                        projects : [
            
            
                            { 
                                title : "Othello game on web app",
                                description : "Small Python web app made with Streamlit (interface). The automatons used minimax (with alphabeta pruning) and montecarlo tree search to perform their actions. " ,
                                src : "images/coding/othello.gif",
                                links : {
                                    }
                        },

                        { 
                            title : "Discord Bot",
                            description : "During my first year, I designed a discord bot for the purpose of assisting the D&D club with utilities, some related to the hobby, like dice rolling and encounter generation. Others were simply to manage users more easily. The script was made in Python and uses the Discord API." ,
                            src : "images/coding/code_bot1.png",
                            links : {
                                }
                        },

                            ],
                        },
        }
}