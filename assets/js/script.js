const style = document.createElement('style');
const cssContent = `

@media (max-width:600px){
    @font-face {
        font-family: Avenir-Bold;
        src: url(../fonts/AvenirNextLTPro-Bold.otf);
    }
    @font-face {
        font-family: Avenir-Regular;
        src: url(../fonts/AvenirNextLTPro-Regular.otf);
    }
    @font-face {
        font-family: comics;
        src: url(../fonts/Master\ of\ Comics\ Personal\ Use.ttf);
    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    img{
        width: 100%;
    }
    a{
        text-decoration: none;
    }
    p{
        font-size: 3vw;
    }
    h2{
        font-size: 6vw;
    }
    .btn {
        border-radius: 13px;
        border: .6vw solid #FF56BB;
        background: linear-gradient(180deg, #FB61BD 0%, #FA7BFE 100%);
        box-shadow: 0px 13px 57px -13px rgba(255, 16, 159, 0.72);
        color: #040303;
        font-family: Avenir-Bold;
        font-style: normal;
        font-size: 3vw;
        font-weight: 700;
        letter-spacing: 1.8px;
        text-transform: uppercase;
        padding: 3vw 8vw;
        transition:  .5s ease-in-out;
    }
    .btn:hover {
        border: .6vw solid #ffff40;
        background: linear-gradient(180deg, #ce2bd1 0%, #FA7BFE 100%);
        box-shadow: 0px 13px 57px -13px rgba(255, 16, 159, 0.72);
    }

    
/* ---------------------header------------
------------------------ */
.header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 5vw 7vw 5vw;
    background-position: top center;
    background-size: cover;
}
.header h1{
    font-family: Spicy Soup;
    font-size: 7vw;
}
.header nav{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 2vw;
}
.header nav .logo img{
    width: 20%;
}
.header nav .social-icons {
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1.2vw;
}


.header nav .social-icons .bt:nth-of-type(1) img {
    width: 21vw;
}

.header nav .social-icons .bt:nth-of-type(2) img {
    width: 15vw;
}

.header nav .social-icons img{
    width: 8vw;
    transition: all .4s;
}
.header nav .social-icons img:hover{
    transform: translateY(-5px);
}
.header .header-heading {
    width: 70%;
    animation: swing;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-direction:reverse;
}
.header a img{
    width: 26vw;
    transition: all .3s ease-in-out;
}
.header a img:hover {
    transform: scale(1.1);
}
.header .character-1{
    width: 100vw;
    padding: 5vw 0;
    padding-bottom: 15vw;
}


.header h2 {
    position: relative;
    top: 2.5vw;
    font-size: 4vw; 
}

/* ---------------about-------------- */
.about{
    padding: 5vw 5vw;
    padding-top: 25vw;
    position: relative;
}
.about p{
    font-size: 4vw;
}
.star-groups{
    position: absolute;
    width: 90%;
    top: 25vw;
    left: 10vw;
}
.about div{
    padding: 10vw 14vw 13vw 14vw;
    background-size: 100% 100%;
    background-position: center center;
    position: relative;
}
.about div .about-img{
    position: absolute;
    bottom: 52vw;
    left: 1vw;
    width: 20vw;
}
.about div .cloud{
    position: absolute;
    width:10vw;
    top: -2vw;
    left: -2vw;
}
.about div .cloud-1{
    position: absolute;
    width:8vw;
    top: 6vw;
    right: -2vw;
}

/* ------------------images------------ */
.images{
    padding: 5vw 10vw;
    background-position: bottom center;
    background-size: 100% 30%;
}
.images .images-wrap{
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 5vw;
    justify-content: space-between;
}
.images .left{
    width: 90%;
}
.images .right {
    width: 90%;
}
.images h2{
    margin-top: 5vw;
    margin-bottom: 5vw;
}

.images a img {
    width: 19vw;
    margin-top: -3vw;
}

/* -----------------------------------choose---------------- */
.choose {
    padding: 0vw 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5vw;
    justify-content: space-between;
    margin-top: -4vw;
    margin-bottom: -5vw;
}
.choose .box {
    width:62%;
    padding: 2vw;
}
.choose .box p{
    font-size: 4.5vw;
}
.choose .box-1{
    background-size: 100% 100%;
    background-position: center center;
    padding: 18vw 10vw 18vw 2vw;
}
.choose .box-1 p{
    text-align: left;
}
.choose .box-2{
    background-size: 100% 100%;
    background-position: center center;
    padding: 18vw 15vw 18vw 15vw;
    margin-left: -5vw;
    width: 90%;
    margin: auto;
}
.choose .box-3{
    background-size: 100% 100%;
    background-position: center center;
    padding: 18vw 15vw 18vw 15vw;
    margin-left: -5vw;
    width: 90%;
    margin: auto;
}
.choose .box-4{
    background-size: 100% 100%;
    background-position: center center;
    padding: 18vw 15vw 18vw 15vw;
    margin-left: 0vw;
    width: 75%;
    margin-left: auto;
    margin-bottom: 3vw;
}
.choose .box-4 p{
    text-align: right;
}
/* ---------------------------htb------------------ */
.htb {
    display: flex;
    height: 170vw;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:15vw 10vw;
    position: relative;
    background-position: center center;
    background-size: 100% 100%;
    margin-top: -1.7vw;
}

.htb .partner {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8vw;
    position: absolute;
    top: 5vw;
}

.htb .partner a img {
    width: 20vw;
}

.htb .partner a:nth-of-type(3) img {
    width: 15vw;
}

.cloud-2{
    position: absolute;
    width: 9vw;
    top: 0vw;
    left: 12vw;
}
.cloud-3{
    position: absolute;
    width: 7vw;
    bottom: 8vw;
    right: 32vw;
}
.htb h2{
    position: absolute;
    top: 13vw;
}
.htb .htb-img{
    position: absolute;
    width: 65vw;
    margin-top: -10vw;
    padding-bottom: 10vw;
}
.htb .box{
    position: absolute;
    width: 40vw;
}
.htb .box p{
    color: #000;
    text-align: left;
}


.htb .box p span {
    font-size: 5vw;
    line-height: 150%;
}
.htb .box-1{
    padding: 5vw 6vw 16vw 3vw;
    left: 5vw;
    top: 22vw;
    background-size: 100% 100%;
    background-position: center center;
}
.htb .box-2{
    padding: 5vw 4vw 16vw 8vw;
    right: 5vw;
    top: 22vw;
    background-size: 100% 100%;
    background-position: center center;
}
.htb .box-3{
    padding: 18vw 4vw 10vw 4vw;
    left: 5vw;
    top: 100vw;
    background-size: 100% 100%;
    background-position: center center;
}
.htb .box-4{
    padding: 16vw 0vw 5vw 8vw;
    right: 5vw;
    top: 95vw;
    background-size: 100% 100%;
    background-position: center center;
}
    /* ----------final hulk------------ */

.final {
    width: 100%;
    padding: 7vw;
    padding-bottom: 0;
    padding-top: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-size: 225% 100%;
    background-position: top center;
    position: relative;
    margin-top: -39vw;
}

.final .cloud {
    position: absolute;
    width: 20vw;
    top: 0;
    left: 0;
    animation: root 15s infinite alternate-reverse;
}

@keyframes root {
    from {
        transform: translateX(0vw);
    }

    to {
        transform: translateX(80vw);
    }
}

.final .left {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2vw;
    padding-top: 15vw;
}

.final .left h2 {
    font-size: 6vw;
    color: black;
    -webkit-text-stroke: .1vw #fff;
    line-height: 120%;
    font-weight: 400;
}

.final .left p {
    font-size: 4.2vw;
    color: white;
    line-height: 120%;
    text-align: center;
}

.final .right {
    width: 50%;
}

.final .right img {
    width: 100%;
}


/* ----------footer------------ */

footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3vw;
    padding: 7vw 10vw;
    padding-top: 39vw;
    position: relative;
}

footer .cloud1 {
    position: absolute;
    width: 19vw;
    left: 0;
    top: 5vw;
    animation: root 10s infinite linear alternate;
}

footer .cloud2 {
    position: absolute;
    width: 15vw;
    top: 25vw;
    left: 0;
    animation: root 10s infinite alternate-reverse;
}

footer .star1 {
    position: absolute;
    width: 5vw;
    top: 15vw;
    right: 27vw;
    animation: scale 3s infinite alternate-reverse;
}

footer .star2 {
    position: absolute;
    width: 2.5vw;
    top: 29vw;
    right: 25vw;
    animation: scale 2s infinite alternate-reverse;
}

footer .star3 {
    position: absolute;
    width: 4vw;
    top: 10vw;
    left: 30vw;
    animation: scale 2.8s infinite alternate-reverse;
}

footer .star4 {
    position: absolute;
    width: 2.7vw;
    top: 25vw;
    left: 22vw;
    animation: scale 3.7s infinite alternate-reverse;
}

footer .bg {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: -1;
}

footer .stay {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-size: 100% 100%;
    padding: 7vw 11vw 7vw 9vw;
    position: relative;
}

footer .stay .left {
    width: 15%;
}


footer .stay .left img {
    width: 30vw;
    position: absolute;
    top: -36vw;
    left: 21vw;
    z-index: 1;
}

footer .stay .right {
    width: 100%;
    text-align: center;
    padding-bottom: 0;
}


footer .stay .right h2 {
    font-size: 6vw;
    color: black;
    -webkit-text-stroke: .1vw #fff;
    line-height: 120%;
    font-weight: 400;
}

footer .stay .right p {
    font-size: 3vw;
    color: white;
    line-height: 120%;
}

footer p.claim {
    text-align: center;
    font-size: 3.2vw;
    line-height: 120%;
}

footer .links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2vw;
}


footer .links a img {
    width: 8vw;
    border-radius: 2.5vw;
    box-shadow: 0 1.5vw 5vw 0vw rgba(0,0,0,.6);
}

footer ul.copy li {
    font-size: 2.5vw;
    text-align: center;
    font-family:  Spicy Soup;
}
}
`;

if (cssContent.trim() !== '') {
    style.textContent = cssContent;
    document.head.appendChild(style);
} else {
    console.error('No CSS content provided');
}
