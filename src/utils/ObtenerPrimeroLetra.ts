export function obtenerNombre(name: string) {
    if (!name || typeof name !== 'string') {
        console.error('Nombre no válido');
        return ''; // O maneja el error de otra manera según tu lógica
    }

    // Elimina espacios en blanco adicionales y divide la cadena en palabras
    let palabras = name.trim().split(/\s+/);

    // Obtener la primera letra de cada palabra y unirlas
    let iniciales = palabras.map(palabra => palabra.charAt(0)).join('');

    return iniciales.toUpperCase(); // Convertir a mayúsculas
}
