
/*
 * Editor client script for DB table articulos
 * Created by http://editor.datatables.net/generator
 */

(function($){

$(document).ready(function() {
	var editor = new $.fn.dataTable.Editor( {
		"ajax": "php/table.articulos.php",
		"table": "#articulos",
		"fields": [
			{
				"label": "articulo",
				"name": "articulo",
				"type": "checkbox",
				"separator": "|",
				"options": [
					"PLAYERA",
					"GORRA",
					"CASACA",
					"PELOTA",
					"BATS",
					"TERMO",
					"JARETA",
					"CHAMARRA",
					"CAMISA"
				]
			},
			{
				"label": "cantidad",
				"name": "cantidad",
				"type": "select",
				"options": [
					"1",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7",
					"8",
					"9",
					"10"
				]
			},
			{
				"label": "talla",
				"name": "talla",
				"type": "radio",
				"options": [
					"CHICA",
					"MEDIANA",
					"GRANDE",
					"EXTRAGRANDE",
					" UNITALLA"
				]
			}
		]
	} );

	$('#articulos').DataTable( {
		"dom": "Tfrtip",
		"ajax": "php/table.articulos.php",
		"columns": [
			{
				"data": "articulo"
			},
			{
				"data": "cantidad"
			},
			{
				"data": "talla"
			}
		],
		"tableTools": {
			"sRowSelect": "os",
			"aButtons": [
				{ "sExtends": "editor_create", "editor": editor },
				{ "sExtends": "editor_edit",   "editor": editor },
				{ "sExtends": "editor_remove", "editor": editor }
			]
		}
	} );
} );

}(jQuery));

