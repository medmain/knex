// MySQL2 Client
// -------
import { Client_MySQL } from '../mysql';
import { Transaction_MySQL2 } from './transaction';

// Always initialize with the "QueryBuilder" and "QueryCompiler"
// objects, which extend the base 'lib/query/builder' and
// 'lib/query/compiler', respectively.
export class Client_MySQL2 extends Client_MySQL {
  // The "dialect", for reference elsewhere.
  driverName = 'mysql2';

  transaction() {
    return new Transaction_MySQL2(this, ...arguments);
  }

  _driver() {
    return require('mysql2');
  }

  validateConnection(connection) {
    if (connection._fatalError) {
      return false;
    }
    return true;
  }
}

export default Client_MySQL2;
