export enum RabbitMQ {
  UserQueue = 'users',
  ServicesQueue = 'services',
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
  
}