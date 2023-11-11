

function date(){
const date=new Date();

const options={
    weekday: "long",
    month: "long",
    day: "numeric"
};

return date.toLocaleDateString("en-US",options)

}

function day(){
    const date=new Date();
    
    const options={
        weekday: "long"
    
       
    };
    
    return date.toLocaleDateString("en-US",options)
    
    }
    

export{date};

export{day};
