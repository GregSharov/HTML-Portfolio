/*---לינה וארוחת בוקר = כמות האנשים * 400 * כמות הלילות---*/
/*---חצי פנסיון = לינה וארוחת בוקר + 100ש״ח * כמות הלילות * כמות האנשים---*/

var breakfastPay = parseInt(400);
var halfPansionPay = parseInt(100);

function breakfast () {
    var people = parseInt(document.getElementById("people").value);
    var nights = parseInt(document.getElementById("nights").value);
    var breakfast_nights = parseInt(people * breakfastPay * nights);
    return breakfast_nights;
}

function halfPansion () {
    var people = parseInt(document.getElementById("people").value);
    var nights = parseInt(document.getElementById("nights").value);
    var semiPansion = parseInt(people * halfPansionPay * nights);
    return semiPansion;
}

function addData() {
    var base = document.getElementById("base1", "base2");
    var people = parseInt(document.getElementById("people").value);
    var nights = parseInt(document.getElementById("nights").value);
    var totalResult = document.getElementById("result");
    var showText = document.getElementById("names");
    
    if (base1.checked == true && people > 0 && nights > 0) {
        showText.style.display = "block";
    } else if (base2.checked == true && people > 0 && nights > 0) {
        showText.style.display = "block";
    } else {
        alert("תבחרו את כמות האורחים כמות לילות ובסיס האירוח");
    }
}

function results() {
    var base = document.getElementById("base1", "base2");
    var people = parseInt(document.getElementById("people").value);
    var nights = parseInt(document.getElementById("nights").value);
    var firstName = document.getElementById("firstName").value;
    var secondName = document.getElementById("secondName").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var totalResult = document.getElementById("result");
    var picToHide = document.getElementById("pic_1");
    
    var counter = 0;
    var dog = "@";
    if (firstName.length == 0 && secondName.length == 0 && phone.length == 0 && email.length == 0) {
        alert("נא תזינו פרטים נוספים");
    } else {
        if (firstName.length > 0) {
        counter++;
    } else {
        alert("תזינו שם");
    }
    if (secondName.length > 0) {
        counter++;
    } else {
        alert("תזינו שם משפחה");
    }
    if (phone.length == 10 || phone.length == 12) {
        counter++;
    } else {
        alert("תזינו מספר נייד בצורה 0501234567 או 972501234567");
    }
    
    if ((email.includes(dog) && email.endsWith(".com")) || (email.includes(dog) && email.endsWith("co.il"))) {
        counter++;
    } else {
        alert("תהזינו כתובת המאיל מכילה ׳@׳ ומסתיימת ב- ׳.com׳ או ׳.co.il׳");
    }
    }
    
    if (counter == 4) {
    if (base1.checked == true) {
        picToHide.style.display = "none";
        totalResult.style.display = "grid";
        totalResult.innerHTML = "<h1 id='order'>ההזמנה מוכנה</h1>" + firstName + " " + secondName + " " + "<h2 id='order_text'>את/ה הזמנת <h/2>" + people + " אנשים ל- " + nights + " לילות ובסיס שירות כולל לינה וארוחת בוקר." + "<br>" + "המחיר הסופי הוא: " + breakfast() + " ש״ח";
    } else {
        picToHide.style.display = "none";
        totalResult.style.display = "grid";
        totalResult.innerHTML = "<h1 id='order'>ההזמנה מוכנה</h1>" + firstName + " " + secondName + " " + "<h2 id='order_text'>את/ה הזמנת <h/2>" + people + " אנשים ל- " + nights + " לילות ובסיס שירות חצי פנסיון." + "<br>" + "המחיר הסופי הוא: " + parseInt(breakfast() + halfPansion()) + " ש״ח";
        }
    }
}

function resetName () {
    var firstName = document.getElementById("firstName").value="";
    var secondName = document.getElementById("secondName").value="";
    var phone = document.getElementById("phone").value="";
    var email = document.getElementById("email").value="";
    var totalResult = document.getElementById("result").style.display = "none";
    var picToHide = document.getElementById("pic_1").style.display = "grid";
}