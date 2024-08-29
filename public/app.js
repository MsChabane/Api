

const  addclick =(btns)=>{
    btns.forEach(btn => {
        btn.addEventListener('click', async ()=>{
            try {
                let res= await  fetch(`http://localhost:5000/api/users/delete/${btn.dataset['doc']}`,{ method:"DELETE",
                    headers:{
                        "Content-Type":"application/json;charset=UTF-8"
                    }
            })
                console.log(res);
            } catch (error) {
                console.log(error);  
            }
        })
    });
}
addclick(document.querySelectorAll(".btn-danger"))


 