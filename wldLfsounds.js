// FETCH METHOD 
            //NOT ALL properties that were available in the fetch response were alterable in URL through putting those properties name(I tried). Only the ones selected & mentioned in the documentation were PUTTABLE in URL.
                                                                                                    //value take of params in frontend[done]
                                                                                                    //retrieve those values onclick[done]
//PROCess 1:  ATTRIBUTES GETTING THROUGH USER:
var cntr=""; var nam=[]; var genricNm=""; var gnder=""; var brdseen=""; var qlity=""; var grpNm=""; var spcs=""; var sbspcs=""; var stge="";
                                        function getVal2() {
                                            cntr="";
                                            const val1 = document.getElementById('cnt').value;//const val = document.querySelector('en').value;
                                            //console.log(val1);
                                         if(val1!=""){cntr="&cnt:"+val1}
                                         console.log(cntr)
                                          }

//USER:   IF JUST PARTIAL NAME IS WRITTEN LIKE 'bird', it gives all RESuLTS like 'hummingbird', etc, which contains word 'bird'.   tHIS IS ALSO NOW TRUE FOR OTHER PROPERTIES THAT ARE STRING.
                                          function getVal1() {
                                            var val2 = document.getElementById('en').value;
nam = [];//reinitializes the array, hence removing previous query present data.
                                            if(val2!=""){// ',' remover & '{space}' to + [for url formation].
                                                var val2a=val2.split('')

                                                 for(var i=0;i<=val2a.length;i++){//trying converting: 'David Bradley' to 'David+Bradley'
                                                    if(val2a[i]==' '){nam[i]='+';console.log(nam[i])}
                                                else{nam[i]=val2a[i]}}//the UPDATING ISN'T YET HAPPENING..
                                                 nam=nam.toString()

                                                        for(var i=0;i<nam.length;i++){//NO-NEED (comma removal from string after converting from array toString())
                                                             if(nam[i]==','){
                                                                for(var j=i;j<nam.length;j++){  // in (nam.length-(i+1))){
                                                                    nam[j]=nam[j+1]//nam[i]=nam[i+1]
                                                                 // i=i+1
                                                                 }}
                                                        } console.log("shouldbe Wihou',': ",nam)

                                            var nam2 = ""; var chck=0; // (comma removal from string after converting from array toString())
                                            for(var i=0;i<nam.length;i++){
                                                if(nam[i]!=','){nam2=nam2+nam[i]}
                                                chck=chck+1//to see looping
                                            } nam2=nam2+"+"//ADDITIONAL plus that is url requirement for the next param ahead.(IF next param IN url not present, this additional + doesn't affect fetch results.)
                                           console.log(nam2,chck,nam.length);}    
                                nam=nam2;
                                          }
                                     
                                          function getVal3() {
                                            genricNm="";
                                            const val3 = document.getElementById('gen').value;
                                         if(val3!=""){genricNm="&gen:"+val3}
                                         console.log(genricNm)
                                          }

                                          function getVal4() {
                                            grpNm="";
                                            const val4 = document.getElementById('grp').value; //const val = document.querySelector('grp').value;
                                         if(val4!=""){grpNm="&grp:"+val4}
                                         console.log(grpNm)
                                          }

                                          function getVal6() {
                                            qlity="";
                                            const val6 = document.getElementById('q').value;//const val = document.querySelector('q').value;
                                         if(val6!=""){qlity="&q:"+val6}//& removed from q bcz its the 2nd param in url and no need for & there to access it.
                                         console.log(qlity)
                                          }

                                          function getVal8() {
                                            brdseen="";
                                            const val8 = document.getElementById('bird-seen').value;//const val = document.querySelector('en').value;
                                         if(val8!=""){brdseen="&seen:"+val8}//not putting: playback:no (check docs: https://xeno-canto.org/help/search )
                                         console.log(brdseen)
//the URL ISN'T picking bird-seen property in it as reference to bird-seen property. i foundout. its property is bird-seen though, but URL retreives from &seen:no/yes ONLY, WHICH FURTHER SHOWS THAT URL FORMATION, ACCESSING AND FETCHING IS SEPARATE FROM PROPERTY NAMES, though can be same.
                                          }
                                          function getVal7() {
                                            gnder="";
                                            const val7 = document.getElementById('sex').value;
                                         if(val7!=""){gnder="&sex:"+val7}
                                         console.log(gnder)
                                          }               //  DEV:  MAJORITY OF THE FUNCS CAN BE MADE TO ONE TO WHOM 2 PARAMS ARE PASSED. like in below case: ONE 'stge' SECOND 'stage'.
                                                        // i.e 1st 'id' 2nd the variable-name (already created bfr as global, pointing currently to ""), that will have the result of the func stored and extracted for URL.

                                           function getVal13() {
                                            stge="";
                                            const val13 = document.getElementById('stage').value;
                                         if(val13!=""){stge="&stage:"+val13}
                                         console.log(stge)
                                          }
                                          function getVal14() {
                                            sbspcs="";
                                            const val14 = document.getElementById('ssp').value;
                                         if(val14!=""){sbspcs="&ssp:"+val14}
                                         console.log(sbspcs)
                                          }
  var rcrdstNm=[];
  //USER:   the URL ISN'T picking 'rec:james+bradly' property in it as reference to 'james bradly' value of 'rec' property.
                                          function getVal5() {
                                            rcrdstNm=[];//reinitializes the array. by "" wasn't working as its array and giving undefined.
                                            const val5 = document.getElementById('rec').value;//const val = document.querySelector('en').value;
                                            if(val5!=""){// ',' remover & '{space}' to + [for url formation].
                                                var val5a=val5.split('')

                                                 for(var i=0;i<=val5a.length;i++){
                                                    if(val5a[i]==' '){rcrdstNm[i]='+';console.log(rcrdstNm[i])}
                                                else{rcrdstNm[i]=val5[i]}}
                                                 rcrdstNm=rcrdstNm.toString()   //  similar methods as applied for 'nam' extraction in getVal1().
                                                 var rcrdstNm2 = ""; var chck=0;
                                                 for(var i=0;i<rcrdstNm.length;i++){
                                                     if(rcrdstNm[i]!=','){rcrdstNm2=rcrdstNm2+rcrdstNm[i]}
                                                     chck=chck+1
                                                 } 
                                                console.log(rcrdstNm2,chck,rcrdstNm.length);                                      
                                        
                                         rcrdstNm=`&rec:"${rcrdstNm2}"`
                                         console.log(rcrdstNm)}
                                          }

     var ltude=""; var lngtd=""; var rcrdnLngth="";//USER:  if ="" not added, undefined is given in its place in URL rather than empty value.
                                          function getVal9() {
                                            ltude="";
                                            const val9 = document.getElementById('lat').value;
                                         if(val9!=""){ltude="&lat:"+val9}
                                         console.log(ltude)
                                          }
                                          function getVal10() {
                                            lngtd="";
                                            const val10 = document.getElementById('lon').value;//const val = document.querySelector('lon').value;
                                         if(val10!=""){lngtd="&lon:"+val10}
                                         console.log(lngtd)
                                          }
var mnnt=0; var scnd=0; var tpeVoic=""; var datee="";
                                          function getVal11_Min() { 
                                            const val11a = document.getElementById('lengthMin').value;
                                         if(val11a!=""&&rcrdnLngth==""){mnnt=val11a;
                                                                        rcrdnLngth=`&len:${mnnt}:${scnd}`}
                                         else if(val11a!=""&&rcrdnLngth!=""){mnnt=val11a;
                                                                            rcrdnLngth=`&len:${mnnt}:${scnd}`}
                                         else if(val11a==""&&rcrdnLngth!=""){mnnt=0;
                                                                                rcrdnLngth=`&len:${mnnt}:${scnd}`}
                                         else if(val11a==""&&rcrdnLngth==""){//mnnt=val11a;
                                                                                    rcrdnLngth=`&len:${mnnt}:${scnd}`}
                            if(mnnt==0&&scnd==0){rcrdnLngth=""}
                                         console.log(rcrdnLngth)//IF SECONDS ADDED BFR, TROUBLE WITH URL CORRECT FORMATION.[done!!]
                                          }
                                          function getVal11_Sec(){
                                            const val11b = document.getElementById('lengthSec').value;
                                            if(val11b!=""&&rcrdnLngth!=""){scnd=val11b;
                                                                              rcrdnLngth=`&len:${mnnt}:${scnd}`}
                                            else if(val11b==""&&rcrdnLngth!=""){scnd=0;
                                                                                rcrdnLngth=`&len:${mnnt}:${scnd}`}//detect ':' and overite ahead
                                            else if(val11b!=""&&rcrdnLngth==""){ scnd=val11b;
                                                                                rcrdnLngth=`&len:${mnnt}:${scnd}`}
                                            else if(val11b==""&&rcrdnLngth==""){ //scnd=val11b;
                                                                                    rcrdnLngth=`&len:${mnnt}:${scnd}`}
                            if(mnnt==0&&scnd==0){rcrdnLngth=""}
                                          console.log(rcrdnLngth)
                                          }//now, THE mins sec update problem is solved.

                               function getVal17()
                                           {const val17b = document.getElementById('lenSec').value;
                                            rcrdnLngth="";
                                            if(val17b!=""){rcrdnLngth=`&len:"${val17b}"`}//BAD REQUEST 400 when type isn't matched.
                                            console.log(rcrdnLngth)}

//  THERE ARE STRINGS IN PROPERTY VALUES WHERE MULTIPLE VALUES R PRESENT LIKE INSTEAD OF 'typeOfVoice' as just 'call' or 'song', IT'S '(call, song)'.
// HENCE (I'VE TESTED) IF THE USER PUTS JUST 'song', the above mentioned string which though ISN'T JUST 'song' BUT CONTAINS the word 'song' WILL ALSO SHOW UP.(contrary to what i had previosely thought of it as literal string).

                                          function getVal15() { tpeVoic="";
                                            const val15 = document.getElementById('type').value;
                                         if(val15!=""){tpeVoic=`&type:"${val15}"`}
                                         console.log(tpeVoic)
                                          }

                                          function getVal16() { datee="";
                                            const val16 = document.getElementById('date').value;
                                         if(val16!=""){datee="&since:"+val16}
                                         console.log(datee)
                                          }
var mp3urlStay;    let mp3url="https:";   let DaTaActl;
function fetchit() //PROCess 2:  URL CONSTRUCTION
{ return new Promise(resolv => {//makes and returns the promise with the OBJECT/VARIABLE, that is PASSED B/W 'resolv()' on line 235.
const url0 = `https://xeno-canto.org/api/2/recordings?query=cnt:brazil`
const url1 = `https://xeno-canto.org/api/2/recordings?query=bearded+bellbird+q:A&cnt:brazil&page=1`
const urll='https://xeno-canto.org/api/2/recordings?query=bearded+bellbird+cnt:brazil+q:B+stage:adult'

var url2 = `https://xeno-canto.org/api/2/recordings?query=${nam}${qlity}${spcs}${cntr}${genricNm}${gnder}${brdseen}${grpNm}${sbspcs}${stge}${rcrdstNm}${rcrdnLngth}${tpeVoic}${datee}${ltude}${lngtd}`
var url2b =[];
            //var url3 = `https://xeno-canto.org/api/2/recordings?query=${nam}`


           var arrRectfy= [nam,qlity,spcs,cntr,genricNm,gnder,brdseen,grpNm,sbspcs,stge,rcrdstNm,rcrdnLngth,tpeVoic,datee,ltude,lngtd]//-  unused. Tried to make array, TRAVERSE THROUGH VALUES TO SEE WHICH ONE HAS 'undefined', then set that ONE TO =""; SO THAT IT DOESN'T INTERVENE IN THE URL.
           var l=0                                                                                                                   //-  otherwise i tested to find which variable HAS 'undefined' each one-by-one to find the issue var, taking alot of time.
/*           function rcrsChekNul(){        //(undefined removal logic)//it has been done through another way, though this method almost does it with issues of tostring and .search func.
            
            if(l==arrRectfy.length){return}
            else if (arrRectfy[l]==""){l++; rcrsChekNul();}

            else if(arrRectfy[l]!="")
            {                                            // var k=0
                                                        //while(k<arrRectfy[l].length){
   //          var strnArr=arrRectfy[l].toString;console.log(strnArr)
  //          if(strnArr.search('undefined')==true){console.log('undefined-FOUND!!%');} /*
//   DEV:    HOW TO NULL"" THE `ACTUAL VARIABLE ITSELF` & NOT THE VALUE OF IT STORED IN THE ARRAY???(as above if try/require)????? POINTERS?? LINKLISTS? }
                console.log(l,arrRectfy[l]); return;
//   DEV:    EVEN IF THE 'undefined' presence is searched and gotten, the actual variable will still remain inaccessibke to change unless linklist/pointers.
                                                         //k++}
            } rcrsChekNul();
*/

            //for(var j=0;j<url2.length;j++){
                //if(url2[j]=='&'){           //url2[j]="";}
                 var url2a=[]; url2a=url2.split(''); //compiling the URL to be used for API request. rectifying it to the needs of recognition.
                 var cnnt=0;
                     for(var i=0;i<url2.length;i++){
                        if(url2a[i]=='&'&&cnnt!=1){cnnt=1}
                        //addsdouble + {url2b=url2b+'+';}//does nothing actually{url2b[i]='+';/*cnnt=1;*/}//console.log(rcrdstNm[i])}
                        else if(url2a[i]=='&'&&cnnt==1){url2b=url2b+'+';}
                        else{url2b=url2b+url2a[i];}}
                    
                                                   url2a=url2a.toString()//noneed, though it'll transform into comma ',' strings.
                    console.log("B ONE: ",url2b,url2a.length);//UrL that is finally compiled that will be used as API url to make the REQUEST/.
                    
   //=document.getElementById('nxt');     //console.log("heres &GONE: ",url2)
 const requ = new Request(url2b, { }) //PROCess 3:  URL REQUESTING:
        
        async function GETDATA(){  //PROCess 4:  ASYNC FETCHING:
            try{
                const respo = await fetch(requ); console.log(respo)
                const DaTa = await respo.json()//returns a promise by converting JSONed-response into JS-object.
        
                if(respo.status===200){
                    console.log('SuCcEsS', DaTa)
                   console.log(DaTa.recordings[0].osci.small,"  initalPart")      //0  (of mp3 url extraction)
                   console.log(DaTa.recordings[0]['file-name'], "  specified part") //1  //accesses 'file-name' property without interpreting - as minus(no need for . here).
DaTaActl=DaTa;
resolv(DaTa)//sends/returns DaTa OBJECT back to fulfill Promise. 
    if (DaTa.numRecordings==0){//no recordings in results after query, then:
      window.alert("Sorry☹️! No recordings for this SEARCH found.\n Try sth Else.")}

     let mp3url0=`${DaTa.recordings[0].osci.small}`.split('')  // 2 (of mp3 url extraction)
 mp3url="https:"
    for(i=0;i<44;i++)    //extracting mp3 url for first time.
    {
      mp3url=mp3url+mp3url0[i]   // 3 (of mp3 url extraction)
    }
    mp3urlStay=mp3url;//the unitial URL portion extracted, that's same for every URL(that part, which isn't mp3 identifying).  https://xeno-canto.org/sounds/uploaded/XMFDPACYJN
console.log('initial url:  ', mp3url)

            
//const mp3sound = new Audio(mp3url)//not showed controls
//mp3sound.src=mp3url
//document.body.appendChild(mp3sound)
//document.getElementById('sound1').innerHTML=mp3sound


var mp3sound = document.createElement('audio').controls; //not showed controls
//mp3sound.id='sound1'
mp3sound.src = mp3url                                               
//document.getElementById("sound1").controls = true;
//document.getElementById('audio').innerHTML=mp3sound                   [unused stuff lines]
//document.body.appendChild(mp3sound)

let audd= document.getElementsByClassName('player')
audd.src=mp3url

//let audd2= document.getElementsById('aud')//thia one gives fetch error.
//audd2.src=mp3url


//mp3sound.play(); //autoplay

// const elem = document.querySelector("audio");

// elem.mp3sound.onaddtrack = (event) => {
//   trackEditor.addTrack(event.track);
// };

// elem.mp3sound.onremovetrack = (event) => {
//   trackEditor.removeTrack(event.track);
// };
               }
                else{
                    console.log('SeRVER erROR: ', DaTa)
            }
        }
             catch(err){console.log('FEtch errOR: ', err)}
        }

GETDATA()    })//promise return '})'
}//fetchit() END.
        //NOT USED FUNC:     //  tried to pass A PARAM AND BASED ON THAT PARAM, PUT THE .value of the doc @ the 'smp' id to that param. gave error on assignment.
            function nxtRcrdn(l){ mp3url=mp3urlStay;//initial url keeping
                document.getElementById('smp').value=l;
              // const mp3urlStay1=mp3urlStay; 
                mp3url=mp3url+DaTaActl.recordings[l]['file-name'] // 4 (of mp3 url extraction)
                console.log(mp3url,"  shouldBE")
                    //for(var j=0; j>=DaTa.recordings.length; j++){
                    //mp3urlStay=mp3urlStay+DaTa.recordings[j]['file-name']
                let mp3sound2 = document.getElementById('aud')
                mp3sound2.src=mp3url//Stay
                                                // }
                l=l+1;}

                //var l=3
   //document.getElementById('smp').value=l;  //trying to initializr the element value with one that is defined in js, but it says:  Uncaught TypeError: Cannot set properties of null (setting 'value')
                

var nmbar0="";
function getNmbRcrdn(){ nmbar0=""//emptying previos assignment of user.
    const nmbar=document.getElementById('smp').value//recording number by user retreived
    
    if(document.getElementById('smp').value=="")//if NO INPUT GIVEN in recording selection, the function ends/returns.
    {window.alert("No Selected Audio! \n Please ENTER AN AVAILABLE NUMBER TO RETRIEVE RECORDING🎶."); return}
nmbar0=nmbar//initializing a global var with local to be used outside.
console.log(nmbar0)
    mp3url="https:"
        let mp3url0=`${DaTaActl.recordings[nmbar0].osci.small}`.split('')//general part of url + some 10 alphabet category identifier.
        for(i=0;i<44;i++)
         {
            mp3url=mp3url+mp3url0[i]   // 3   //extracting the general part of the url along with the 10 unique aphabets (BDKRJDHHDJ) assigned to each category or sth that need to be extraxted for each url as i'm not sure about the category, PLUS THAT PORTION ISN'T PRESENT IN THE 'file-name' property which identifies each url differently. hence i have to extract it here from recordings[i].'osci.small'
         }
            mp3urlStay=mp3url;

    mp3url=mp3url+DaTaActl.recordings[nmbar0]['file-name'] // 4  //adding the mp3 'file' identifier last portion link to the general URL for .src ing the mp3 file.
console.log(mp3url,"  shouldBE")
let mp3sound2 = document.getElementById('aud')
//mp3sound2.src=mp3url
            const sondReq = new Request(mp3url, {//had to get mp3 link assigned in the <audio> if it exists and server hosts it.
                mode: 'no-cors'
            })
            async function fetcSondmp3(){// A:   NOT DOING AS INTENDED. I WANTED TO GIVE SERVER ERROR IF THE AUDIO ISN'T PRESENT. THE STATUS CODE CAN'T BE ACCESSED. SHOULD'VE BEEN: if url not providing audio in server, a w message is displayed to user that 'recording not available'.
            try{ mp3sound2.src=mp3url;
                //const respo1 = await fetch(sondReq); console.log(respo1)
                                                                //const DaTa4 = await respo1.json()
              //  if(respo1.status===200){mp3sound2.src=mp3url}

            //else {console.log('SeRVER erROR: ',respo1)}//, DaTa4)}
            }
        catch(err){console.log('FEtch errOR: ', err)}

        } fetcSondmp3();

}
//FOR ASYNC TO WORK ACROSS THE WHOLe async FUNC, a PROMISE IS CREATED FIRST IN THE FUNCTION FOR WHICH THE AWAITING IS TO BE DONE(AS IN line 180). AFTER THAT, 
//THE VAR LIKE 'resolv' wRITTEN bfR => STORES THE VALUE FOR WHICH WE ARE AWAITING BY PASSING THAT VALUE WHEN COMPILED IN ANY LINE OF 'fetchit()' iNTO THE 'resolve' like this: resolve(DaTa)[if we want DaTa object to be returned].
//if anything else IS TO BE RETURNED, THEN THAT INSTEAD IS PASSED INTO THE 'resolv(...)'. [AS fetchit() deals with numerous objects and variables, hence this way it knows what to return whem done].
async function DaTaActling(){//calling fetchit() through async promise method.
    const daa=await fetchit(); 
    console.log(daa, "Actdata");        //Qs:  WHY THIS ISN'T BEING RUN AFTER THE ABOVE FETCHIT FULLY RUNS AND EXITS?? ITS SUPPOSED TO BE ASYNC.[DONE.]
}

  function nxtit(){//moving to the next recording in array[position] by one upon 'next' button press.
    var oneadder=document.getElementById('smp').value
    oneadder++
    document.getElementById('smp').value=oneadder
    getNmbRcrdn();
  }




  

