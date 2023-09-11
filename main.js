function toggleDetail(e) {
    const target = $(e.target)
    const item = $(target).parents(".about-exp-item")
    const detail = $(item).children(".about-exp-item-detail")

    $(detail).slideToggle()
}