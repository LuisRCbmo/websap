function ace_countdown() {
    setInterval(function () {

        if (processing_ss)
            return;

        jQuery("#ace_countdown").html(countdown);
        if (countdown <= 30) {
            jQuery("#ace_countdown").addClass('danger');
        } else {
            jQuery("#ace_countdown").removeClass('danger');
        }

        if (countdown <= 0) {
            jQuery("#ace_countdown").addClass('blink_me');
            ocultar_metodos_pago();
            ace_alert("Tiempo agotado.<br><button class='reload_app' onclick='reload_app()'>Recargar</button>", "permanent");
            //alert("Tiempo agotado");
            //reload_app();

            return;
        }

        countdown--;
    }, 1000);
}

function pausar_countdown() {
    processing_ss = true;
}

function run_countdown() {
    processing_ss = false;
}

function get_all_data() {
    //estructura 1
    for (movie_id in entity_data) {
        datos_pelicula = entity_data[movie_id].datos_pelicula
        fechas = entity_data[movie_id].fechas

        for (programacion_id in fechas) {
            datos_fecha = entity_data[movie_id].fechas[programacion_id].datos_fecha;
            horarios = entity_data[movie_id].fechas[programacion_id].horarios;

            for (horario_id in horarios) {
                datos_horario = entity_data[movie_id].fechas[programacion_id].horarios[horario_id].datos_horario
                butacas = entity_data[movie_id].fechas[programacion_id].horarios[horario_id].butacas
            }
        }
    }
}

function get_all_data2() {
    //estructura 2
    for (programacion_id in entity_data) {
        datos_programacion = entity_data[programacion_id].datos_programacion
        peliculas = entity_data[programacion_id].peliculas

        for (movie_id in peliculas) {
            datos_pelicula = entity_data[programacion_id].peliculas[movie_id].datos_pelicula;
            horarios = entity_data[programacion_id].peliculas[movie_id].horarios;

            for (horario_id in horarios) {
                datos_horario = entity_data[programacion_id].peliculas[movie_id].horarios[horario_id].datos_horario
                butacas = entity_data[programacion_id].peliculas[movie_id].horarios[horario_id].butacas
            }
        }
    }
}

function get_peliculas() {
    var output = '<ul>';
    for (movie_id in entity_data) {
        datos_pelicula = entity_data[movie_id].datos_pelicula
        fechas = entity_data[movie_id].fechas

        output += '<li><img src="https://engine.primecinemas.com.bo/gomm_cinema/assets/uploads/thumbs/' + datos_pelicula.id + '">' + datos_pelicula.name + '</li>';

    }

    output += '</ul>';

    jQuery(".peliculas").html(output);
}

function generar() {
    var output = '<ul class="programaciones">';
    for (programacion_id in entity_data) {
        datos_programacion = entity_data[programacion_id].datos_programacion
        peliculas = entity_data[programacion_id].peliculas

        html_prg = '<div class="nombre_dia">' + datos_programacion.start_datetime_str1 + '</div>'
        html_prg += '<div class="dia">' + datos_programacion.start_datetime_str2 + '</div>'
        html_prg += '<div class="mes">' + datos_programacion.start_datetime_str3 + '</div>'

        output += '<li class="prg" data-pesots="' + datos_programacion.start_datetime + '">' + html_prg

        output += '<ul  class="peliculas" style="display:none">'
        for (movie_id in peliculas) {
            datos_pelicula = entity_data[programacion_id].peliculas[movie_id].datos_pelicula;
            horarios = entity_data[programacion_id].peliculas[movie_id].horarios;

            info_subtitulado = '';
            if (datos_pelicula.subtitled == '1') {
                info_subtitulado = 'SUBTITULADO'
            }
            info_doblado = '';
            if (datos_pelicula.translated == '1') {
                info_doblado = 'DOBLADO'
            }

            img_peli = '<img src="https://engine.primecinemas.com.bo/gomm_cinema/assets/uploads/thumbs/' + datos_pelicula.image + '" alt="' + datos_pelicula.short_name + '" title="' + datos_pelicula.short_name + '" data-nombre="' + datos_pelicula.short_name + '" data-infodobsub="' + info_subtitulado + info_doblado + '" data-duracion="' + datos_pelicula.duration + '" data-clasificacion="' + datos_pelicula.cla_n + '" />'

            clasificacion = '<div class="clasificacion" title="' + datos_pelicula.cla_d + '">' + datos_pelicula.cla_n + '</div>'
            txt_peli = '<div>' + info_subtitulado + info_doblado + '<br />' + datos_pelicula.duration + ' minutos' + '</div>'

            output += '<li class="pel">'
            output += '<div class="bloque_pelicula">'
            output += clasificacion
            output += img_peli
            output += txt_peli
            output += '</div>'


            output += '<ul  class="horarios" style="display:none">'
            for (horario_id in horarios) {
                datos_horario = entity_data[programacion_id].peliculas[movie_id].horarios[horario_id].datos_horario
                butacas = entity_data[programacion_id].peliculas[movie_id].horarios[horario_id].butacas

                html_horario = '<div title="' + datos_horario.start_datetime_str2 + '">' + datos_horario.start_datetime_str1 + ' / ' + datos_horario.tipo + '</div>'
                // html_horario += '<div>'+datos_horario.start_datetime_str2+'</div>'

                output += '<li class="sched" data-prgid="' + programacion_id + '" data-movieid="' + movie_id + '" data-itemid="' + horario_id + '">' + html_horario + '</li>'
            }
            output += '</ul></li>'
        }
        output += '</ul></li>'
    }
    output += '<ul>';

    jQuery(".ace_funciones").html(output);
}

//programacion_item_id
function fill_butacas(fecha_id, movie_id, horario_id) {
    limpiar_carrito();
    butacas = entity_data[fecha_id].peliculas[movie_id].horarios[horario_id].butacas;
    output = '';
    num_celdas = 2;
    for (fila in butacas) {
        output += '<tr>';
        output += '<td class="fila">' + fila + '</td>';
        for (col in butacas[fila]) {
            // content = fila + jQuery.trim(col);
            content = jQuery.trim(col);
            _class = "estado_" + butacas[fila][col].e

            if (col.trim() == 'D') {
                _class = "estado_0"; //por el momento no permitimos la venta para PcD
            }

            if ((col.indexOf("bk") != -1) || (col.indexOf("blank") != -1)) {
                content = "";
                _class = "blank"
            }
            output += '<td class="taquilla ' + _class + '" data-butaca="' + fila + jQuery.trim(col) + '" colspan="' + butacas[fila][col].s + '">' + content + '</td>';
            num_celdas++;
        }
        output += '<td class="fila">' + fila + '</td>';
        output += '</tr>';
    }
    //output = '<tr><td class="pantalla" colspan="' + num_celdas + '">PANTALLA</td></tr>' + output;
    output = output + '<tr><td class="pantalla" colspan="' + num_celdas + '">PANTALLA</td></tr>';
    output = '<table class="ace_sala">' + output + '</table>';
    jQuery(".ace_butacas").html(output);
}

function get_data() {
    jQuery.ajax({
        type: "get",
        data: {},
        url: 'https://engine.primecinemas.com.bo/gomm_cinema/online/get_data2',
        dataType: 'json',
    }).done(function (data) {
        entity_data = data;
        if (Object.keys(entity_data).length > 0) {
            generar();
            ordenar_programaciones();
            bind_data();
            ace_countdown();
        } else {
            ace_alert("Estimado cliente, en este momento no tenemos funciones disponibles en nuestra cartelera online. Por favor reintente más tarde, muchas gracias!<div class='cta_seccion'><a href='https://primecinemas.com.bo'><img src='https://primecinemas.com.bo/wp-content/uploads/2017/12/logo-pc-1.png' title='Regresar al home' /></a></div>", "permanent");
        }
    }).fail(function () {
        ace_alert("Estimado cliente, sentimos comentarle que ocurrió un problema de comunicación con el servidor del cine, por favor reintente más tarde. Gracias!<div class='cta_seccion'><a href='https://primecinemas.com.bo'><img src='https://primecinemas.com.bo/wp-content/uploads/2017/12/logo-pc-1.png' title='Regresar al home' /></a></div>");
    });
}

function formatear_fecha(fecha) {
    fecha = fecha.replace(/\-/g, '/');
    const months = ["ENERO", "FEBRERO", "MARZO", "ABRIL", "MAYO", "JUNIO", "JULIO", "AGOSTO", "SEPTIEMBRE", "OCTUBRE", "NOVIEMBRE", "DICIEMBRE"];
    let current_datetime = new Date(fecha + "  GMT-0400")
    let formatted_date = current_datetime.getDate() + " / " + months[current_datetime.getMonth()] + " / " + current_datetime.getFullYear()
    return formatted_date;
}

function mostrar_breadcrumb() {
    jQuery('#breadcrumb_img').prop('src', '');
    jQuery('#breadcrumb_title').html('');
    jQuery('#breadcrumb_dob_sub').html('');
    jQuery('#breadcrumb_date').html('');

    var pel_chosen = jQuery(".peliculas .pel.chosen").find('img');
    var img_src = pel_chosen.prop('src');
    var nombre = pel_chosen.data('nombre');
    var infodobsub = pel_chosen.data('infodobsub');
    var fecha = jQuery(".programaciones .prg.chosen").data('pesots');
    fecha = formatear_fecha(fecha);

    jQuery('#breadcrumb_img').prop('src', img_src);
    jQuery('#breadcrumb_title').html(nombre);
    jQuery('#breadcrumb_dob_sub').html(infodobsub);
    jQuery('#breadcrumb_date').html(fecha);

    jQuery(".ace_funciones").hide();
    jQuery(".ace_peliculas").hide();
    jQuery(".ace_breadcrumb").show();
    jQuery(".ace_horarios").show();
}

function ocultar_breadcrumb() {
    jQuery(".ace_breadcrumb").hide();
    jQuery(".ace_horarios").hide();
    jQuery(".ace_sala").hide();
    jQuery(".ace_funciones").show();
    jQuery(".ace_peliculas").show();

    limpiar_carrito();
}

function mostrar_datos_facturacion() {
    jQuery(".ace_datos_user").show();
    jQuery("body").addClass('full_modal');
}

function ocultar_datos_facturacion() {
    jQuery(".ace_datos_user").hide();
    jQuery("body").removeClass('full_modal');
}

function confirmar_datos_facturacion() {
    confirmo_datos_facturacion = true;
    ocultar_datos_facturacion();
}

function mostrar_metodos_pago() {
    let msg = "Reserva realizada<br>Monto a pagar Bs. " + precio_total;
    jQuery(".ace_metodos_pago_msg_title").html(msg);
    jQuery(".ace_metodos_pago").show();
    jQuery("body").addClass('full_modal');
}

function ocultar_metodos_pago() {
    jQuery(".ace_metodos_pago_msg_title").html("");
    jQuery(".ace_metodos_pago").hide();
    jQuery("body").removeClass('full_modal');
}

function bind_data() {
    jQuery(".programaciones li.prg").unbind("click");
    jQuery(".programaciones li.prg").bind("click", function (e) {
        e.preventDefault();
        jQuery('.ace_sala').hide();
        jQuery(".ace_horarios>ul").hide();
        jQuery(".ace_horarios>ul").html('');

        //jQuery(".programaciones .peliculas").hide();
        //jQuery(this).find(".peliculas").show();

        jQuery(".programaciones li.prg").removeClass('chosen');
        jQuery(this).addClass('chosen');

        jQuery(".ace_peliculas>ul").html(jQuery(this).find(".peliculas").html());
        jQuery(".ace_peliculas>ul").show();
        bind_data();
    });

    jQuery(".peliculas li.pel").unbind("click");
    jQuery(".peliculas li.pel").bind("click", function (e) {
        e.preventDefault();
        jQuery('.ace_sala').hide();

        jQuery(".peliculas li.pel").removeClass('chosen');
        jQuery(this).addClass('chosen');

        mostrar_breadcrumb();

        jQuery(".ace_horarios>ul").html(jQuery(this).find(".horarios").html());
        jQuery(".ace_horarios>ul").show();
        bind_data();
    });

    jQuery(".horarios li.sched").unbind("click");
    jQuery(".horarios li.sched").bind("click", function (e) {
        e.preventDefault();

        jQuery(".horarios li.sched").removeClass('chosen');
        jQuery(this).addClass('chosen');

        var fecha_id = jQuery(this).data('prgid');
        var movie_id = jQuery(this).data('movieid');
        var horario_id = jQuery(this).data('itemid');
        fill_butacas(fecha_id, movie_id, horario_id);
        bind_butacas();
        jQuery('.ace_sala').show();
    });
}

function bind_butacas() {
    jQuery(".estado_1").unbind("click");
    jQuery(".estado_1").bind("click", function (e) {
        e.preventDefault();

        if (confirmo_datos_facturacion == false) {
            mostrar_datos_facturacion();
            return;
        }

        if (jQuery(this).data('skip') == 1) {
            return;
        }

        //inicio countdown
        run_countdown();

        var horario = jQuery('.horarios li.chosen');
        var butaca = jQuery(this).data('butaca');

        var taquilla = {};
        taquilla.butaca = butaca;

        if (agregar_al_carro(taquilla)) {
            // jQuery(this).css('background', 'cyan');
            jQuery(this).addClass('seleccionado');
            prg_item_id = horario.data('itemid');
            prg_movie_id = horario.data('movieid');
        } else {
            // jQuery(this).css('background', 'none');
            jQuery(this).removeClass('seleccionado');
        }

        //ace_alert(fecha_id + " * " + movie_id + " * " + horario_id + " * " + butaca);

    });
}

function actualizar_lista_butacas_seleccionadas() {
    var html = '';
    var count = 0;

    for (butaca in butacas_seleccionadas) {
        ++count;
        html += ', ' + butaca
    }

    if (count >= 1) {
        html = html.substr(2);
        jQuery('#realizar_reserva').show();
    } else {
        jQuery('#realizar_reserva').hide();
    }

    /*if(count==1){
        html = count + ' butaca seleccionada: ' + html;
    } else {
        html = count + ' butacas seleccionadas: ' + html;
    }*/

    jQuery('#butacas_seleccionadas').html(html);
}

function limpiar_carrito() {
    butacas_seleccionadas = [];
    actualizar_lista_butacas_seleccionadas();
}

function agregar_al_carro(taquilla) {
    var items_en_el_carro = Object.keys(butacas_seleccionadas).length;

    if (butacas_seleccionadas[taquilla.butaca] == null) {

        if (items_en_el_carro < maximo_de_butacas) {
            butacas_seleccionadas[taquilla.butaca] = taquilla;
            //ace_alert("Butaca agregada al carro");
            actualizar_lista_butacas_seleccionadas();
            return true;
        } else {
            ace_alert("Limite de butacas alcanzado");
            return false;
        }

    } else {
        delete butacas_seleccionadas[taquilla.butaca];
        if (Object.keys(butacas_seleccionadas).length == 0) {
            //antes se mostraban los datos de facturacion ahora no es necesario en este paso
        }
        actualizar_lista_butacas_seleccionadas();
        return false;
    }
}

function validar_entradas() {
    var nombres = jQuery.trim(jQuery("#ace_nombres").val());
    var apellidos = jQuery.trim(jQuery("#ace_apellidos").val());
    var ci = jQuery.trim(jQuery("#ace_ci").val());
    var email = jQuery.trim(jQuery("#ace_email").val());
    var razon_social = jQuery.trim(jQuery("#ace_razon_social").val());
    var nit = jQuery.trim(jQuery("#ace_nit").val());

    if (nombres == '') {
        ace_alert("Nombres no puede estar vacio.");
        return false;
    }

    if (apellidos == '') {
        ace_alert("Apellidos no puede estar vacio.");
        return false;
    }

    if (ci == '') {
        ace_alert("CI no puede estar vacio.");
        return false;
    }

    if (email == '') {
        ace_alert("Email no puede estar vacio.");
        return false;
    }

    if (razon_social == '') {
        ace_alert("Razon social no puede estar vacio.");
        return false;
    }

    if (nit == '') {
        ace_alert("NIT no puede estar vacio.");
        return false;
    }

    return true;
}

function realizar_reserva() {
    if (processing_ss)
        return;

    var butacas = [];
    for (i in butacas_seleccionadas) {
        b = butacas_seleccionadas[i];
        butacas.push(b)
    }

    if (butacas.length == 0) {
        ace_alert("Seleccione alguna butaca");
        return;
    }

    if (!validar_entradas()) {
        return;
    }

    pausar_countdown();

    //jQuery("#seccion_pago_payme").hide();
    ace_alert("Procesando, por favor espere ...", "permanent");

    var nombres = jQuery.trim(jQuery("#ace_nombres").val());
    var apellidos = jQuery.trim(jQuery("#ace_apellidos").val());
    var ci = jQuery.trim(jQuery("#ace_ci").val());
    var email = jQuery.trim(jQuery("#ace_email").val());
    var razon_social = jQuery.trim(jQuery("#ace_razon_social").val());
    var nit = jQuery.trim(jQuery("#ace_nit").val());

    jQuery.ajax({
        type: "post",
        data: {
            butacas_seleccionadas: butacas,
            nombres: nombres,
            apellidos: apellidos,
            ci: ci,
            email: email,
            razon_social: razon_social,
            nit: nit,
            prg_item_id: prg_item_id,
            prg_movie_id: prg_movie_id,
            cod_transaccion: cod_transaccion
        },
        url: 'https://engine.primecinemas.com.bo/gomm_cinema/online/reservar',
        dataType: 'json',
    }).done(function (data) {
        if (data.ans == 200 || data.ans == 201) {
            cod_transaccion = data.cod_transaccion
            precio_total = data.precio_total
        }

        if (data.ans == 200) {
            ace_alert("", "permanent");
            mostrar_metodos_pago();
            return;
        }

        if (data.ans == 201) {
            jQuery(data.butacas_ya_reservadas).each(function (i, v) {
                jQuery('[data-butaca="' + v + '"]').removeClass('seleccionado');
                jQuery('[data-butaca="' + v + '"]').removeClass('estado_1');
                jQuery('[data-butaca="' + v + '"]').addClass('estado_vendido');
                jQuery('[data-butaca="' + v + '"]').data('skip', 1);
                delete butacas_seleccionadas[v];
                actualizar_lista_butacas_seleccionadas();
            })
            bind_butacas();
            ace_alert(data.msg);
        }

        if (data.ans == 500 || data.code == 500) {
            ace_alert(data.msg);
        }


    }).fail(function () {
        ace_alert("Lamentamos comunicarle que la pasarela de pagos en línea no está disponible en estos momentos. Por favor reintente más tarde. Gracias! <br><br><a class='reload_app' href='https://primecinemas.com.bo'>Ir al inicio</a>", "permanent");
    }).always(function () {
        run_countdown();
    });
}

/*guarda la informacion del pedido en la db de wordpress*/
function ace_store_init_data(data) {
    var ret = false;
    var _nonce = "863512ddcf";
    jQuery.ajax({
        type: "post",
        data: {
            cod_transaccion: cod_transaccion,
            payment_method: data.payment_method,
            payment_gwid: data.payment_gwid,
            nit: jQuery('#ace_nit').val(),
            razon_social: jQuery('#ace_razon_social').val(),
            email: jQuery('#ace_email').val(),
            amount: precio_total,
            details: data.detalle,
            ret_cod: data.ans,
            ret_msg: data.msg,
        },
        url: 'https://primecinemas.com.bo/wp-json/acedevel_ecommerce/v1/reservar',
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader('X-WP-Nonce', _nonce);
        },
        async: false,
    }).done(function (data2) {
        if (data2.ans == 200) {
            ret = true;
        } else {
            ace_alert(data2.msg + "<br><br><a class='reload_app' href='https://primecinemas.com.bo'>Ir al inicio</a>", "permanent");
        }
    }).fail(function () {
    });

    return ret;
}


    function ace_pagar_con_bcp_qr() {
    if (processing_ss)
        return;

    ocultar_metodos_pago();
    pausar_countdown();
    ace_alert("Preparando Pagos con QR, por favor espere ...", "permanent");

    jQuery.ajax({
        type: "post",
        data: {
            cod_transaccion: cod_transaccion,
            metodo_pago: 'bcp'
        },
        url: 'https://engine.primecinemas.com.bo/gomm_cinema/bcp/pagar',
        dataType: 'json',
    }).done(function (data) {
        if (data.ans == 200) {
            jQuery("#bcp_qr_img").prop('src', 'data:image/png;base64,'+data.imagen_qr);
            jQuery("#bcp_qr_link").prop('href', 'data:image/png;base64,'+data.imagen_qr);
            jQuery("#bcp_qr_link").prop('download', 'pago_qr_' + data.payment_gwid + '.jpg');
            jQuery("#seccion_pago_bcp").show();
            bcp_qr_id = data.payment_gwid;
            cerrar_ace_alert();

            //guardar el registro en la DB del cliente
            if(! ace_store_init_data(data)){
                ace_alert("Ocurrió un problema al guardar el registro de su compra. Por favor reintente más tarde. Gracias! <br><br><a class='reload_app' href='https://primecinemas.com.bo'>Ir al inicio</a>", "permanent");
                return;
            }

        } else {
            ace_alert(data.msg, 'mostrar_metodos_pago');
        }

    }).fail(function () {
        ace_alert("En estos momentos la pasarela de pagos BCP QR no está disponible. Por favor reintente más tarde o reintente con otro método de pago. Gracias!>Ir al inicio</a>", "mostrar_metodos_pago");
    }).always(function () {
        run_countdown();
    });
}

    function ace_verificar_pago_bcp_qr() {
    if (processing_ss)
        return;

    pausar_countdown();
    ace_alert("Verificando su pago, por favor espere ...", "permanent");

    /*jQuery.ajax({
        type: "post",
        data: {
            cod_transaccion: cod_transaccion,
        },
        url: 'https://engine.primecinemas.com.bo/gomm_cinema/bcp/verificar_pago',
        dataType: 'json',
    }).done(function (data) {
        if (data.ans == 200) {
            ace_alert(data.msg + " La factura y tickets fueron enviados a su correo. Revise su correo electrónico.", 'terminar_venta');
        } else{
            ace_alert(data.msg);
        }

    }).fail(function () {
        ace_alert("Detectamos lentitud en la red del BCP QR. Por favor espere unos segundos y reintente nuevamente.");
    }).always(function () {
        run_countdown();
    });*/

    jQuery.ajax({
        type: "post",
        data: {
            id: bcp_qr_id,
            cod_transaccion: cod_transaccion,
        },
        url: 'https://primecinemas.com.bo/wp-json/acedevel_ecommerce/v1/bcp/verificar_pago',
        dataType: 'json',
    }).done(function (data) {
        if (data.status === 'COMPLETADO') {
            ace_alert("Estado del pago: " + data.status + " La factura y tickets fueron enviados a su correo. Revise su correo electrónico.", 'terminar_venta');
        } else {
            ace_alert("Estado del pago: " + data.status);
        }
    }).fail(function () {
        ace_alert("Detectamos lentitud en la red del BCP QR. Por favor espere unos segundos y reintente nuevamente.");
    }).always(function () {
        run_countdown();
    });
}

function ace_alert(str, opt) {
    let callback = '';
    if (opt == 'mostrar_metodos_pago') {
        callback = 'mostrar_metodos_pago()'
    }

    if(opt == 'terminar_venta'){
        callback = 'terminar_venta()'
    }

    if (opt != 'permanent') {
        str = str + '<br><button class="btn_cerrar_ace_alert" onclick="cerrar_ace_alert(\'' + callback + '\')">Cerrar</button>';
    }

    jQuery("#ace_alert>p").html(str);
    jQuery("#ace_alert").show();
}

function cerrar_ace_alert(callback) {
    jQuery("#ace_alert>p").html("");
    jQuery("#ace_alert").hide();

    if (callback != '') {
        eval(callback);
    }
}

function terminar_venta(){
    // Simulate an HTTP redirect:
    window.location.replace("/mis-tickets/");
}

function reload_app(url = '') {
    if (url !== '') {
        //window.location.href = url;
        window.location.replace(url);
    } else {
        window.location.reload();
    }
}

function ordenar_programaciones() {
    var ul = jQuery(".programaciones:first");
    var arr = jQuery.makeArray(ul.children("li"));

    arr.sort(function (a, b) {
        var textA = jQuery(a).data('pesots');
        var textB = jQuery(b).data('pesots');

        if (textA < textB) return -1;
        if (textA > textB) return 1;

        return 0;
    });

    ul.empty();

    jQuery.each(arr, function () {
        ul.append(this);
    });
}

function __ace_left() {
    var footer = document.getElementById('footer-area')

    if (footer == null) {
        ace_alert('¡Footer no encontrado!');
        alert('¡Footer no encontrado!')
        return;
    }

    var html = '<a style="font-size: 18px !important; font-weight: bolder !important; color: #C03332 !important; text-decoration: none !important; display: block !important;"\n' +
        '       href="http://es.acedevel.com/contactenos?ref=gomm" target="_blank">\n' +
        '        *Desarrollado por Acedevel Networks S.R.L.\n' +
        '    </a>'
    footer.innerHTML = html
}

jQuery(document).ready(function () {
    get_data();

    jQuery("#realizar_reserva").click(function () {
        realizar_reserva();
    });

    jQuery(".bradcrumb_back_section").click(function (e) {
        ocultar_breadcrumb();
    });

    // setInterval(__ace_left, 5000);

    //el contador de tiempo se ejecuta tras el cargado de los datos json
});