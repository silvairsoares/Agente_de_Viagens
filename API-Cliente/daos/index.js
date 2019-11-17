const ClienteMemoryDAO = require('./cliente-memory-dao');

let memoryDAO = null

exports.getInstance = (type) => 
{
  if (type === 'memory') 
  {
    if (memoryDAO === null) 
    {
      memoryDAO = new ClienteMemoryDAO()
    }
    return memoryDAO
  }
  throw new Error('Unknown DAO type ' + type)
}
