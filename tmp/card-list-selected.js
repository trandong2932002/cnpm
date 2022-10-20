const saving_items = document.getElementsByClassName("card")
const selected_item = ["bg-warning", "bg-opacity-75"]
for (let i = 0; i < saving_items.length; i++) {
  saving_items[i].addEventListener("click", function (e) {
    // delete border of old saving item
    let old_saving_item = document.getElementsByClassName(...selected_item)
    if (old_saving_item.length != 0) {
      old_saving_item[0].classList.remove(...selected_item)
    }
    // add border to selected item
    this.classList.add(...selected_item)
  })
}