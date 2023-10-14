import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import PortfolioElement from './PortfolioElement';

import LinkSpinSlash from '../Images/LinkSpinSlash.gif'
import ZeldaBkg from '../Images/zeldabackground.jpg';
import DiscordIcon from '../Images/DiscordIcon.png';
import DiscordBkg from '../Images/DiscordBackground.png';
import ViveBkg from '../Images/vive.png';
import MeVR1 from '../Images/demo1.png';
import MeVR2 from '../Images/demo2.png';
import ChessBkg from '../Images/chessbackground.jpg';
import ChessAnalysis from '../Images/chessanalysisstate3.png';
import NecrolithLogo from '../Images/necrolith.png';
import NecrolithBkg from '../Images/necrolithbkg.png';
import LinkedInProfile from '../Images/LinkedInProfile.png';
import NotesSrc from '../Images/notesbkg.png';



var zeldaDesc = "A re-creation of the original Legend of Zelda game's first dungeon, done for a project course at Ohio State. I worked on a team of six over the course of the semester and five sprints, following agile development methodoligies. I handled the enemy AI, enemy drop tables, room loading, and a lot of the play testing and bug fixing. The final sprint of the project was dedicated to adding our own unique features to the original game. I chose to add Link's iconic spinnig slash, which gave him the ability to deflect enemy projectiles as well as a challenging final boss with a variety of full screen attacks."
var discordBotDesc = "A discord bot I made for my own community of friends. Currently has four different commands that can be invoked with \"/\"."
var discordBotQuiz = "/quiz - prompts the user with a question and waits for their answer"
var discordBotProfile = "/profile - sends a custom porfile enlarging the user's avatar on a custom background"
var discordBotLeague = "/league - requires an player name as input, then scapes U.GG to return an embed containing the players profile"
var discordBotVoice = "/joinvoice - allows the bot to join voice channel and play a sound bite"
var vrProjectsDesc = "I designed several games in Unity to assist with Dr. Ooi's research into virtual reality and eye coordination. By sending a raycast to objects users focused on with their eyes, objects in the scene could be picked up and manipulated with just the eyes. I used this functionality to design games that allowed a user to train their vision convergence and divergence."
var chessPredictionsDesc = "A chess AI project built to predict both players chances of winning. Makes its prediction based on each players rating and the engine evaluation of the current position."
var chessExample = "\nIn this example the engine evaluation is +1.93, meaning white has a distinct advantage. As a result, whites chances of losing are very slim."
var necrolithCapstoneDesc = "This was my senior capstone project, an Action Role Playing Game (ARPG), designed with a group of 8. The primary features within the project I implemented were, passive skills, stat intializations, level loading, fast travel, and sounds."
var notesDesc = "Developed with Node.js, EJS, and MongoDB, my notes app is a user-friendly, versatile tool for capturing thoughts and ideas effortlessly. Users can create, delete, and update their notes anytime and anywhere."

function Portfolio() {

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div className='Portfolio'>
            <h1>Projects by Alan Wu</h1>
            <div className='desc-stuff element-stuff'>
                <img className='aboutme-image no-drag'
                    src={LinkedInProfile}
                    height='40%'
                    width='40%'/>
                <div className='element-desc'>
                    <div className='titles'>
                        <h2>
                            {"About Me"}
                        </h2>
                        <h3 className='subtitle'>
                            alanwu4232@gmail.com
                        </h3>
                    </div>

                    <h3 className='element-link'>
                    {/* </h3>
                    <h3 className='element-link'> */}
                    <def>{'\n\n'}<a onClick={() => {
                        ReactGA.event({
                            category: 'About Me',
                            action: 'Clicked LinkedIn Link'
                        });
                    }} className='element-link' target="_blank" rel="noopener noreferrer" href={"https://www.linkedin.com/in/alan-wu7/"}>{"LinkedIn"}</a>
                    </def><def>
                    {'\n\n'}<a onClick={() => {
                        ReactGA.event({
                            category: 'About Me',
                            action: 'Clicked Github Link'
                        });
                    }} className='element-link' target="_blank" rel="noopener noreferrer" href={"https://github.com/dullsword7"}>{"Github"}</a>
                    </def>
                    <def>
                    {/* </h3>
                    <h3 className='element-link'> */}
                    {/* {'\n\n'}<a onClick={() => {
                        ReactGA.event({
                            category: 'About Me',
                            action: 'Clicked Twitter Link'
                        });
                    }} className='element-link' target="_blank" rel="noopener noreferrer" href={"https://twitter.com/JBrowningIndie"}>{"Twitter"}</a> */}
                    </def>
                    </h3>
                    <p className='desc-pg'>
                        Hey, I'm Alan! Thanks for checking out my portfolio page.
                    </p><p className='desc-pg'>
                        I'm a graduate of The Ohio State University with a Bachelor of Science in Computer Science and Engineering.
                    </p><p className='desc-pg'>
                        I have a passion for <b><i>Game Development</i></b> and love programming all kinds of projects.
                        Outside of programming, I enjoy chess, exercising, and video games!
                        Feel free to reach out to me via email or LinkedIn!
                    </p><p className='desc-pg'>
                        Below are some of the projects I'm most proud of.
                    </p>
                </div>
            </div>

            <PortfolioElement
            bkgsrc={NecrolithBkg}
            vid={"VrURfU546ls"}
            title={"Necrolith"}
            subtitle={"C# | Unity | git"}
            desc={[necrolithCapstoneDesc]}
            links={[
                {
                    url: "",
                    text: ""
                }
            ]}
            />

            <PortfolioElement
            bkgsrc={ZeldaBkg}
            src={LinkSpinSlash}
            title={"Legend of Zelda Re-Creation"}
            subtitle={"C# | Monogame | Git"}
            desc={[zeldaDesc]}
            links={[
                {
                    url: "",
                    text: ""
                }
            ]}
            />

            <PortfolioElement
            bkgsrc={""}
            src={NotesSrc}
            title={"Notes Web App"}
            subtitle={"JavaScript | Node.js | EJS | MongoDB"}
            desc={[notesDesc]}
            links={[
                {
                    url: "",
                    text: ""
                }
            ]}
            />

            <PortfolioElement
            bkgsrc={DiscordBkg}
            src={DiscordIcon}
            title={"Discord Bot"}
            subtitle={"JavaScript"}
            desc={[discordBotDesc, discordBotProfile, discordBotQuiz, discordBotLeague, discordBotVoice]}
            links={[
                {
                    url: "",
                    text: ""
                }
            ]}
            />

            <PortfolioElement
            bkgsrc={ViveBkg}
            let bStyled = {{
                padding: '7%',
                width: '35%',
            }}
            src={MeVR1}
            title={"VR Projects"}
            subtitle={"C# | Python | Unity | git"}
            desc={[vrProjectsDesc]}
            links={[
                {
                    url: "",
                    text: ""
                }
            ]}
            />

            <PortfolioElement
            bkgsrc={ChessBkg}
            let bStyled = {{
                padding: '7%',
                width: '35%',
            }}
            src={ChessAnalysis}
            title={"Chess Predictions"}
            subtitle={"Python"}
            desc={[chessPredictionsDesc, chessExample]}
            links={[
                {
                    url: "",
                    text: ""
                }
            ]}
            />


            {/* <PortfolioElement
            bkgsrc={shadersBkg}
            src={shadersGif}
            title={"Shaders"}
            subtitle={"Unity Shader Graph | HLSL"}
            desc={[shaderDesc]}
            />

            <PortfolioElement
            bkgsrc={ld52Bkg}
            src={ld52Pic}
            title={"Ludum Dare 52"}
            subtitle={"C# | Unity | GIT"}
            desc={[ld52Desc]}
            links={[
                {
                    url: "https://ldjam.com/events/ludum-dare/52/completely-normal-garbageman-simulator",
                    text: "Game Link"
                },
                {
                    url: "https://github.com/jwbrowning/GarbageSimulator-code-samples",
                    text: "Code Samples"
                }
            ]}
            />

            <PortfolioElement
            bkgsrc={jamsBkg}
            src={jamsPic}
            title={"Game Jams"}
            subtitle={"C# | Unity | GIT | More"}
            desc={[ld52Desc]}
            links={[
                {
                    url: "https://sundancekid1019.itch.io/",
                    text: "Link to my Games"
                }
            ]}
            />

            <PortfolioElement
            bkgsrc={FootballBkg}
            src={FootballPic}
            title={"NFL Simulations"}
            subtitle={"C# | Python"}
            desc={[footballDesc]}
            link={""}
            /> */}
        </div>
    )
}

export default Portfolio;
