getcar = ()=>{
    let url='https://bluecollarsclientwork.000webhostapp.com/carbrowser/createcompany.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.status==200||xhr.readyState==4)
        {
            let response=JSON.parse(xhr.responseText);
            let {car}=response;
            car.forEach(car=>{
                let carlist=document.querySelector('#car');
                
                let carname=document.createTextNode(car.name);
                
            
            });
        }
        else
        {
            console.log('error occured');
        }
    }
    xhr.send();
}
getcar();
car=(e)=>{
    let url='https://bluecollarsclientwork.000webhostapp.com/carbrowser/createcar.php';
    e.preventDefault();
    let name = document.querySelector('#name').value;
    // let ID = document.querySelector('#ID').value;
    let company = document.querySelector('#company').value;
    let Status = document.querySelector('#Status').value;
    let data={
        // "ID":ID,
        "name":name,
        
        "company":company,
        
        "status":Status,
    };
    let params=JSON.stringify(data);
    let xhr=new XMLHttpRequest();
    xhr.open('POST',url,true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.responseText==200)
        {
            let message=document.createElement('h2');
            let msgtxt=document.createTextNode(`Car added`);
            let msgarea=document.querySelector('#message-area');
            message.appendChild(msgtxt);
            msgarea.appendChild(message);
        
        }
        else
        {
            let message=document.createElement('h2');
            let msgtxt=document.createTextNode('Error occured');
            let msgarea=document.querySelector('#message-area');
            message.appendChild(msgtxt);
            msgarea.appendChild(message);
        

        }
    }
    xhr.send(params);
}
let form=document.querySelector('#car-form');
form.addEventListener('submit',car);