
        var checkedinputs = 0;

        function Checkmail() {
            let email = document.getElementById("inputEmail4").value;
            let error = document.getElementById("lblError");
            var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            error.innerHTML = "";
            if ((email != "") && (email.match(mailFormat))) {
                return true;
                checkedinputs = +1;
            } else {
                error.innerHTML = "Неверно введен E-mail";
            }
        }

        function Checkpassword() {
            let pass = document.getElementById("inputPassword1");
            let error = document.getElementById("passwordError1");
            error.innerHTML = "";
            if ((pass.value != "") && (pass.value.length >= 8)) {
                return true;
                checkedinputs = +1;
            } else {
                error.innerHTML = "Пароль должен быть не менее 8 знаков";
            }
        }

        function Checksecpassword() {
            let pass1 = document.getElementById("inputPassword1").value;
            let pass2 = document.getElementById("inputPassword2").value;
            let error = document.getElementById("passwordError2");
            error.innerHTML = "";
            if (pass1 == pass2) {
                return true;
                checkedinputs = +1;
            } else {
                error.innerHTML = "Пароли не совпадают";
            }
        }

        function Checkphone() {
            let phone = document.getElementById("inputphone").value;
            let error = document.getElementById("phoneError");
            var phoneFormat = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
            error.innerHTML = "";
            if ((phone != "") && (phone.match(phoneFormat))) {
                return true;
                checkedinputs = +1
            } else {
                error.innerHTML = "Неверно введен номер";
            }
        }

        function Check() {

            if (checkedinputs == 4) {
                alert("Регистрация прошла успешно");

            } else {
                document.getElementById("errormessage").innerHTML = "";
                document.getElementById("errormessage").innerHTML += "Введите данные</br>";
            }
        }

        function show() {
            if (document.getElementById("theme").value == "mint")
                document.body.style.backgroundColor = "rgb(148, 221, 205)";
            if (document.getElementById("theme").value == "sea")
                document.body.style.backgroundColor = "rgb(137, 200, 230)";
            if (document.getElementById("theme").value == "pink")
                document.body.style.backgroundColor = "rgb(230, 137, 173)";
            if (document.getElementById("theme").value == "standart")
                document.body.style.backgroundColor = "rgb(207, 207, 207)";

        }
  