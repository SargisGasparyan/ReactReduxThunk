export function loadCurrentUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve({
            name: "my new name"
        })},2000)
    })
}