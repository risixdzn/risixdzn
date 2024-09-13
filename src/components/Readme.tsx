import { shared_styles } from "@/lib/shared";
import { svg } from "@/lib/svg";
import { logo } from "../../public/Logo";
import { MapPin } from "../../public/MapPin";

export const styles = `
        ${shared_styles}

        .container{
            width: 100%;
            height: auto;
            display: flex;  
            flex-direction: column;          
            background-color: hsl(var(--background));
            padding: 24pt 68pt;
            justify-content: space-between;
            border-radius: var(--radius);
            gap: 40pt;
            max-width: 65rem;
        } 

        header{
            width: 100%;
            display:flex;
            align-items: center;
            justify-content: space-between;
        }
        
        #logo{
            width: 16pt;
            height: 13pt;
        }

        .logolinks{
            display: flex;
            align-items: center;
            gap: 28pt;
        }

        nav{
            display: flex;
            align-items: center;            
        }
        
        .navlinks{
            list-style: none;
            display: flex;
            gap: 28pt;
        }

        .navlinks > li >a{
            text-decoration: none;
            color: hsl(var(--foreground))
        }

        .navlinks > li:hover {
            text-decoration: underline;
            cursor: pointer;
        }

        .hero{
            display:flex;
            flex-direction: column;
            gap: 22pt;
        }

        .presentation{
            width: 100%;
            height: auto;
            display:flex;
            justify-content: space-between;
        }

        .presentation > .wrapper{
            display: flex;
            flex-direction: column;
            gap: 0;
        }

        .ricardoamorim{
            font-size: 32pt;
        }

        .role > span{
            font-weight: 600;
            color: hsl(var(--background));
            background-color: hsl(var(--foreground))
        }

        .location{
            display: flex;
            gap: 0.5rem;
            margin-top: 1rem;
        }

        .squarelogo{
            display:flex;
            align-items: center;
            justify-content: center;
            aspect-ratio: 1/1;
            background-color: hsl(var(--foreground));
            border-radius: var(--radius);
            height: 83pt;
            width: 83pt;            
        }

        .squarelogo > #logo{
            width: 29pt;
            height: 24pt;
            filter: invert(100%);
        }

        .presentation > .buttons{
            display: flex;
            gap: 10pt;
        }

        .buttons{
            display: flex;
            gap: 10pt;
        }

        #button{
            padding: 8pt 16pt;
            background-color: hsl(var(--foreground));
            color: hsl(var(--background));
            font-size: 12pt;            
            border: 2px solid hsl(var(--foreground));
            border-radius: 5pt;
        }

        #button:hover{
            background-color: rgba(0, 0, 0, 0.8);
            cursor: pointer;
            border: 2px solid rgba(0, 0, 0, 0.8);
        }

        #buttonsecondary{
            padding: 8pt 16pt;
            background-color: hsl(var(--background));
            color: hsl(var(--foreground));
            font-size: 12pt;
            border: 2px solid hsl(var(--foreground));
            border-radius: 5pt;
        }

        #buttonsecondary:hover{
            cursor: pointer;
        }

        .divider{
            width: 100%;
            height: 1px;
            background-color: hsl(var(--foreground));
        }

        @media only screen and (max-width: 768px) {
            .container{
                padding: 24pt 24pt;
            }

            .ricardoamorim{
                font-size: 20pt;
            }

            .mediumtext{
                font-size: 1.125rem !important;
                line-height: 1.75rem !important;
            }

            .readmemd{
                display: none
            }

            .squarelogo{
                height: 60pt;
                width: 60pt;            
            }
    
            .squarelogo > #logo{
                width: 29pt;
                height: 24pt;
                filter: invert(100%);
            }

            #button{
                font-size: 10pt;
            }

            #buttonsecondary{
                font-size: 10pt;
            }

            .location{
                font-size: 0.875rem;
            }
        }
    `;

export const html = `
        <div class='container'> 
            <header>
                <div class='logolinks'>
                    ${logo({
                        fill: "#000000",
                        width: "21.328",
                        height: "17.329",
                    })}     
                    <nav class='text-sm font-medium'>
                        <ul class='navlinks'>
                            <li>
                                <a href='https://ricardo.gg' target='_blank'>Portfolio</a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/ricardodotgg/' target='_blank'>Linkedin</a>
                            </li>
                            <li>
                                <a href='https://www.linkedin.com/in/ricardodotgg/' target='_blank'>Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <span class='text-sm readmemd'>readme.md</span>
            </header>
            <section class='hero'>
                <div class='presentation'>
                    <div class='wrapper'>
                        <span class='text-xl tracking-tight mediumtext'>Hi! I'm</span>
                        <h1 class='ricardoamorim font-semibold tracking-tighter'>Ricardo Amorim</h1>
                        <h2 class='role text-2xl font-normal tracking-tight mediumtext'>
                            a Brazilian <span>Web Developer</span>
                        </h2>
                        <span class='location'>${MapPin({
                            stroke: "#000000",
                            width: 20,
                            height: 20,
                        })} São Paulo, Brazil.</span>
                    </div>
                    <div class='squarelogo'>                          
                        ${logo({
                            fill: "#ffffff",
                            width: "28.992",
                            height: "23.994",
                        })}                 
                    </div>
                </div> 
                <div class='buttons'>
                    <a href='https://ricardo.gg' target='_blank'>
                        <button id='button' class='tracking-tight'>Check my work</button>
                    </a>                    
                    <a href='https://www.linkedin.com/in/ricardodotgg/' target='_blank'>
                        <button id='buttonsecondary' class='tracking-tight'>Contact me</button>
                    </a>
                </div>
            </section>
            <div class='divider'></div>
        </div>       
    `;

export const Readme = () => {
    return svg(styles, html, { height: "500" });
};
