<?php

    if ($_SESSION['rol_id'] == 1) {
        echo '<nav class="side-menu">
        <ul class="side-menu-list">
            <li class="blue-dirty">
                <a href="../Home/">
                    <span class="glyphicon glyphicon-th "></span>
                    <span class="lbl">Inicio</span>
                </a>
            </li>
            <li class="blue-dirty">
                <a href="../NuevoTicket/">
                    <span class="glyphicon glyphicon-th "></span>
                    <span class="lbl">Nuevo Ticket</span>
                </a>
            </li>
            <li class="blue-dirty">
                <a href="../ConsultarTicket/">
                    <span class="glyphicon glyphicon-th "></span>
                    <span class="lbl">Consultar Ticket</span>
                </a>
            </li>
        </ul>
    </nav>';
    }else{
        echo '<nav class="side-menu">
        <ul class="side-menu-list">
            <li class="blue-dirty">
                <a href="../Home/">
                    <span class="glyphicon glyphicon-th "></span>
                    <span class="lbl">Inicio</span>
                </a>
            </li>
            <li class="blue-dirty">
                <a href="../MntUsuario/">
                    <span class="glyphicon glyphicon-th "></span>
                    <span class="lbl">Usuarios</span>
                </a>
            </li>
            <li class="blue-dirty">
                <a href="../MntPrioridad/">
                    <span class="glyphicon glyphicon-th "></span>
                    <span class="lbl">Prioridad</span>
                </a>
            </li>
            <li class="blue-dirty">
                <a href="../MntCategoria/">
                    <span class="glyphicon glyphicon-th "></span>
                    <span class="lbl">Categorías</span>
                </a>
             </li>
            <li class="blue-dirty">
                <a href="../ConsultarTicket/">
                    <span class="glyphicon glyphicon-th "></span>
                    <span class="lbl">Consultar Ticket</span>
                </a>
            </li>
        </ul>
    </nav>';
    }

?>

