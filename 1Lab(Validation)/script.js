function validateForm()
{
    var surname = document.getElementById("surname").value;
    var name = document.getElementById("name").value;
    var nameReg = /^[A-Za-zА-Яа-я]{1,20}$/;
    var email = document.getElementById("email").value;
    var emailReg = /^\S+@\w{2,5}\.\w{2,3}$/;
    var phone=document.getElementById("tel").value;
    var phoneReg=/^\(0\d{2}\)\d{3}-\d{2}-\d{2}$/;
    var inf=document.getElementById("inform").value;


    if (!nameReg.test(surname) || !nameReg.test(name)) {
        alert("Фамилия и имя должны содержать только русские и английские буквы, не более 20 символов.");
        event.preventDefault();

    }

    if (!emailReg.test(email)) {
        alert("Некорректный формат E-mail.");
        event.preventDefault();
    }

    if(!phoneReg.test(phone))
    {
        alert("Некорректный формат телефона.");
        event.preventDefault();
    }
    if(inf.length>250)
    {
        alert("Информационное поле не может привышать больше 250 символов");
        event.preventDefault();
    }

    var town=document.getElementById("town").value;
    const courseRadios = document.getElementsByName('course');

    let selectedValue;
    for (let i = 0; i < courseRadios.length; i++) {
        if (courseRadios[i].checked) {
            selectedValue = courseRadios[i].value;
            break;
        }
    }
    var belstu=document.getElementById("checkStudy")
    if(town=="Минск" && selectedValue==3 && belstu.checked)
    {
        var confired=confirm("Вы уверены ?");
        if(!confired)
        {
            event.preventDefault();
        }

    }
}
