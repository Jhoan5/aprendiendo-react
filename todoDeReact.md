# Apuntes sobre React

## Sitios web para aprender React

- [React Docs](https://react.dev)
- [React Wiki](https://www.reactjs.wiki)
- [w3School React](https://www.w3schools.com/react)
- [Curso de YouTube Midudev](https://www.youtube.com/c/midudev)
- [Curso de YouTube jhonmircha](https://www.youtube.com/@jonmircha)
- [Curso de YouTube Dev Ed en Ingles](https://www.youtube.com/c/DevEd)

## Sitios Web de Componentes React

- [Acernity UI](https://ui.aceternity.com/)
- [Material Ui](https://mui.com/)
- [Chakra UI](https://v2.chakra-ui.com/)
- [Ant Design](https://ant.design/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [Groomet](https://v2.grommet.io/)
- [Mantine](https://mantine.dev/)
- [Next UI](https://nextui.org/)
- [Shadcn UI](https://ui.shadcn.com/)
- [React-magic-motion](https://www.react-magic-motion.com/)

- En proceso ...

## Respuestas a preguntas básicas

### 1. ¿Qué es React?

React es una librería de JavaScript para crear interfaces de usuario de código abierto. Mantenido por Meta y la comunidad de desarrolladores.
Que se diferencia de vanilla JavaScript por ser declarativo y no imperativo.

### 2. ¿Qué es un hook?

Un hook es una función especial que nos permite "acceder" a los estados y los efectos. Se puede decir que es medio por el cual interactuamos con la interfaz y vamos separando la lógica del diseño

### 3. ¿Qué es un componente?

Un componente es una función que recibe unos parámetros o también llamados props y devuelve un elemento HTML que se puede utilizar en diferentes interfaces sin tener que modificar su estructura en gran medida.

### 4. ¿Qué es JSX?

JSX es una extensión de JavaScript que nos permite escribir código HTML dentro de JavaScript. Pero teniendo en cuenta que no es código HTML sino JavaScript. Por lo que sera compilado a JavaScript y luego a HTML.

### 5. ¿Qué es un estado? useSate

Un estado es una variable que almacena información que puede cambiar con el tiempo. Para ello el Hook useState nos proporciona una valor actual y una función para poner el nuevo valor actual o estado.

### 6. ¿Qué es un efecto? useEffect

Un efecto es una función que se ejecuta cuando el estado cambia o sus dependencias. Pero también se ejecuta al menos una vez.

### 7. ¿Qué es un contexto? useContext

Un contexto es una forma de compartir datos entre componentes sin pasarlos como props. Para ello el Hook useContext nos proporciona un valor actual y una función para poner el nuevo valor actual o estado.

### 8. ¿Qué es un ref? useRef

Crea una referencia mutable que se mantiene durante el ciclo de vida de un componente. Las referencias creadas con useRef son objetos con una propiedad llamada current, que se puede usar para almacenar valores mutables que no desencadenan una re-renderización del componente cuando cambian.

Pueden verse como un useSate que no renderiza la página o una forma de tener id o clases dentro de HTML para poder acceder a los elementos.

### 9. ¿Qué es un identificador? useId

Nos permite crear identificadores únicos para elementos en formularios o listas.

### 10. ¿Cómo crear propios Hooks? Custom Hooks

Para crear Hooks necesitamos hacerlo como si fuera cualquier función pero utilizando la palabra use dentro del nombre del hook a crear.
Son útiles para poder trabajar con otros hooks y separar la lógica de la interfaz.

### 11. useMemo

Nos permite memorizar el resultado de un valor calculado para no se vuelva a ejecutar por cada renderización a menos que cambien las dependencias.

### 12. useCallback

Nos permite hacer la misma operación de useMemo pero con funciones.

### 13. useReducer
