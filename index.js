const imagen = document.querySelectorAll(".card__plus")


document.addEventListener("DOMContentLoaded", function() {

    const accordionItems = document.querySelectorAll(".accordion-item");
    accordionItems.forEach(item => {
      const title = item.querySelector(".accordion-title");
  
      title.addEventListener("click", function() {
        // Toggle the 'active' class to expand/collapse the content
        item.classList.toggle("active");
            
  
        // Hide all other accordion items except the one clicked
        accordionItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            
          }
        });
      });
    });
  });




  