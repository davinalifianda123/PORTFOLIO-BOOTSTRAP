function toggleDetail(e) {
    const target = $(e.target)

    if($(target).hasClass("active")) {
        $(target).html("More Info").removeClass("active")
    } else {
        $(target).html("→_→").addClass("active")
    }

    
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
}

function onFormSubmit(e) {
    e.preventDefault()
    const email = $("#inp_email")
    const subject = $("#inp_subject")
    const massage = $("#inp_massage")

    if(!$(email).val()) {
        alert("email mu belum di isi")
    } else if(!$(subject).val()) {
        alert("subject mu di isi sek")
    } else if(!$(massage).val()) {
        alert("wes pokokmen isi kabeh")
    } else {
        alert("sucsess")
        $(email).val("")
        $(subject).val("")
        $(massage).val("")
    }
}