<?php

require('./fpdf.php');

class PDF extends FPDF
{
    // Cabecera de página
    function Header()
    {
        $this->Image('apptlan.png', 10, 10, 40); //logo de la empresa,moverDerecha,moverAbajo,tamañoIMG
        $this->SetFont('Arial', 'B', 19); //tipo fuente, negrita(B-I-U-BIU), tamañoTexto
        $this->Cell(45); // Movernos a la derecha
        $this->SetTextColor(0, 0, 0); //color
        //Nombre de la empresa
        $this->Cell(50); // mover a la derecha
        $this->SetFont('Arial', 'B', 20);
        $this->Cell(.1, 35, utf8_decode("APPTLAN "), 0, 1, 'C', 0);
        
        /* UBICACION */
        $this->Cell(7);  // mover a la derecha
        $this->SetFont('Arial', 'I', 10);
        $this->Cell(96, 10, utf8_decode("Ubicación : Autlan de Navarro, Jalisco"), 0, 0, 'I', 0);
        $this->Ln(5);

        /* TELEFONO */
        $this->Cell(7);  // mover a la derecha
        $this->SetFont('Arial', 'I', 10);
        $this->Cell(59, 10, utf8_decode("Teléfono :   317 - 113 - 4844"), 0, 0, 'I', 0);
        $this->Ln(5);

        /* COREEO */
        $this->Cell(7);  // mover a la derecha
        $this->SetFont('Arial', 'I', 10);
        $this->Cell(85, 10, utf8_decode("Correo :      edsonrf896@gmail.com"), 0, 0, 'I', 0);
        $this->Ln(30);

        /* TITULO DE LA TABLA */
        $this->Cell(50); // mover a la derecha
        $this->SetFont('Arial', 'B', 15);
        $this->Cell(90, 10, utf8_decode("Cotización de chatbot"), 0, 1, 'C', 0);
        $this->Ln(7);
    }

    // Pie de página
    function Footer()
    {
        $this->SetY(-15); // Posición: a 1,5 cm del final
        $this->SetFont('Arial', 'I', 8); //tipo fuente, negrita(B-I-U-BIU), tamañoTexto
        $this->Cell(0, 10, utf8_decode('Página ') . $this->PageNo() . '/{nb}', 0, 0, 'C'); //pie de pagina(numero de pagina)

        $this->SetY(-15); // Posición: a 1,5 cm del final
        $this->SetFont('Arial', 'I', 8); //tipo fuente, cursiva, tamañoTexto
        $hoy = date('d/m/Y');
        $this->Cell(0, 10, utf8_decode($hoy), 0, 0, 'R'); // pie de pagina(fecha de pagina)
    }

    function FancyTable($header, $data, $total)
    {
        // Colores, ancho de línea y fuente en negrita
        $this->SetFillColor(0, 102, 204); // Fondo de cabecera azul
        $this->SetTextColor(255, 255, 255); // Texto de cabecera blanco
        $this->SetDrawColor(0, 51, 102); // Líneas de la tabla azul oscuro
        $this->SetLineWidth(.3);
        $this->SetFont('', 'B');
        // Cabecera
        $w = array(120, 70); // Anchuras de las columnas
        for ($i = 0; $i < count($header); $i++)
            $this->Cell($w[$i], 10, $header[$i], 1, 0, 'C', true); // Altura de la cabecera incrementada
        $this->Ln();
        // Restauración de colores y fuentes
        $this->SetFillColor(204, 229, 255); // Fondo de filas azul claro
        $this->SetTextColor(0, 0, 0); // Texto de filas negro
        $this->SetFont('Arial', '', 12); // Tamaño de la fuente reducido
        // Datos
        $fill = false;
        foreach ($data as $row) {
            $this->Cell($w[0], 10, utf8_decode($row[0]), 'LR', 0, 'L', $fill); // Altura de la fila incrementada
            $this->Cell($w[1], 10, utf8_decode($row[1]), 'LR', 0, 'R', $fill); // Altura de la fila incrementada
            $this->Ln();
            $fill = !$fill;
        }
        // Línea de cierre
        $this->Cell(array_sum($w), 0, '', 'T');
        $this->Ln(); // Añade una línea en blanco antes del total

        // Fila de total
        $this->SetFont('Arial', 'B', 12); // Negrita para el total
        $this->Cell($w[0], 10, 'Total', 1, 0, '', true);
        $this->Cell($w[1], 10, utf8_decode('$' . number_format($total, 2)), 1, 0, 'R', true);
    }
}

// Recibir y procesar los datos del formulario
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['elements'])) {
    $elements = json_decode($_POST['elements'], true);
    $total = 0;

    $pdf = new PDF();
    $pdf->AddPage();
    $pdf->AliasNbPages();

    $header = array('Elemento', 'Costo');
    $data = array();

    foreach ($elements as $element) {
        $data[] = array($element['element'], $element['cost']);
        $total += floatval($element['cost']);
    }

    $pdf->FancyTable($header, $data, $total);
    $pdf->Output('Cotizacion_Apptlan.pdf', 'I');
} else {
    echo "No data received";
}
?>
