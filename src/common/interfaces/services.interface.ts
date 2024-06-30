export interface IService extends Document{
    nombre: string;
    descripcion: string;
    precio: string;
    contacto: string;
    fotos: string[]; // Array de URLs de las fotos
    user_id: string;
    rating: number;
    comments: Comment[];// Array de URLs de las fotos
 }