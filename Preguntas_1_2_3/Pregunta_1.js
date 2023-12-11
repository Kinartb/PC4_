#!/usr/bin/env node

// Requerir el módulo 'fs' (file system) para trabajar con archivos
const fs = require('fs');

// Obtener argumentos de la línea de comandos
const args = process.argv.slice(2);

// Validar la cantidad mínima de argumentos
if (args.length < 2) {
  console.error('Uso: grep.js cadena [-n] [-l] [-i] [-v] [-x] archivo1 [archivo2 ...]');
  process.exit(1);
}

// Obtener la cadena a buscar y los archivos
const cadenaBusqueda = args.shift();
const archivos = args.filter(arg => !arg.startsWith('-'));

// Función principal de búsqueda
function grep(contenido, opciones) {
  const { numeroLinea, mostrarNombreArchivo, insensibleMayusculas, invertirCoincidencia, coincidenciaExacta } = opciones;

  // Dividir el contenido del archivo en líneas
  const lineas = contenido.split('\n');
  const lineasCoincidentes = [];

  // Iterar sobre cada línea del archivo
  for (let i = 0; i < lineas.length; i++) {
    const linea = lineas[i];
    const lineaParaComparar = insensibleMayusculas ? linea.toLowerCase() : linea;

    // Verificar si la línea contiene la cadena de búsqueda
    if ((coincidenciaExacta && lineaParaComparar === cadenaBusqueda) ||
        (!coincidenciaExacta && lineaParaComparar.includes(cadenaBusqueda)) !== invertirCoincidencia) {
      // Formatear la línea coincidente según las opciones
      const lineaResultado = numeroLinea ? `${i + 1}:${linea}` : linea;
      lineasCoincidentes.push(mostrarNombreArchivo ? `${opciones.nombreArchivo}:${lineaResultado}` : lineaResultado);
    }
  }

  return lineasCoincidentes;
}

// Función para procesar un archivo
function procesarArchivo(nombreArchivo, opciones) {
  try {
    // Leer el contenido del archivo
    const contenido = fs.readFileSync(nombreArchivo, 'utf8');
    // Realizar la búsqueda en el contenido del archivo
    const lineasCoincidentes = grep(contenido, { ...opciones, nombreArchivo });
    return lineasCoincidentes;
  } catch (error) {
    // Manejar errores al leer el archivo
    console.error(`Error al leer el archivo ${nombreArchivo}: ${error.message}`);
    return [];
  }
}

// Configuración de opciones por defecto
const opciones = {
  numeroLinea: false,
  mostrarNombreArchivo: archivos.length > 1,
  insensibleMayusculas: false,
  invertirCoincidencia: false,
  coincidenciaExacta: false,
};

// Procesar los indicadores
while (args.length > 0 && args[0].startsWith('-')) {
  const indicador = args.shift();

  switch (indicador) {
    case '-n':
      opciones.numeroLinea = true;
      break;
    case '-l':
      opciones.mostrarNombreArchivo = true;
      break;
    case '-i':
      opciones.insensibleMayusculas = true;
      break;
    case '-v':
      opciones.invertirCoincidencia = true;
      break;
    case '-x':
      opciones.coincidenciaExacta = true;
      break;
    default:
      // Manejar indicadores no reconocidos
      console.error(`Indicador no reconocido: ${indicador}`);
      process.exit(1);
  }
}

// Procesar archivos
if (archivos.length === 0) {
  // Manejar el caso de no proporcionar archivos para buscar
  console.error('Se requiere al menos un archivo para buscar.');
  process.exit(1);
}

// Bandera para determinar si se encontró alguna coincidencia en al menos un archivo
let seEncontroCoincidencia = false;

// Iterar sobre cada archivo proporcionado
for (const nombreArchivo of archivos) {
  // Procesar cada archivo y obtener las líneas coincidentes
  const lineasCoincidentes = procesarArchivo(nombreArchivo, opciones);

  // Imprimir las líneas coincidentes si las hay
  if (lineasCoincidentes.length > 0) {
    seEncontroCoincidencia = true;
    console.log(lineasCoincidentes.join('\n'));
  }
}

// Imprimir un mensaje si no se encontraron coincidencias en ningún archivo
if (!seEncontroCoincidencia) {
  console.log('No se encontraron coincidencias.');
}
