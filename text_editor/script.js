let optionsButtons=document.querySelectorAll('.option-button');
let advancedOptionButtons=document.querySelectorAll('.adv-options-button');
let fontNameSelect=document.getElementById('fontName');
let fontSizeRef=document.getElementById('fontSize');
let writingArea=document.getElementById('text-input');
let linkButton=document.getElementById('createLink');
let formatButtons=document.querySelectorAll('.format');


let fontList=[
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
];


const initializer=()=>{
 
    fontList.map((value)=>{
        let option=document.createElement('option');
        option.value=value;
        option.innerHTML=value;
        fontNameSelect.appendChild(option);

});

for(let i=1; i<=7;i++){
    let option=document.createElement('option');
    option.value=i;
    option.innerHTML=i;
    fontSizeRef.appendChild(option);
}

fontSizeRef.value=3;


};

const modifyText=(command,defaultUi,value)=>{
    document.execCommand(command,defaultUi,value);

};

optionsButtons.forEach((button)=>{
    button.addEventListener('click',()=>{
        modifyText(button.id,false,null);
    });
});


advancedOptionButtons.forEach((button)=>{
    button.addEventListener('change',()=>{
        modifyText(button.id,false,button.value);
    });
});


linkButton.addEventListener('click',()=>{
    let userLink=prompt("Enter a URL");
    if(/http/i.test(userLink)){
        modifyText(linkButton.id,false,userLink);
    }else{
        userLink="http://"+userLink;
        modifyText(linkButton.id,false,userLink);
    }
});


const highlighter=(className,needsRemoval) =>{
    className.forEach((button)=>{
        button.addEventListener('click',()=>{
            if(needsRemoval){
                let alreadyActive=false;
                if(button.classList.contains('active')){
                    alreadyActive=true;
                }
                highlighterRemover(className);
                if(!alreadyActive){
                    button.classList.add('active');
                }
                }else{
                    button.classList.toggle('active');
                }
            });
        });
};

const highlighterRemover=(className)=>{
    className.forEach((button)=>{
        button.classList.remove('active');
    });
};

window.onload=initializer;