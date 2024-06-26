export enum RabbitMQ {
  UserQueue = 'users',
  ServicesQueue = 'services',
  PostulacionQueue = 'postulaciones',
}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
  FIND_ONE = 'FIND_USER',
  UPDATE = 'UPDATE_USER',
  DELETE = 'DELETE_USER',
  VALID_USER = 'VALID_USER',
}

export enum    ServicesMSG{
  CREATE = 'CREATE_SERVICES',
  FIND_ALL =  'FIND_SERVICES',
  FIND_ONE = 'FIND_SERVICE',
  UPDATE = 'UPDATE_SERVICE',
  DELETE = 'DELETE_SERVICE',
  GET_AVAILABLE_HOURS = 'GET_AVAILABLE_HOURS',
  FIND_TOP_REQUESTED = 'FIND_TOP_REQUESTED',
  GET_TOTAL_SALES = 'GET_TOTAL_SALES',
  GET_MONTHLY_SALES = 'GET_MONTHLY_SALES',
  GET_ANNUAL_SALES = 'GET_ANNUAL_SALES',
  GET_TOP_SERVICES = 'GET_TOP_SERVICES',
}



export enum PostulacionMsg {
  CREATE = 'CREATE_POSTULACION',
  FIND_ALL = 'FIND_POSTULACIONES',
  FIND_ONE = 'FIND_POSTULACION',
  UPDATE = 'UPDATE_POSTULACION',
  DELETE = 'DELETE_POSTULACION',
}