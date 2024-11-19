<script>
    function addCard() {
       // clone the template
       const template = 
          document.getElementById("card-template")
                  .content.cloneNode(true);
       // populate the template
       template.querySelector('.card-title').innerText = 
           'My Card Title';
       template.querySelector('.card-text').innerText = 
           'lorem ipsum ble bla';
       // include the populated template into the page
       document.querySelector('#card-list')
               .appendChild(template);
    }
    addCard();
</script>