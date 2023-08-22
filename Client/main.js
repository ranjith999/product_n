

$(document).ready(function(){


$("#myForm").on("submit",function (e){
    e.preventDefault();

    $.post( 
        "http://localhost:3000/product",
        {
                    "product_name":$("#product_name").val(),
                    "unit_price":$("#unit_price").val(),
                    "quantity":$("#quantity").val()
        }).done(function(response){
            Swal.fire({
                title: 'Data saved',
                showDenyButton: true,
                confirmButtonText: 'Back',
                denyButtonText: 'New Entry',
                allowOutsideClick:false
        
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    location.href='index.html';
                } else if (result.isDenied) {
                    location.reload();
                }
              });
  });

});




   $('#index').ready(function(){

    $.ajax({
        type: "GET",
        url:"http://localhost:3000/product",
        crossDomain: true,
        dataType:'jsonp',
        success: function (data) {
            var html=``;
   
            $.each(data, function(i, item) {
                 

               html+=`<tr>
               <td>${i+1}</td>
               <td>${item.product_name}</td>
               <td>${item.unit_price}</td>
               <td>${item.quantity}</td>
               </tr>
               `;
              });
       $("#tabbody").html(html);

   
          },
          error: function (xhr, status, error) {
            console.log(error);
          }
        });

  });



});
