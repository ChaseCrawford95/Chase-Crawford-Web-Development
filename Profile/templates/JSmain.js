const GeneralSWE = document.getElementById("GeneralSWE");
const BlueBall = document.getElementById("BlueBall");
const Text1 = document.getElementById("Text1");
const WebDevelopment = document.getElementById("WebDevelopment");
const OrangeBall = document.getElementById("OrangeBall");
const Text2 = document.getElementById("Text2");
const MobileDevelopment = document.getElementById("MobileDevelopment");
const RedBall = document.getElementById("RedBall");
const Text3 = document.getElementById("Text3");
const Name = document.getElementById("Name");
GeneralSWE.style.zIndex = "4";
WebDevelopment.style.zIndex = "4";
MobileDevelopment.style.zIndex = "4";
Text1.style.zIndex="3";
Text2.style.zIndex="3";
Text3.style.zIndex="3";
BlueBall.style.zIndex = "2";
OrangeBall.style.zIndex = "2";
RedBall.style.zIndex = "2";

GeneralSWE.addEventListener("mouseover", ()=>{
    Text1.style.animation = "Text1Drop 1s forwards";
    BlueBall.style.animation = "BlueBallRise 1s forwards, BlueBallExpand 1s forwards";
    GeneralSWE.style.zIndex = "4";
    WebDevelopment.style.zIndex = "4";
    MobileDevelopment.style.zIndex = "4";
    BlueBall.style.zIndex = "3";
    OrangeBall.style.zIndex = "2";
    RedBall.style.zIndex = "2";
})
GeneralSWE.addEventListener("mouseout", ()=>{
    BlueBall.style.animation = 'BlueBallShrink 1s forwards';
    Text1.style.animation = 'Text1Rise 1s forwards';

})

WebDevelopment.addEventListener("mouseover",()=>{
    Text2.style.animation = "Text2Drop 1s ease forwards";
    OrangeBall.style.animation = "OrangeBallRise 1s forwards,OrangeBallExpand 1s forwards";
    GeneralSWE.style.zIndex = "4";
    WebDevelopment.style.zIndex = "4";
    MobileDevelopment.style.zIndex = "4";
    BlueBall.style.zIndex = "2";
    OrangeBall.style.zIndex = "3";
    RedBall.style.zIndex = "2";
})
WebDevelopment.addEventListener("mouseout",()=>{
    OrangeBall.style.animation = 'OrangeBallShrink 1s forwards';
    Text2.style.animation = "Text2Rise 1s ease forwards";
})


MobileDevelopment.addEventListener('mouseover', () => {
    Text3.style.animation = "Text3Drop 1s forwards";
    RedBall.style.animation = 'RedBallRise 1s forwards, RedBallExpand 1s forwards';
    GeneralSWE.style.zIndex = "4";
    WebDevelopment.style.zIndex = "4";
    MobileDevelopment.style.zIndex = "4";
    BlueBall.style.zIndex = "2";
    OrangeBall.style.zIndex = "2";
    RedBall.style.zIndex = "3";
});

MobileDevelopment.addEventListener('mouseout', () => {
    RedBall.style.animation = 'RedBallShrink 1s forwards';
    Text3.style.animation = "Text3Rise 1s ease forwards";
});

const VerticalLine = document.getElementById('VerticalLine');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
image1.addEventListener('mouseover', () => {
    VerticalLine.style.backgroundColor = 'blue';
    VerticalLine.style.opacity = '1';
})
image1.addEventListener('mouseout', () => {
    VerticalLine.style = 'none 0.3s ease';
})
image2.addEventListener('mouseover', () => {
    VerticalLine.style.backgroundColor = 'orange';
    VerticalLine.style.opacity = '1';
})
image2.addEventListener('mouseout', () => {
    VerticalLine.style = 'none 0.3s ease';
})
image3.addEventListener('mouseover', () => {
    VerticalLine.style.backgroundColor = 'red';
    VerticalLine.style.opacity = '1';
})
image3.addEventListener('mouseout', () => {
    VerticalLine.style = 'none 0.3s ease';
})