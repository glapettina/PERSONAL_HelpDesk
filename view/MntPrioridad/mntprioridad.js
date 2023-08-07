var tabla;


function init() {

  $('#usuario_form').on('submit', function(e){

      guardaryeditar(e);

  });

}

function guardaryeditar(e){
  e.preventDefault();
  var formData = new FormData($('#usuario_form')[0]);
  $.ajax({
    url: "../../controller/prioridad.php?op=guardaryeditar",
    type: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: function(datos){
      console.log(datos);
      $('#usuario_form')[0].reset();
      $('#modalMantenimiento').modal('hide');
      $('#usuario_data').DataTable().ajax.reload();

      swal({
        title: "Prioridades",
        text: "Prioridad registrada",
        type: "success",
        confirmButtonClass: "btn-success",
      });
    }
  });
}

$(document).ready(function () {
  // Se inicializa el DataTable

    tabla = $("#usuario_data")
    .dataTable({
      aProcessing: true,
      aServerSide: true,
      dom: "Bfrtip",
      searching: true,
      lengthChange: false,
      colReorder: true,
      buttons: ["copyHtml5", "excelHtml5", "csvHtml5", "pdfHtml5"],
      ajax: {
        url: "../../controller/prioridad.php?op=listar",
        type: "post",
        dataType: "json",        
        error: function (e) {
          console.log(e.responseText);
        },
      },
      bDestroy: true,
      responsive: true,
      bInfo: true,
      iDisplayLength: 10,
      autoWidth: false,
      language: {
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_ registros",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún dato disponible en esta tabla",
        sInfo: "Mostrando un total de _TOTAL_ registros",
        sInfoEmpty: "Mostrando un total de 0 registros",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
        sSearch: "Buscar:",
        sUrl: "",
        sInfoThousands: ",",
        sLoadingRecords: "Cargando...",
        oPaginate: {
          sFirst: "Primero",
          sLast: "Último",
          sNext: "Siguiente",
          sPrevious: "Anterior",
        },
        oAria: {
          sSortAscending:
            ": Activar para ordenar la columna de manera ascendente",
          sSortDescending:
            ": Activar para ordenar la columna de manera descendente",
        },
      },
    })
    .DataTable();

  
});

// function ver(tick_id) {
//   console.log(tick_id);
//   window.open('http://localhost/PERSONAL_HelpDesk/view/DetalleTicket/?ID='+tick_id+'');
// }

function editar(prio_id) {
  $('#mdlTitulo').html('Editar Registro');

  $.post(
    "../../controller/prioridad.php?op=mostrar",
    { prio_id : prio_id },
    function (data) {

      data = JSON.parse(data);
      $('#prio_id').val(data.prio_id);
      $('#prio_nom').val(data.prio_nom);

    });

  $('#modalMantenimiento').modal('show');
}

function eliminar(prio_id) {
  swal(
    {
      title: "Prioridad",
      text: "Está seguro de eliminar la prioridad?",
      type: "error",
      showCancelButton: true,
      confirmButtonClass: "btn-danger",
      confirmButtonText: "Si",
      cancelButtonText: "No",
      closeOnConfirm: false,
    },
    function (isConfirm) {
      if (isConfirm) {

     
        $.post(
          "../../controller/prioridad.php?op=eliminar",
          { prio_id : prio_id },
          function (data) {

          });

          $('#usuario_data').DataTable().ajax.reload();

        swal({
          title: "Prioridad",
          text: "Prioridad eliminada",
          type: "success",
          confirmButtonClass: "btn-success",
        });
      }
    }
  );
}

$(document).on("click", "#btnNuevo", function () {


   $('#mdlTitulo').html('Nuevo Registro');
   $('#usuario_form')[0].reset();
   $('#modalMantenimiento').modal('show');

});

init();
