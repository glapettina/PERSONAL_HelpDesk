function init() {}

$(document).ready(function () {});

$(document).on("click", "#btnSoporte", function () {
  if ($('#rol_id').val() == 1) {
    $('#lblTitulo').html("Acceso Soporte");
    $('#btnSoporte').html("Acceso Usuario");
    $('#rol_id').val(2);
    $('#imgTipo').attr("src", "public/2.jpg");
  } else {

    $('#lblTitulo').html("Acceso Usuario");
    $('#btnSoporte').html("Acceso Soporte");
    $('#rol_id').val(1);
    $('#imgTipo').attr("src", "public/1.jpg");
  }

});

init();


