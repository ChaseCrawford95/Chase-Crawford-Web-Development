// "I develop in these areas" section --------------------------------------
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
// About me section-------------------------------------------------------------------------
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
// Tool belt section-----------------------------------------------------------
const PythonTopLayer = document.getElementById("PythonTopLayer");
const PythonColoredBox = document.getElementById("PythonColoredBox");
const PythonText = document.getElementById("PythonText");
const JavaTopLayer = document.getElementById("JavaTopLayer");
const JavaColoredBox = document.getElementById("JavaColoredBox");
const JavaText = document.getElementById("JavaText");
const CTopLayer = document.getElementById("CTopLayer");
const CColoredBox = document.getElementById("CColoredBox");
const CText = document.getElementById("CText");
const AssemblyTopLayer = document.getElementById("AssemblyTopLayer");
const AssemblyColoredBox = document.getElementById("AssemblyColoredBox");
const AssemblyText = document.getElementById("AssemblyText");
const KotlinTopLayer = document.getElementById("KotlinTopLayer");
const KotlinColoredBox = document.getElementById("KotlinColoredBox");
const KotlinText = document.getElementById("KotlinText");
const SwiftTopLayer = document.getElementById("SwiftTopLayer");
const SwiftColoredBox = document.getElementById("SwiftColoredBox");
const SwiftText = document.getElementById("SwiftText");
const JavaScriptTopLayer = document.getElementById("JavaScriptTopLayer");
const JavaScriptColoredBox = document.getElementById("JavaScriptColoredBox");
const JavaScriptText = document.getElementById("JavaScriptText");
const SQLiteTopLayer = document.getElementById("SQLiteTopLayer");
const SQLiteColoredBox = document.getElementById("SQLiteColoredBox");
const SQLiteText = document.getElementById("SQLiteText");
const HTMLTopLayer = document.getElementById("HTMLTopLayer");
const HTMLColoredBox = document.getElementById("HTMLColoredBox");
const HTMLText = document.getElementById("HTMLText");
const CSSTopLayer = document.getElementById("CSSTopLayer");
const CSSColoredBox = document.getElementById("CSSColoredBox");
const CSSText = document.getElementById("CSSText");
const XMLTopLayer = document.getElementById("XMLTopLayer");
const XMLColoredBox = document.getElementById("XMLColoredBox");
const XMLText = document.getElementById("XMLText");
const FXMLTopLayer = document.getElementById("FXMLTopLayer");
const FXMLColoredBox = document.getElementById("FXMLColoredBox");
const FXMLText = document.getElementById("FXMLText");
PythonTopLayer.addEventListener("mouseover", () => {
    PythonColoredBox.style.width = "395px";
    PythonText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
PythonTopLayer.addEventListener("mouseout", () =>{
    PythonColoredBox.style.width = "0px";
    PythonText.style.animation = "TextMoveBack 1s ease forwards"
})
JavaTopLayer.addEventListener("mouseover",()=>{
    JavaColoredBox.style.width = "395px";
    JavaText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
JavaTopLayer.addEventListener("mouseout",()=>{
    JavaColoredBox.style.width = "0px";
    JavaText.style.animation = "TextMoveBack 1s ease forwards"
})
CTopLayer.addEventListener("mouseover",()=>{
    CColoredBox.style.width = "395px";
    CText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
CTopLayer.addEventListener("mouseout", ()=>{
    CColoredBox.style.width = "0px";
    CText.style.animation = "TextMoveBack 1s ease forwards"
})
AssemblyTopLayer.addEventListener("mouseover", ()=>{
    AssemblyColoredBox.style.width = "395px"
    AssemblyText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
AssemblyTopLayer.addEventListener("mouseout", ()=>{
    AssemblyColoredBox.style.width="0px";
    AssemblyText.style.animation = "TextMoveBack 1s ease forwards"
})
KotlinTopLayer.addEventListener("mouseover", ()=>{
    KotlinColoredBox.style.width = "395px";
    KotlinText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
KotlinTopLayer.addEventListener("mouseout",() =>{
    KotlinColoredBox.style.width = "0px";
    KotlinText.style.animation = "TextMoveBack 1s ease forwards"
})
SwiftTopLayer.addEventListener("mouseover", ()=>{
    SwiftColoredBox.style.width = "395px"
    SwiftText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
SwiftTopLayer.addEventListener("mouseout",()=>{
    SwiftColoredBox.style.width = "0px"
    SwiftText.style.animation = "TextMoveBack 1s ease forwards"
})
JavaScriptTopLayer.addEventListener("mouseover", ()=>{
    JavaScriptColoredBox.style.width= "395px"
    JavaScriptText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
JavaScriptTopLayer.addEventListener("mouseout", ()=>{
    JavaScriptColoredBox.style.width= "0px"
    JavaScriptText.style.animation = "TextMoveBack 1s ease forwards"
})
SQLiteTopLayer.addEventListener("mouseover", () =>{
    SQLiteColoredBox.style.width = "395px";
    SQLiteText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
SQLiteTopLayer.addEventListener("mouseout", () =>{
    SQLiteColoredBox.style.width = "0px";
    SQLiteText.style.animation = "TextMoveBack 1s ease forwards"
})
HTMLTopLayer.addEventListener("mouseover", ()=>{
    HTMLColoredBox.style.width = "395px";
    HTMLText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
HTMLTopLayer.addEventListener("mouseout", ()=>{
    HTMLColoredBox.style.width = "0px";
    HTMLText.style.animation = "TextMoveBack 1s ease forwards"
})
CSSTopLayer.addEventListener("mouseover", ()=>{
    CSSColoredBox.style.width = "395px"
    CSSText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
CSSTopLayer.addEventListener("mouseout", ()=>{
    CSSColoredBox.style.width = "0px"
    CSSText.style.animation = "TextMoveBack 1s ease forwards"
})
XMLTopLayer.addEventListener("mouseover", () =>{
    XMLColoredBox.style.width = "395px"
    XMLText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
XMLTopLayer.addEventListener("mouseout", () =>{
    XMLColoredBox.style.width = "0px"
    XMLText.style.animation = "TextMoveBack 1s ease forwards"
})
FXMLTopLayer.addEventListener("mouseover", ()=>{
    FXMLColoredBox.style.width = "395px"
    FXMLText.style.animation = "TextMoveRight 1s ease forwards,TextOpacityChange 0.5s ease forwards"
})
FXMLTopLayer.addEventListener("mouseout", ()=>{
    FXMLColoredBox.style.width = "0px"
    FXMLText.style.animation = "TextMoveBack 1s ease forwards"
})