

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
                description : "3D Model designed for the purpose of 3d printing. The model was printed in both SLA and FDM. The render is fairly close to the real product. The translucent parts were resin printed.",
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
                title : "Printe",
                description : "yapping",
                src : "images/printing/print1.png",
                links : {
                    thingiverse : {URL : "https://www.thingiverse.com/thing:1234567", alt:"Thingiverse"},
                    github : {URL : "", alt:"Github"}



                    }
                },
                ],
        },

            
}