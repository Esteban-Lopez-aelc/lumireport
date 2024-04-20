<?php
// Incluir archivo de configuración
include('php/configuracion.php');

try {
    // Preparar consulta SQL para obtener las coordenadas
    $consulta = $conexion->prepare("SELECT x_long, y_lat FROM postes");

    // Ejecutar consulta
    $consulta->execute();

    // Obtener resultados
    $coordenadas = $consulta->fetchAll(PDO::FETCH_ASSOC);

    // Imprimir las coordenadas como JSON
    echo json_encode($coordenadas);
} catch (PDOException $e) {
    // Manejar error de conexión
    echo "Error de conexión: " . $e->getMessage();
}
?>
