let add = document.querySelector(".add")
let subtraction = document.querySelector(".subtraction")
let multiplication = document.querySelector(".multiplication")
let division = document.querySelector(".division")
let submit = document.querySelector(".submit")
let reset = document.querySelector(".reset")
let number = document.querySelector(".number")
let errmsg = document.querySelector(".errmsg")
let list = document.querySelector("ul")
let count = 0;
let index_count = 0
let precount



number.innerHTML = count
 list.innerHTML = ""



function input_check(){
    if(add.value != "" && subtraction.value == "" && multiplication.value == "" && division.value == "" ){
   if(add.value - 10 || add.value == 10){
    if(add.value > -1){
        precount = count
        count = count + add.value*1
        number.innerHTML = count
        index_count++
        list.innerHTML += `<li>${index_count}.${precount} added with ${add.value} equal ${count}.</li>`
        
    }else{
        errmsg.innerHTML = "It is not a positive number"
    }
   }else{
    errmsg.innerHTML = " It is not a number"
   }
    }
    else if(add.value == "" && subtraction.value != "" && multiplication.value == "" && division.value == ""){
    if(subtraction.value - 10 || subtraction.value == 10){
        if(subtraction.value > -1){
            if(subtraction.value*1 <= count){
                precount = count
                count = count - subtraction.value*1
                number.innerHTML = count
                index_count++
                list.innerHTML += `<li>${index_count}.Subtract ${subtraction.value} from ${precount} equal ${count}.</li>`
            }else{
                errmsg.innerHTML = "input number can't be bigger than count number "
            }
        }else{
            errmsg.innerHTML = "It is not a positive number"
        }
    }else{ 
        errmsg.innerHTML = " It is not a number"
    }
    }else if(add.value == "" && subtraction.value == "" && multiplication.value != "" && division.value == ""){
     if(multiplication.value - 10 || multiplication.value == 10){
        if(multiplication.value == 0){
            errmsg.innerHTML = "You Can't multiply by 0"
        }else if(count == 0){
            errmsg.innerHTML = "You can't multiply with 0"
        }else if(multiplication.value >= 1){
            precount = count
            count = count*multiplication.value*1 
            number.innerHTML = count
            index_count++
            list.innerHTML += `<li>${index_count}. ${precount} multiplied with ${multiplication.value} equal ${count}.</li>`
        }else{
            errmsg.innerHTML = "It is Not a positive number"
        }
     }else{
        errmsg.innerHTML = "It is not a number "
     }
    }else if (add.value == "" && subtraction.value == "" && multiplication.value == "" && division.value != ""){
        if(division.value - 10 || division.value == 0){
            if(division.value == 0){
                errmsg.innerHTML = "You cant't divide by 0"
            }else if(count == 0){
                errmsg.innerHTML = "You can't divide 0 with any number"
            }else if(division.value > count){
                errmsg.innerHTML = "Input number is bigger than count number"
            }else if(division.value >= 1){
                if(count >= division.value){
                    precount = count
                    count = count / division.value*1
                    number.innerHTML = count
                    index_count++
                    list.innerHTML += `<li>${index_count}. ${precount} divided by ${division.value} equal ${count}.</li>`
                }
            }else{
                errmsg.innerHTML = " It is not a positive number"
            }
        }else {
            errmsg.innerHTML = " It is not a number"
        }
    }else{
        errmsg.innerHTML = "You should give an input number"
    }
}

submit.addEventListener("click",() => {
    errmsg.innerHTML = ""
    input_check() 
    if(count <= 10000){
    }else{
        submit.style.display = "none"
        errmsg.innerHTML = " Total number can't be more than 10,000"
    }
    add.value = ""
    subtraction.value = ""
    multiplication.value = ""
    division.value = ""
})

reset.addEventListener("click",() =>{
    location.reload()
})