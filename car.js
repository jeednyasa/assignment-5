getcar=()=>{
    let url='https://bluecollarsclientwork.000webhostapp.com/carbrowser/getcars.php';
    let xhr=new XMLHttpRequest();
    xhr.open('GET',url,true);
    xhr.onload=()=>{
        if(xhr.readyState==4||xhr.status==200)
        {
        let carbody=document.querySelector('.car');
        let response=JSON.parse(xhr.responseText);
        let {car}=response;
        console.log(xhr.responseText);
        car.map(car=>{
            let car1=document.createElement('h2');
            let carname=document.createTextNode(car.name);
            let car2=document.createElement('h3');
            let companyname=document.createTextNode(car.company);
            let car3=document.createElement('p');
            let statusname=document.createTextNode(car.status);


            let deletebtn=document.createElement('button');
            let deletebtntxt=document.createTextNode('delete');
            deletebtn.appendChild(deletebtntxt);


            car1.appendChild(carname);
            car2.appendChild(companyname);
            car3.appendChild(statusname);


            carbody.appendChild(car1);
            carbody.appendChild(car2);
            carbody.appendChild(car3);
            carbody.appendChild(deletebtn);
             
            let url2='https://bluecollarsclientwork.000webhostapp.com/carbrowser/deletecar.php';
            deletebtn.addEventListener('click',(e)=>{
                e.preventDefault();
                let id=car.id;
                let data={
                    "id":id,
//         "name":name,
        
//         "company":company,
        
//         "status":status,

                };
                let params=JSON.stringify(data);
                let xhr=new XMLHttpRequest();
                xhr.open('DELETE',url2,true);
                xhr.onload=()=>{
                    if(xhr.status==200||xhr.readyState==4)
                    {
                        console.log('car deleted');
                    }
                    else
                    {
                        console.log('Error occured');
                    }
                }
                xhr.send(params);
            });
        });
        }
        
    }
    xhr.send();
}
getcar();
