
yearCal = new Date();
yearTmp = 40;

for( i=yearCal.getFullYear() ; i>=1940 ; i--){
    var yearJ = document.getElementById("year");
    document.getElementById("year").innerHTML = yearJ.innerHTML + "<option value=" + yearTmp + ">" + i + "년</option><br>";
    yearTmp++;
}


function monCal(){
    for( i=1 ; i<= 12 ; i++ ){
    var monthJ = document.getElementById("month");
    document.getElementById("month").innerHTML = monthJ.innerHTML + "<option value=" + i + ">" + i + "월</option><br>";
}
}

function clearDay(){
    document.getElementById("day").innerHTML = "<option value='0'>일</option>";
}


function lastDayCal(){
    var yearA = document.getElementById("year").value;
    var monA = document.getElementById("month").value;
    var dayJ = document.getElementById("day");

    var lastDate1 = new Array (31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);

    var lastDate2 = new Array (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);


    if((yearA % 4 && yearA % 100 != 0) || yearA % 400 == 0 ){

        for( i=1 ; i<= lastDate2[monA-1] ; i++){
             document.getElementById("day").innerHTML = dayJ.innerHTML + "<option value=" + i + ">" + i + "일</option><br>";
            }
    }
    else{
        for( i=1 ; i<= lastDate1[monA-1] ; i++){
             document.getElementById("day").innerHTML = dayJ.innerHTML + "<option value=" + i + ">" + i + "일</option><br>";
            }
        }
    }

 all_chk = document.getElementById("allChk");

function submitExe(){
    var ageLimit = document.getElementById("ageLimit");


    if(ageLimit.checked && all_chk.checked){

            var uname = document.getElementById("uName").value;
            var id = document.getElementById("uId").value;
            var pw = document.getElementById("uPw").value;
            var pwChk = document.getElementById("uPwChk").value;
            var email = document.getElementById("eMail").value;


        if(uname.trim() == "" || id.trim() == "" || pw.trim() == "" || pwChk.trim() == "" || email.trim() == "" ){

             alert("가입 정보를 정확히 입력해주세요.");
        }
        else{
                           document.getElementById("frm").submit();
        }

    }
    else if(ageLimit.checked == false){
        alert("14세 이상 체크 확인");
    }
    else{
        alert("이용약관 체크 확인");
    }



}

function all_check(){

    if(all_chk.checked == true){
        document.getElementById("chk1").checked = true;
        document.getElementById("chk2").checked = true;
        document.getElementById("chk3").checked = true;
        document.getElementById("chk4").checked = true;
    }
    else{
        document.getElementById("chk1").checked = false;
        document.getElementById("chk2").checked = false;
        document.getElementById("chk3").checked = false;
        document.getElementById("chk4").checked = false;
    }
}




//
