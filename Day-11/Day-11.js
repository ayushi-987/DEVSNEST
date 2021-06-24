function basicFunction(ques,a,b,c,d,correct) {
    this.ques= ques,
    this.optiona=a,
    this.optionb=b,
    this.optionc=c,
    this.optiond=d,
    this.correct=correct;
  }
  const Quiz1 = new basicFunction('Javascript is _________ language.' ,'Application','Scripting','Programming','None of These','Scripting');
  
  document.getElementById("QUES1").innerHTML = Quiz1.ques;
  document.getElementById("option1.1").innerHTML = Quiz1.optiona;
  document.getElementById("option1.2").innerHTML = Quiz1.optionb;
  document.getElementById("option1.3").innerHTML = Quiz1.optionc;
  document.getElementById("option1.4").innerHTML = Quiz1.optiond;
  
  const Quiz2 = new basicFunction('JavaScript is ______ Side Scripting Language.','	None of These','ISP','Server','Browser','Browser');
  
  document.getElementById("QUES2").innerHTML = Quiz2.ques;
  document.getElementById("option2.1").innerHTML = Quiz2.optiona;
  document.getElementById("option2.2").innerHTML = Quiz2.optionb;
  document.getElementById("option2.3").innerHTML = Quiz2.optionc;
  document.getElementById("option2.4").innerHTML = Quiz2.optiond;
  
  const Quiz3 = new basicFunction('JavaScript is designed for following purpose -','To Perform Server Side Scripting Opertion','To Execute Query Related to DB on Server','To add interactivity to HTML Pages.','To Style HTML Pages','To add interactivity to HTML Pages.');
  
  document.getElementById("QUES3").innerHTML = Quiz3.ques;
  document.getElementById("option3.1").innerHTML = Quiz3.optiona;
  document.getElementById("option3.2").innerHTML = Quiz3.optionb;
  document.getElementById("option3.3").innerHTML = Quiz3.optionc;
  document.getElementById("option3.4").innerHTML = Quiz3.optiond;
  
  const Quiz4 = new basicFunction('JavaScript is can be written -','directly into JS file and included into HTML','None of these','directly on the Server Script','directly into HTML pages','directly into JS file and included into HTML');
  
  document.getElementById("QUES4").innerHTML = Quiz4.ques;
  document.getElementById("option4.1").innerHTML = Quiz4.optiona;
  document.getElementById("option4.2").innerHTML = Quiz4.optionb;
  document.getElementById("option4.3").innerHTML = Quiz4.optionc;
  document.getElementById("option4.4").innerHTML = Quiz4.optiond;
  
  const Quiz5 = new basicFunction('JavaScript is an ________ language.','interpreted','compiled','error','assembled','interpreted');
  
  document.getElementById("QUES5").innerHTML = Quiz5.ques;
  document.getElementById("option5.1").innerHTML = Quiz5.optiona;
  document.getElementById("option5.2").innerHTML = Quiz5.optionb;
  document.getElementById("option5.3").innerHTML = Quiz5.optionc;
  document.getElementById("option5.4").innerHTML = Quiz5.optiond;
  
  let score=0;

  var item=[];
item[1]=Quiz1.correct;
item[2]=Quiz2.correct;
item[3]=Quiz3.correct;
item[4]=Quiz4.correct;
item[5]=Quiz5.correct;

  