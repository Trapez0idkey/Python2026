$(document).ready(function () {

  // ============================================
  // 3. MANIPULACIÓN DEL DOM
  // ============================================

  // Cambiar color inicial de los 3 elementos
  $("#miLista li").css("color", "#2E75B6");

  // Agregar cuarto elemento dinámicamente
  $("#miLista").append(
    '<li style="color:#e67e22; font-weight:bold;">Elemento 4 (agregado con jQuery)</li>'
  );


  // ============================================
  // 4. EVENTOS EN JQUERY
  // ============================================

  // Botón ocultar / mostrar lista
  $("#btnOcultar").on("click", function () {
    if ($("#miLista").is(":visible")) {
      $("#miLista").slideUp(300);
      $(this).text("Mostrar lista")
             .removeClass("btn-primary")
             .addClass("btn-secondary");
    } else {
      $("#miLista").slideDown(300);
      $(this).text("Ocultar lista")
             .removeClass("btn-secondary")
             .addClass("btn-primary");
    }
  });

  // Botón cambiar colores de la lista
  var paletas = [
    ["#e74c3c", "#8e44ad", "#27ae60", "#e67e22"],
    ["#2980b9", "#16a085", "#d35400", "#8e44ad"],
    ["#f39c12", "#c0392b", "#1abc9c", "#2c3e50"],
    ["#2E75B6", "#2E75B6", "#2E75B6", "#e67e22"]
  ];
  var indicePaleta = 0;

  $("#btnColores").on("click", function () {
    var colores = paletas[indicePaleta % paletas.length];
    $("#miLista li").each(function (i) {
      $(this).css("color", colores[i % colores.length]);
    });
    indicePaleta++;
  });


  // ============================================
  // 5. PLUGIN BOOTSTRAP - MODAL
  // ============================================

  $("#btnModal").on("click", function () {
    alert("¡Acción ejecutada desde jQuery dentro del Modal!");
    $("#miModal").modal("hide");
  });

});