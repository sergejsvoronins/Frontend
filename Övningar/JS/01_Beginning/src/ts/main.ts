function myfirstjavascript () :void {
    let result = confirm("Är du säker?");
      console.log(result);
  }
     
  const firstname:string = "Sergejs";
  console.log(firstname);
  
  const x:number = 5;
  const y:number = 10;
  console.log(x+y);
  
  function addClass(){
      const element:HTMLParagraphElement = document.getElementById("text") as HTMLParagraphElement;
      element.className += "red";
  
      element.innerHTML="Hej på dig";
      const elementOne: HTMLDivElement = document.getElementById("content") as HTMLDivElement;
      elementOne.id = "wohoo";   
  }