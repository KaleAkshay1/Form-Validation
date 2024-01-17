const username=document.getElementById('username')
const password1=document.getElementById('password1')
const password2=document.getElementById('password2');
const msg1=document.getElementById('msg1')
const msg2=document.getElementById('msg2')
const msg3=document.getElementById('msg3')
const btn=document.getElementById('btn')
const root=document.documentElement
let uName = false
let pass = false
let cPass = false

username.addEventListener('input',()=>{
    if(username.value.length < 5 || username.value.length >15){
        root.style.setProperty('--un','#9d0208')
        msg1.classList.remove('hide')
        msg1.innerText = 'Username have atlist 5 to 15 charecter'
        uName = false
    }else{
        root.style.setProperty('--un','#8ac926')
        msg1.classList.add('hide') 
        uName = true
    }
})


password1.addEventListener('input',()=>{
    if(password1.value.length < 8 || password1.value.length > 12){
        root.style.setProperty('--pass1','#9d0208')
        msg2.classList.remove('hide')
        msg2.innerText = 'Password have atlist 8 to 12 charecter'
        pass = false
    }else{
        root.style.setProperty('--pass1','#8ac926')
        msg2.classList.add('hide') 
        pass = true
    }
})

password2.addEventListener('input',()=>{
    if(password2.value.length < 8 || password2.value.length > 12){
        root.style.setProperty('--pass2','#9d0208')
        msg3.classList.remove('hide')
        msg3.innerText = 'Password have atlist 8 to 12 charecter'
        cPass = false
    }else{
        root.style.setProperty('--pass2','#8ac926')
        msg3.classList.add('hide') 
        cPass = true
    }
})

btn.onclick = () =>{
    if(password1.value === password2.value && cPass && pass && uName){
        alert('Rgister Successfully')
        root.style.setProperty('--pass1','#8ac926')
        root.style.setProperty('--pass2','#8ac926')
        msg3.classList.add('hide')
    }else if(password1.value !== password2.value){
        root.style.setProperty('--pass1','#9d0208')
        root.style.setProperty('--pass2','#9d0208')
        msg3.classList.remove('hide')
        msg3.innerText = 'Password and Confirm Password is not same'
    }else{
        root.style.setProperty('--un','#9d0208')
        msg1.classList.remove('hide')
        msg1.innerText = 'Username have atlist 5 to 15 charecter'
    }
}